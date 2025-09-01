---
title: 使用 Github Action 为 Edge One 自动申请ECC + RSA 泛域名证书
createTime: 2025/08/19 12:16:56
permalink: /articles/acme-gha-ecc-rsa/
tags:
  - Github Action
  - ACME
---
## TLDR
Fork [我的仓库](https://github.com/YuXiaoyuYo/EdgeOneAcmeSSL)，然后查看 [准备工作](#准备工作)

## 前言
由于网站迁移到了 Edge One 上，不支持直接签发泛域名证书，但是可以同时直接上传多个自定义证书（一个ECC、一个RSA、~~一个国密~~）。所以就想直接布置一套自动化签发证书的系统，又因为没有海外的服务器，所以选择 Github Action 来部署证书

## 准备工作

::: tip 提示
我的域名托管在 _Cloudflare_ 上，如果你的域名在其他 dns 可以参考[ACME.SH Wiki](https://github.com/acmesh-official/acme.sh/wiki/dnsapi) 
:::

1. 从[腾讯云](https://console.cloud.tencent.com/cam/capi) 获取 Api 密钥，把 SecretId 以 TENCENTCLOUD_SECRET_ID 填入 Github Secrets，SecretKey 以 TENCENTCLOUD_SECRET_KEY 填入
2. 从对应的 DNS 厂商获取 Api 密钥，Action 中默认为 Cloudflare
3. 将你的邮箱填入 Secrets 中
4. 将你的域名根域填入 Action 文件中的 env: DOMAIN

确保你已开启 Action，然后手动触发一次
## Action 代码

```yml title=".github/workflows/acme.yml"
name: ACME

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "main" branch
  schedule:
    - cron: '0 0 1 * *' 

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

env: 
  ACME: /home/runner/.acme.sh/acme.sh
  EMAIL: ${{ secrets.EMAIL }}
  CF_Zone_ID: ${{ secrets.CF_Zone_ID }}
  CF_Token: ${{ secrets.CF_Token }}
  TENCENTCLOUD_SECRET_ID: ${{ secrets.TENCENTCLOUD_SECRET_ID }}
  TENCENTCLOUD_SECRET_KEY: ${{ secrets.TENCENTCLOUD_SECRET_KEY }}
  DOMAIN: 

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v4

      # Generates the Certificate using acme.sh
      # OSCP is not available in letsencrypt
      - name: Issue Cert
        run: |
          curl https://get.acme.sh | sh -s email=$EMAIL
          $ACME --set-default-ca --server letsencrypt
          $ACME --issue -d $DOMAIN -d *.$DOMAIN --dns dns_cf --keylength 2048 
          $ACME --issue -d $DOMAIN -d *.$DOMAIN --dns dns_cf --keylength ec-256
          mkdir -p SSL/rsa/
          mkdir -p SSL/ecc/
          $ACME --install-cert -d $DOMAIN -d *.$DOMAIN --key-file ./SSL/rsa/$DOMAIN.key --fullchain-file ./SSL/rsa/$DOMAIN.cer
          $ACME --install-cert -d $DOMAIN -d *.$DOMAIN --key-file ./SSL/ecc/$DOMAIN.key --fullchain-file ./SSL/ecc/$DOMAIN.cer --ecc

      - uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '9.0.x'
      
      - name: Upload to Tencent Cloud
        run: |
          dotnet run -- ./SSL/rsa/$DOMAIN.cer ./SSL/rsa/$DOMAIN.key ./SSL/ecc/$DOMAIN.cer ./SSL/ecc/$DOMAIN.key
```

## Action 中使用的C#代码
```csharp title='Program.cs'
using TencentCloud.Common;
using TencentCloud.Ssl.V20191205;
using TencentCloud.Ssl.V20191205.Models;
using Newtonsoft.Json.Linq;

var cred = new Credential
{
    SecretId = GetEnvVar("TENCENTCLOUD_SECRET_ID"),
    SecretKey = GetEnvVar("TENCENTCLOUD_SECRET_KEY"),
};

var domain = GetEnvVar("DOMAIN");
var client = new SslClient(cred, "");

var certificates = JObject.Parse(AbstractModel.ToJsonString(
    client.DescribeCertificatesSync(new DescribeCertificatesRequest { SearchKey = domain })))["Certificates"];

var rsaCertificateId = GetCertificateId(certificates, domain, "RSA");
var eccCertificateId = GetCertificateId(certificates, domain, "ECC");

if (string.IsNullOrWhiteSpace(rsaCertificateId) || string.IsNullOrWhiteSpace(eccCertificateId))
{
    UploadCertificates(client, args);
    return;
}

UpdateCertificate(client, rsaCertificateId, args[0], args[1]);
UpdateCertificate(client, eccCertificateId, args[2], args[3]);

Console.WriteLine("等待30秒，确保证书更新成功");
Thread.Sleep(30000);

while (!IsCertificateUpdated(client, rsaCertificateId, eccCertificateId, args))
{
    Console.WriteLine("证书更新中，再等待30秒");
    Thread.Sleep(30000);
}

DeleteCertificate(client, rsaCertificateId);
DeleteCertificate(client, eccCertificateId);

return;
// END OF THE MAIN CLASS


static string GetEnvVar(string key) =>
    Environment.GetEnvironmentVariable(key) ?? throw new Exception($"请设置{key}环境变量");

static string GetCertificateId(JToken? certificates, string domain, string algorithm) =>
    certificates?.FirstOrDefault(cert =>
        cert["CertSANs"]!.ToString().Contains(domain) &&
        cert["CertSANs"]!.ToString().Contains("*." + domain) &&
        cert["EncryptAlgorithm"]!.ToString().Contains(algorithm))?["CertificateId"]?.ToString() ?? string.Empty;

static void UploadCertificates(SslClient client, string[] args)
{
    UploadCertificate(client, args[0], args[1]);
    UploadCertificate(client, args[2], args[3]);
    Console.WriteLine("证书上传成功，请前往控制台绑定证书");
}

static void UploadCertificate(SslClient client, string publicKeyPath, string privateKeyPath)
{
    var req = new UploadCertificateRequest
    {
        CertificatePublicKey = File.ReadAllText(publicKeyPath),
        CertificatePrivateKey = File.ReadAllText(privateKeyPath),
        CertificateType = "SVR",
        Alias = $"上传于 {DateTime.Now:yyyyMMddHHmmss}",
    };

    var resp = client.UploadCertificateSync(req);
    if (string.IsNullOrWhiteSpace(JObject.Parse(AbstractModel.ToJsonString(resp))["CertificateId"]?.ToString()))
        throw new Exception("上传证书失败");
}

static void UpdateCertificate(SslClient client, string certificateId, string publicKeyPath, string privateKeyPath)
{
    var req = new UpdateCertificateInstanceRequest
    {
        OldCertificateId = certificateId,
        ResourceTypes = ["teo"],
        CertificatePublicKey = File.ReadAllText(publicKeyPath),
        CertificatePrivateKey = File.ReadAllText(privateKeyPath),
        ExpiringNotificationSwitch = 1,
        Repeatable = true,
        AllowDownload = true,
    };

    client.UpdateCertificateInstanceSync(req);
}

static bool IsCertificateUpdated(SslClient client, string rsaCertificateId, string eccCertificateId, string[] args)
{
    var rsaResp = client.UpdateCertificateInstanceSync(new UpdateCertificateInstanceRequest
    {
        OldCertificateId = rsaCertificateId,
        ResourceTypes = ["teo"],
        CertificatePublicKey = File.ReadAllText(args[0]),
        CertificatePrivateKey = File.ReadAllText(args[1]),
    });

    var eccResp = client.UpdateCertificateInstanceSync(new UpdateCertificateInstanceRequest
    {
        OldCertificateId = eccCertificateId,
        ResourceTypes = ["teo"],
        CertificatePublicKey = File.ReadAllText(args[2]),
        CertificatePrivateKey = File.ReadAllText(args[3]),
    });

    var rsaDeployRecordId = JObject.Parse(AbstractModel.ToJsonString(rsaResp))["DeployRecordId"]?.ToString();
    var eccDeployRecordId = JObject.Parse(AbstractModel.ToJsonString(eccResp))["DeployRecordId"]?.ToString();
    
    if(!int.TryParse(rsaDeployRecordId, out var x) || !int.TryParse(eccDeployRecordId, out var y))
        throw new Exception("获取部署记录ID失败");
    
    return x > 0 && y > 0;
}

static void DeleteCertificate(SslClient client, string certificateId)
{
    client.DeleteCertificateSync(new DeleteCertificateRequest { CertificateId = certificateId });
    Console.WriteLine($"{certificateId}已删除");
}
```

## 注意事项
使用这种方法进行证书更新，腾讯云默认是会对所有绑定该证书的 Edge One 域名进行更新（不包括 Pages 的）




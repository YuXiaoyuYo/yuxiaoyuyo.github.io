---
title: 使用 Github Action 为 Edge One 自动申请ECC + RSA 泛域名证书
createTime: 2025/08/19 12:16:56
permalink: /articles/acme-gha-ecc-rsa/
tags:
  - Github Action
  - ACME
---
## TLDR
如果你只想托管证书，不在乎到底是怎么做到的，可以直接 Fork [我的仓库](https://github.com/YuXiaoyuYo/EdgeOneAcmeSSL)
然后查看 [准备工作](#准备工作)

## 前言
由于网站迁移到了 Edge One 上，不支持直接签发泛域名证书，但是可以同时直接上传==多个==自定义证书（一个ECC、一个RSA、一个国密）。所以就想直接布置一套自动化签发证书的系统，又因为没有 ~~钱~~ 海外的服务器，所以选择 Github Action 来部署证书。

## 准备工作

::: tip 提示
我的域名托管在 _Cloudflare_ 上，如果你的域名在其他 dns 可以参考[ACME.SH Wiki](https://github.com/acmesh-official/acme.sh/wiki/dnsapi) 
:::
## Action 代码

```yml title=".github/workflows/acme.yml"
name: ACME
on:
    # 可以自行修改，因为每次都是新签发并非续期所以最好时间长一点
    #  - cron: '0 0 * * *' 
    workflow_dispatch:

env: 
  ACME: /home/runner/.acme.sh/acme.sh
  EMAIL: ${{ secrets.EMAIL }}
  CF_Zone_ID: ${{ secrets.CF_Zone_ID }}
  CF_Token: ${{ secrets.CF_Token }}
  # 你的域名
  DOMAIN: example.com

jobs:
  build:
    runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    
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

    # Uploads the generated certificate files as artifacts
    # 不要在公共仓库直接上传私钥 // [!code warning]
    - name: Upload certificate files
        uses: actions/upload-artifact@v4
        with:
          name: acme-certs
          path: |
            ./SSL/*
```




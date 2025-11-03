<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <div class="footer footer-content">
        <div class="footer-left">
            <a
                style="text-decoration: none"
                class="footer-text"
                href="https://beian.miit.gov.cn/"
                target="_blank"
            >
                鲁ICP备2025182726号-2
            </a>
            <a
                style="text-decoration: none"
                class="footer-text"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37020202370465"
                target="_blank"
            >
                鲁公网安备37020202370465号
            </a>
        </div>
        <p class="footer-text">© {{ year }} Yu Xiaoyu</p>
    </div>
</template>

<style>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;
  color: #666;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 0px 8px;
}

/* 宽屏时：左边两条横向排列 + 右边版权 */
@media (min-width: 768px) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    color: #666;
  }

  .footer-left {
    flex-direction: row;
  }
}
</style>

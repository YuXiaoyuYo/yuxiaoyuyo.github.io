<script setup>
import { Layout } from 'vuepress-theme-plume/client'

const year = new Date().getFullYear()
</script>

<template>
  <Layout>
    <template #footer-content>
        <div class="footer footer-content">
            <div class="footer-left">
                <a style="text-decoration: none;" class="footer-text" href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2025182726号-1</a>
                <!--a style="text-decoration: none;" class="footer-text" href="http://www.beian.gov.cn/" target="_blank">京公网安备 xxxxxxx号</a-->
            </div>
            <a style="text-decoration: none;" class="footer-text">© {{ year }} Yu Xiaoyu</a>
        </div>
    </template>
  </Layout>
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
  }
  .footer-left {
    flex-direction: row;
  }
  .footer-right {
    text-align: right;
  }
}
</style>
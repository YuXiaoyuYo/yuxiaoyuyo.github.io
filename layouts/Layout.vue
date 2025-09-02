<script setup>
import { Layout } from 'vuepress-theme-plume/client'

const year = new Date().getFullYear()
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <div class="nav-bar-title-before">
        <svg xmlns="http://www.w3.org/2000/svg" height="52" viewBox="0 0 541 300"><defs><linearGradient id="a" x1="100%" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#f8a154"/><stop offset="100%" stop-color="#fa6e58"/></linearGradient></defs><g fill="url(#a)"><path d="M70 150h140v140H70zM86 31l5 6c1 2 1 3-1 4L66 56l-7-8c-2-5-2-12-2-18l1-10c0-4-9-11-18-11-5 0-8 2-12 3v2l8 4c3 2 4 3 5 7 1 8 3 22 6 28 2 4 4 7 8 10-11 8-25 22-25 38 0 17 17 25 41 25 17 0 30-2 36-4 4-2 7-5 7-8 0-7-7-9-16-9-3 0-14 5-33 5-17 0-25-5-25-13 0-10 11-20 23-28 11-6 28-13 38-16 7-3 10-4 10-7 0-5-6-12-12-14-3-2-8-2-12-3Zm59 60v-4l12-3-11 16-1-9Zm-18 20c-1 0-2-1-2-3 0-5 5-12 13-18v3l1 12c-4 3-8 6-12 6Zm27-35c2 2 3 3 3 5l-12 2 2-8 20-5c2-1 3-2 3-4s-2-4-7-4c-1 0-6 4-15 6l1-2c0-3 3-4 3-6s-6-5-11-5l-5 2v1l4 2 2 2-1 7-7 1c-5 0-8-2-12-4l-1 1c2 6 5 9 11 9h8l-1 10c-11 5-21 15-21 25 0 5 3 8 7 8 5 0 11-3 17-8 1 2 2 3 4 3s4-1 4-3l-2-6c6-6 12-14 14-21 8 2 12 7 12 15 0 11-9 20-30 24v1c23 0 39-6 39-23 0-10-8-18-20-20l-1-3-7-3Z"/><path d="M193 87c-5 0-8-2-8-4s1-4 4-4c4 0 7 3 8 8h-4Zm-15-50-1 5c0 2 3 7 8 7l3-2c3-2 7-4 10-4 1-1 2 0 1 2l-25 25c-3 2-4 4-4 6s1 4 3 4l4-2c6-8 13-15 22-15 8 0 12 5 12 11 0 5-2 9-8 11-2-6-7-9-12-9s-9 3-9 8c0 6 6 9 14 9 14 0 23-7 23-17s-8-16-18-16l-11 2-1-1 16-13c3-2 5-2 5-4 0-3-6-8-9-8-1 0-1 2-4 2-4 2-11 3-14 3-2 0-3-2-4-4Z"/><path d="m261 58-16 5V44h15l4-2-12-12-6 10h-1V15c3-1 4-2 4-4l-19-2v31h-16l1 4h15v24l-18 5 7 18c2-1 3-2 3-4l8-5v31c0 2 0 2-2 2h-13v1c5 1 8 3 9 5 2 3 3 6 3 11 16-2 18-8 18-18V72l16-13Zm47 6c-3 11-8 21-14 30-9-8-16-17-21-30Zm9-12-9 9h-6V38h31l4-2-15-13-8 11h-12V16c3-1 4-2 4-4l-20-1v23h-27l1 4h26v23h-25l2 3h8c3 16 9 28 16 38-10 12-24 21-41 28l1 1c20-4 35-11 47-20 8 8 19 15 31 20 2-7 7-12 14-13v-1c-13-4-25-8-35-15 10-10 17-22 22-35 3 0 4 0 5-2Zm42-27c-3 8-9 20-16 28l1 1c10-5 19-13 25-20l4-1Zm0 22c-3 10-9 26-17 37l1 1 10-9v43h2c4 0 9-2 9-3V69c2 0 3-1 3-2l-4-2 6-9 4-1Zm53 3 3-2-7-5c2-1 4-3 3-6h22l3-1-10-9-6 7h-10c-2-2-5-4-10-5h-1c2 3 4 8 4 12v1l-4 5h-4V30c3 0 4-1 4-3l-15-1v21h-14l1 3h13v12l-10-2c-1 14-3 30-6 41l1 1c7-9 12-22 14-37l1-1v54h2c5 0 9-2 9-3V50Zm-15 10c4 10 5 23 5 31 5 10 20-10-4-32Zm24-3h-15l1 3h11v45l-2 2-10-1v2c4 0 6 2 7 3l2 8c12-1 14-6 14-14V60h6c2 0 3 0 3-2l-11-9Zm65-6c0 6-3 14-6 21-4 9-14 25-21 25-5 0-9-9-9-18 0-10 4-18 11-26 5-6 13-10 21-13 2 3 4 7 4 11Zm-2 71c41-2 57-21 57-44 0-25-20-44-48-44-14 0-26 5-36 13a49 49 0 0 0-18 36c0 15 9 30 19 30 14 0 28-22 33-37 3-7 4-15 4-21s-4-12-8-16h5c19 0 34 14 34 36 0 21-12 38-42 45Z"/><path fill="#fff" d="M178 207h-29v-38h43c2 0 3 0 4-2l-18-14-10 12H86l1 4h45v38H74l2 4h56v49c0 2-1 3-4 3l-22-1v2c9 1 12 3 15 6s4 7 4 12c21-1 24-9 24-21v-50h53l4-2-18-15Z"/><path d="M246 178h17v9h-21l1 3h55l3-1-10-8-6 6h-11v-9h20l3-1-10-8-5 6h-8v-5c3-1 3-2 3-3l-14-1v9h-18Zm-6 47v-12l4 11a411 411 0 0 0 26-13v-2l-9 2v-7h16v11h-12l1 3h26l-6 7Zm-18 8v-27h7v27Zm7-55v25h-7v-25Zm71 58h-1l-4 10-2 1h-8c-2 0-2-1-2-2v-17h17l3-1-11-9h8c1 0 2 0 2-2l-8-7-5 6h-2v-11h11l3-2-8-7-4 6h-2v-6c2 0 3-1 3-2l-13-1v9h-7l-5-5-4 5v-6c2 0 2-1 2-2l-13-1v9h-9l1 3h8v8l-10 1v-33l4-2-11-8-5 5h-5l-12-4v75h2c6 0 9-2 9-3v-7h7v6h2c4 0 9-3 9-4v-10h13c0 12-2 21-24 29l1 2c29-7 34-17 35-31h7v20c0 6 1 9 9 9h7c12 0 15-3 15-7 0-2 0-3-3-4Z"/><path d="m366 160-11 19h-26l-6-3 14-16Zm19 22v22h-22v-22Zm-22 48v-22h22v22Zm-35-22h21v22h-21Zm0-26h21v22h-21Zm-16 62h3c8 0 13-3 13-5v-5h57v7h2c5 0 13-3 13-4v-52l5-3-15-11-7 8h-24c9-5 18-12 24-17l6-2-15-12-8 8h-26l6-10c3 1 4 0 5-1l-21-6c-7 19-20 43-34 56l1 1c5-3 11-6 15-10Zm76 9h-92l1 3h114c2 0 3 0 4-2l-17-13Z"/></g></svg>
      </div>
    </template>
    <template #footer-content>
      <div class="footer footer-content">
        <div class="footer-left">
          <a style="text-decoration: none;" class="footer-text" href="https://beian.miit.gov.cn/"
            target="_blank">鲁ICP备2025182726号-1</a>
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
    color: #666;
  }

  .footer-left {
    flex-direction: row;
  }
}
</style>
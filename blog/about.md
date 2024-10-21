---
title: 关于
pageLayout: home
config:
  - type: banner
    banner: https://070715.xyz/images/glow_33703665.webp
    bannerMask:
      light: 0.1
      dark: 0.3
    hero:
      name: 于晓鱼
      tagline: 爱是人类最小的共产主义。
      actions:
        -
          text: 我的博客
          link: /
          theme: brand
        -
          text: Github
          link: https://github.com/YuXiaoyuYo
          theme: alt
        -
          text: Bilibili
          link: https://space.bilibili.com/353077925
          theme: alt
  - type: custom
createTime: 2024/10/17 13:26:39
permalink: /about/
draft: true
---

<script setup>
  import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
</script>

<h1 style="text-align: center;margin: 32px 0 32px">我的项目</h1>

<CardGrid>
  <RepoCard repo="YuXiaoyuYo/yuxiaoyu-blog" />
  <RepoCard repo="YuXiaoyuYo/yuxiaoyuyo.github.io" />
</CardGrid>
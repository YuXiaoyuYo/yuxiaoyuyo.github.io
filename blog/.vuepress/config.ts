import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '于晓鱼的Blog',
  description: '😿',

  bundler: viteBundler(),

  head: [
    ['link', {rel: 'shortcut icon', href: 'https://yu.nm.cn/images/favicon.webp'}]
  ],

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://yu.nm.cn/',

    copyright: 'CC-BY-NC-SA-4.0',

    changelog: true,

    blog: {
      link: '/',
      tagsLink: '/tags/',
      archivesLink: '/archives/',
      categoriesLink: '/categories/',
      postCover: {
        layout: 'top',
        ratio: '3:1',
      },
    },

    contributors: {
      mode: 'block',
      info:[{username: 'YuXiaoyuYo',name: '于晓鱼', alias: 'YuXiaoyu', avatar: 'https://yu.nm.cn/images/favicon.webp',}],
    },

    replaceAssets: 'https://yu.nm.cn',

    plugins: {

      git: true,

      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      /**shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['shell', 'bash', 'typescript', 'javascript', 'html'],
      },*

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      //markdownEnhance: {
      //  demo: true,
        //   include: true,
        //   chart: true,
        //   echarts: true,
        //   mermaid: true,
        //   flowchart: true,
      //},

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      // },

      markdownImage: {
        // 启用 figure
        figure: true,
        // 启用图片懒加载
        lazyload: true,
        // 启用图片大小
        size: true,
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Twikoo',
        comment: true,
        envId: '/api/twikoo',
      },

      markdownMath: false,

      search: {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    },
  }),
})

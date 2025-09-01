import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'
import { navbar } from './vuepress.navbar'


export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '晓鱼的技术分享站',
  description: '😿',

  bundler: viteBundler(),

  head: [
    ['link', { rel: 'shortcut icon', href: 'https://yu.nm.cn/images/favicon.webp' }],
    ['script', { type: 'text/javascript', async: '' }, '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "sw4jkeltox");'],
  ],

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-93L8M1LEPS',
    }),

    baiduAnalyticsPlugin({
      id: '6d905db3952e1c80ae931580cff833e7',
    }),
  ],

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://yu.nm.cn/',

    appearance: true,

    contributorsText: '作者',

    profile: {
      avatar: 'https://yu.nm.cn/images/avatar.webp',
      name: '于晓鱼',
      // description: '',
      circle: true,
      // location: '青岛',
      // organization: '',
    },

    navbar,
    social: [
      { icon: 'github', link: 'https://github.com/YuXiaoyuYo/' },
    ],

    navbarSocialInclude: ['github'],

    footer: {},

    notFound: {
      code: '404 Not Found...',
      title: '服务器找不到请求的资源',
      quote: '🤔',
      linkText: '回到首页',
    },

    docsRepo: 'https://github.com/YuXiaoyuYo/yuxiaoyu-blog',
    docsDir: 'blog',

    copyright: 'CC-BY-NC-SA-4.0',

    changelog: false,

    article: '/articles/',

    markdown: {
      math: false,
    },

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
      mode: 'inline',
      info: [{ username: 'YuXiaoyuYo', name: '于晓鱼', alias: 'YuXiaoyu' }],
    },

    replaceAssets: 'https://yu.nm.cn',

    plugins: {

      git: true,

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
      //comment: {
      //  provider: 'Twikoo',
      //  comment: true,
      //  envId: 'https://yu.nm.cn/api/twikoo',
      //},

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

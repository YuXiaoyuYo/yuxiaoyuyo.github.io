import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
// import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  // logo: 'https://070715.xyz/images/favicon.webp',
  // your git repo url
  // docsRepo: '',
  // docsDir: 'docs',

  appearance: true,

  contributorsText: '作者',

  profile: {
    avatar: 'https://070715.xyz/images/avatar.webp',
    name: '于晓鱼',
    // description: '',
    circle: true,
    // location: '青岛',
    // organization: '',
  },

  navbar,
  //  notes,
  social: [
    { icon: 'github', link: 'https://github.com/YuXiaoyuYo/' },
    // { icon: 'bilibili', link: 'https://space.bilibili.com/353077925' },
  ],

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
  
  // contributors: false,

  footer: {
    message: '',
    // message: 'Articles are licensed under <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>',
    copyright: `© ${new Date().getFullYear()} Yu Xiaoyu`,
  },

  notFound: {
    code: '404 Not Found...',
    title:'服务器找不到请求的资源',
    quote: '🤔',
    linkText: '回到首页',
  }

})
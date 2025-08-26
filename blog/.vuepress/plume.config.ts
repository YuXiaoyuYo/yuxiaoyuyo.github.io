import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
// import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
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
  //  notes,
  social: [
    { icon: 'github', link: 'https://github.com/YuXiaoyuYo/' },
    // { icon: 'bilibili', link: 'https://space.bilibili.com/353077925' },
  ],

  navbarSocialInclude: ['github'],
  
  // contributors: false,

  footer: {
    message: `
    <span style="justify-content: right; display: flex;">
      © ${new Date().getFullYear()} Yu Xiaoyu
    </span>
    `,

    copyright: `
    <span style="justify-content: right; display: flex; flex-direction: column; align-items: flex-end;">
      <!--a style="text-decoration: none; font-size: 12px" target="_blank" href="https://beian.miit.gov.cn/">ICP</a>
      <a style="text-decoration: none; font-size: 12px" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=">公网安备</a-->
    </span>
    `,
  },

  notFound: {
    code: '404 Not Found...',
    title:'服务器找不到请求的资源',
    quote: '🤔',
    linkText: '回到首页',
  }

})
import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
// import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  // logo: 'https://070715.xyz/images/favicon.webp',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

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
  },
  
  contributors: false,

  footer: {
    message: 'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">Plume</a>',
    copyright: 'Articles are licensed under <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><br>© <span id="currentYear">2021 - Prsent</span> Yu Xiaoyu',
  },

  notFound: {
    code: '4️⃣0️⃣4️⃣',
    title:'🕵️‍♂️❌🔗😰',
    quote: '🔗❓➡️🗑️🤔',
    linkText: '🏠👈🤓',
  }

})
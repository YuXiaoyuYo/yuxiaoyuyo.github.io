import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
// import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: 'https://070715.xyz/images/avatar.webp',
    name: '于晓鱼的Blog',
    description: '',
    circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
//  notes,
  social: [
    { icon: 'github', link: 'https://github.com/YuXiaoyuYo/' },
  ],

})

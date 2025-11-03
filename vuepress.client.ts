import { defineClientConfig } from 'vuepress/client'
import { h } from 'vue'
import { Layout, NotFound } from 'vuepress-theme-plume/client'
import NavBarTitleBefore from './layouts/NavBarTitleBefore.vue'
import FooterContent from './layouts/FooterContent.vue'

import './theme/styles/custom.css'
import './theme/styles/fonts.css'

const CustomComponent = {
  "nav-bar-title-before": () => h(NavBarTitleBefore),
  "footer-content": () => h(FooterContent),
}

export default defineClientConfig({
  layouts: {
    Layout: () => h(Layout, null, CustomComponent),
    NotFound: () => h(NotFound, null, CustomComponent),
  },
})

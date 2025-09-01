import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'
import Layout from './layouts/Layout.vue'

import './theme/styles/custom.css'
import './theme/styles/fonts.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.component('RepoCard', RepoCard)
    // app.component('CustomComponent', CustomComponent)
  },
  layouts: {
    Layout,
  },
})

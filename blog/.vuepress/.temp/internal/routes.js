export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/rj07rpgw/\",\"/preview/markdown.html\":\"/article/2hp1xz2c/\"}")

export const routes = Object.fromEntries([
  ["/article/rj07rpgw/", { loader: () => import(/* webpackChunkName: "article_rj07rpgw_index.html" */"C:/Users/YuXiaoyu/Desktop/blog/vuepress-blog/docs/.vuepress/.temp/pages/article/rj07rpgw/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/2hp1xz2c/", { loader: () => import(/* webpackChunkName: "article_2hp1xz2c_index.html" */"C:/Users/YuXiaoyu/Desktop/blog/vuepress-blog/docs/.vuepress/.temp/pages/article/2hp1xz2c/index.html.js"), meta: {"title":"Markdown"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/YuXiaoyu/Desktop/blog/vuepress-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/YuXiaoyu/Desktop/blog/vuepress-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"博客"} }],
  ["/tags/", { loader: () => import(/* webpackChunkName: "tags_index.html" */"C:/Users/YuXiaoyu/Desktop/blog/vuepress-blog/docs/.vuepress/.temp/pages/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/archives/", { loader: () => import(/* webpackChunkName: "archives_index.html" */"C:/Users/YuXiaoyu/Desktop/blog/vuepress-blog/docs/.vuepress/.temp/pages/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/categories/", { loader: () => import(/* webpackChunkName: "categories_index.html" */"C:/Users/YuXiaoyu/Desktop/blog/vuepress-blog/docs/.vuepress/.temp/pages/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

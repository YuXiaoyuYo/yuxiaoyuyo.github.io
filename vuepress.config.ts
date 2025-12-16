import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { baiduAnalyticsPlugin } from "@vuepress/plugin-baidu-analytics";
import { clarityAnalyticsPlugin } from "@vuepress/plugin-clarity-analytics";
import { navbar } from "./vuepress.navbar";
import { path } from "vuepress/utils";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "于晓鱼",
  description: "😿",

  bundler: viteBundler(),

  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.webp" }],
    [
      "meta",
      { name: "fediverse:creator", content: "@yuxiaoyu@mastodon.social" },
    ],
    ["link", { rel: "me", href: "https://mastodon.social/@yuxiaoyu" }],
  ],

  alias: {
    "@theme/Nav/VPNavBarTitle.vue": path.resolve(
      __dirname,
      "./layouts/VPNavBarTitle.vue",
    ),
  },

  public: path.resolve(__dirname, "./public/"),

  plugins: [
    googleAnalyticsPlugin({
      id: "G-93L8M1LEPS",
    }),

    baiduAnalyticsPlugin({
      id: "de9bd2b34accac39281707b049669815",
    }),

    clarityAnalyticsPlugin({
      id: "t7yhxvbftj",
    }),
  ],

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: "https://yuxiaoyu.me/",

    appearance: true,

    contributorsText: "作者",

    profile: {
      avatar: "/images/avatar.webp",
      name: "于晓鱼",
      // description: '',
      circle: true,
      // location: '青岛',
      // organization: '',
    },

    navbar,
    social: [{ icon: "github", link: "https://github.com/YuXiaoyuYo/" }],

    navbarSocialInclude: ["github"],

    footer: {},

    notFound: {
      code: "404 Not Found...",
      title: "服务器找不到请求的资源",
      quote: "🤔",
      linkText: "回到首页",
    },

    docsRepo: "https://github.com/YuXiaoyuYo/yuxiaoyuyo.github.io",
    docsDir: "src",

    copyright: "CC-BY-NC-SA-4.0",

    changelog: true,

    markdown: {
      math: false,
    },

    collections: [
      {
        type: "post",
        dir: "posts",
        title: "博客",
        link: "/",
        tagsLink: "/tags/",
        linkPrefix: "/articles/",
        archivesLink: "/archives/",
        categoriesLink: "/categories/",
        postCover: {
          layout: "top",
          ratio: "3:1",
        },
      },
      // {
      //   type: "doc",
      //   dir: "docs",
      //   title: "文档",
      //   linkPrefix: "docs",
      //   sidebar: "auto",
      // },
    ],

    contributors: {
      mode: "inline",
      info: [{ username: "YuXiaoyuYo", name: "于晓鱼", alias: "YuXiaoyu" }],
    },

    // replaceAssets: "https://yuxiaoyu.me",

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
      comment: {
        provider: "Twikoo",
        comment: true,
        envId: "https://yuxiaoyu.me/api/twikoo",
      },

      search: {
        locales: {
          "/": {
            placeholder: "搜索",
          },
        },
      },
    },
  }),
});

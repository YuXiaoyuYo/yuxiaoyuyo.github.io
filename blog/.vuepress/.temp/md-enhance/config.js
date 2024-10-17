import CodeDemo from "C:/Users/YuXiaoyu/Desktop/blog/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_markdown-it@14.1.0_sass-embedded@1.80.1_typescript@5.6_l2lgpommoldkdtr7myxjrba3ma/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/YuXiaoyu/Desktop/blog/vuepress-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_markdown-it@14.1.0_sass-embedded@1.80.1_typescript@5.6_l2lgpommoldkdtr7myxjrba3ma/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};

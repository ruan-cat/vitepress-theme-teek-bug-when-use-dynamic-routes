import { defineConfig } from "vitepress";

import { defineTeekConfig } from "vitepress-theme-teek/config";

/**
 * Teek 主题配置
 * @see https://github.com/Kele-Bingtang/vitepress-theme-teek/issues/142#issuecomment-3253633719
 */
const teekConfig = defineTeekConfig({
  vitePlugins: {
    // sidebar: false, // 禁用自动生成侧边栏
    sidebarOption: {
      type: "array", // 修改侧边栏生成类型
    },
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,

  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "动态域名测试Domain",
        items: [
          { text: "全部 index Domain", link: "/domain" },
          { text: "09oa", link: "/domain/09oa" },
          { text: "10wms", link: "/domain/10wms" },
          { text: "10wms-doc", link: "/domain/10wms-doc" },
          { text: "11comm", link: "/domain/11comm" },
          { text: "11comm-doc", link: "/domain/11comm-doc" },
          { text: "01s-doc", link: "/domain/01s-doc" },
          { text: "utils", link: "/domain/utils" },
          { text: "vitepress-preset", link: "/domain/vitepress-preset" },
          { text: "domain", link: "/domain/domain" },
          { text: "vercel-deploy-tool", link: "/domain/vercel-deploy-tool" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },

  vite: {
    server: {
      open: true,
      port: 9000,
    },
  },
});

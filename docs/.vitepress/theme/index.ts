// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";

import ProjectDomainDisplay from "../components/ProjectDomainDisplay.vue";

export default {
  extends: Teek,
  // Layout: () => {
  //   return h(Teek.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   });
  // },

  // extends: DefaultTheme,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   });
  // },

  enhanceApp({ app, router, siteData }) {
    app.component("ProjectDomainDisplay", ProjectDomainDisplay);
    // ...
  },
} satisfies Theme;

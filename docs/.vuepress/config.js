const sidebar = require("./sidebar");

module.exports = ctx => ({
  title: "Vue",
  description: "Vue 组件",
  themeConfig: {
    repo: "jolylai/antd-design-vue",
    editLinks: true,
    smoothScroll: true,
    editLinkText: "Edit this on GitHub!",
    lastUpdated: "Last updated",
    sidebarDepth: 2,
    nav: require("./nav"),
    sidebar: {
      "/spec/": sidebar.spec,
      "/components/": sidebar.components
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [],
  extraWatchFiles: [".vuepress/nav.js", ".vuepress/sidebar.js"]
});

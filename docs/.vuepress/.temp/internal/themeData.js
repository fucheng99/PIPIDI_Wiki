export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"🏠 首页\",\"link\":\"/\"},{\"text\":\"📚 笔记\",\"children\":[{\"text\":\"前端开发\",\"link\":\"/notes/frontend/\"},{\"text\":\"后端开发\",\"link\":\"/notes/backend/\"},{\"text\":\"工具使用\",\"link\":\"/notes/tools/\"}]},{\"text\":\"👤 关于\",\"link\":\"/ABOUT.md\"},{\"text\":\"⭐ GitHub\",\"link\":\"https://github.com/fucheng99/PIPIDI_Wiki\"}],\"sidebar\":{\"/notes/frontend/\":[{\"text\":\"前端开发\",\"collapsible\":true,\"children\":[\"/notes/frontend/vue.md\",\"/notes/frontend/react.md\",\"/notes/frontend/javascript.md\"]}],\"/notes/backend/\":[{\"text\":\"后端开发\",\"collapsible\":true,\"children\":[\"/notes/backend/nodejs.md\",\"/notes/backend/database.md\",\"/notes/backend/api.md\"]}],\"/notes/tools/\":[{\"text\":\"工具使用\",\"collapsible\":true,\"children\":[\"/notes/tools/git.md\",\"/notes/tools/docker.md\",\"/notes/tools/linux.md\"]}],\"/notes/\":[{\"text\":\"笔记首页\",\"children\":[\"/notes/README.md\",\"/notes/frontend/README.md\",\"/notes/backend/README.md\",\"/notes/tools/README.md\"]}],\"/about/\":[]},\"logo\":\"/images/logo1.png\",\"repo\":\"https://github.com/fucheng99/PIPIDI_Wiki\",\"docsDir\":\"docs\",\"editLink\":false,\"lastUpdated\":true,\"lastUpdatedText\":\"最后更新\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

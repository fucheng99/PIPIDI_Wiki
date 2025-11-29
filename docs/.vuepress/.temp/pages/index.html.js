import comp from "C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"./images/logo5.png\",\"heroAlt\":\"PIPIDI Wiki\",\"heroText\":\"PIPIDI Wiki\",\"tagline\":\"专注技术学习与知识沉淀\",\"actions\":[{\"text\":\"开始探索 →\",\"link\":\"/notes/\",\"type\":\"primary\",\"size\":\"large\"},{\"text\":\"关于作者\",\"link\":\"/about.md\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"📖 系统化学习\",\"details\":\"结构化整理技术知识，构建完整的知识体系\",\"icon\":\"📚\"},{\"title\":\"🔄 持续更新\",\"details\":\"随着技术发展和学习深入，不断迭代和完善内容\",\"icon\":\"⚡\"},{\"title\":\"🔍 快速检索\",\"details\":\"清晰的分类和搜索功能，快速定位所需信息\",\"icon\":\"🎯\"}],\"footer\":\"MIT Licensed | Copyright © 2025-present\\n© 2025 PIPIDI\\n\"},\"git\":{\"updatedTime\":1764414577000,\"contributors\":[{\"name\":\"fucheng99\",\"username\":\"fucheng99\",\"email\":\"461926138@qq.com\",\"commits\":2,\"url\":\"https://github.com/fucheng99\"}],\"changelog\":[{\"hash\":\"1ff03227888b46a54d9e1d32cea43cb937627552\",\"time\":1764414577000,\"email\":\"461926138@qq.com\",\"author\":\"fucheng99\",\"message\":\"update the web ui\"},{\"hash\":\"09ce0d442f4de1b5d54ffae0e3ed0fa02cbd07be\",\"time\":1764405254000,\"email\":\"461926138@qq.com\",\"author\":\"fucheng99\",\"message\":\"initial commit\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

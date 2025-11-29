import comp from "C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/ICtest/vue.html.vue"
const data = JSON.parse("{\"path\":\"/notes/ICtest/vue.html\",\"title\":\"Vue.js 学习笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764429348000,\"contributors\":[{\"name\":\"fucheng99\",\"username\":\"fucheng99\",\"email\":\"461926138@qq.com\",\"commits\":2,\"url\":\"https://github.com/fucheng99\"}],\"changelog\":[{\"hash\":\"9d63ddc6b7b972172a901aa3dce071b318f58cb7\",\"time\":1764429348000,\"email\":\"461926138@qq.com\",\"author\":\"fucheng99\",\"message\":\"optimize web ui\"},{\"hash\":\"09ce0d442f4de1b5d54ffae0e3ed0fa02cbd07be\",\"time\":1764405254000,\"email\":\"461926138@qq.com\",\"author\":\"fucheng99\",\"message\":\"initial commit\"}]},\"filePathRelative\":\"notes/ICtest/vue.md\"}")
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

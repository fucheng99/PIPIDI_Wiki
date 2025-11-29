import comp from "C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/frontend/\",\"title\":\"ICTest开发\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764414577000,\"contributors\":[{\"name\":\"fucheng99\",\"username\":\"fucheng99\",\"email\":\"461926138@qq.com\",\"commits\":1,\"url\":\"https://github.com/fucheng99\"}],\"changelog\":[{\"hash\":\"1ff03227888b46a54d9e1d32cea43cb937627552\",\"time\":1764414577000,\"email\":\"461926138@qq.com\",\"author\":\"fucheng99\",\"message\":\"update the web ui\"}]},\"filePathRelative\":\"notes/frontend/README.md\"}")
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

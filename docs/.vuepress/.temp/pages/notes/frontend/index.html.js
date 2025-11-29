import comp from "C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/frontend/\",\"title\":\"前端开发\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"notes/frontend/README.md\"}")
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

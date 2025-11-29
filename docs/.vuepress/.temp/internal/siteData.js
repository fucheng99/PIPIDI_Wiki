export const siteData = JSON.parse("{\"base\":\"/PIPIDI_Wiki/\",\"lang\":\"zh-CN\",\"title\":\"PIPIDI WIKI\",\"description\":\"个人知识管理与技术学习笔记\",\"head\":[[\"link\",{\"rel\":\"png\",\"href\":\"/images/logo3.png\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"技术笔记,编程,前端,后端,学习\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

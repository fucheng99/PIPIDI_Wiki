export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/ABOUT.html", { loader: () => import(/* webpackChunkName: "ABOUT.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/ABOUT.html.js"), meta: {"title":"关于"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/notes/", { loader: () => import(/* webpackChunkName: "notes_index.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/index.html.js"), meta: {"title":"学习笔记"} }],
  ["/notes/frontend/javascript.html", { loader: () => import(/* webpackChunkName: "notes_frontend_javascript.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/frontend/javascript.html.js"), meta: {"title":""} }],
  ["/notes/frontend/react.html", { loader: () => import(/* webpackChunkName: "notes_frontend_react.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/frontend/react.html.js"), meta: {"title":""} }],
  ["/notes/frontend/", { loader: () => import(/* webpackChunkName: "notes_frontend_index.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/frontend/index.html.js"), meta: {"title":"前端开发"} }],
  ["/notes/frontend/vue.html", { loader: () => import(/* webpackChunkName: "notes_frontend_vue.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/frontend/vue.html.js"), meta: {"title":"Vue.js 学习笔记"} }],
  ["/notes/backend/api.html", { loader: () => import(/* webpackChunkName: "notes_backend_api.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/backend/api.html.js"), meta: {"title":""} }],
  ["/notes/backend/database.html", { loader: () => import(/* webpackChunkName: "notes_backend_database.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/backend/database.html.js"), meta: {"title":""} }],
  ["/notes/backend/nodejs.html", { loader: () => import(/* webpackChunkName: "notes_backend_nodejs.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/backend/nodejs.html.js"), meta: {"title":""} }],
  ["/notes/backend/", { loader: () => import(/* webpackChunkName: "notes_backend_index.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/backend/index.html.js"), meta: {"title":"后端开发"} }],
  ["/notes/tools/docker.html", { loader: () => import(/* webpackChunkName: "notes_tools_docker.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/tools/docker.html.js"), meta: {"title":""} }],
  ["/notes/tools/git.html", { loader: () => import(/* webpackChunkName: "notes_tools_git.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/tools/git.html.js"), meta: {"title":""} }],
  ["/notes/tools/linux.html", { loader: () => import(/* webpackChunkName: "notes_tools_linux.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/notes/tools/linux.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/46192/Desktop/Wiki/repo/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

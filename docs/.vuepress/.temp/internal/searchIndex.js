export const SEARCH_INDEX = [
  {
    "title": "关于",
    "headers": [
      {
        "level": 2,
        "title": "👋 欢迎访问 PIPIDI Wiki！",
        "slug": "👋-欢迎访问-pipidi-wiki",
        "link": "#👋-欢迎访问-pipidi-wiki",
        "children": [
          {
            "level": 3,
            "title": "🎯 网站目标",
            "slug": "🎯-网站目标",
            "link": "#🎯-网站目标",
            "children": []
          },
          {
            "level": 3,
            "title": "🛠 技术栈",
            "slug": "🛠-技术栈",
            "link": "#🛠-技术栈",
            "children": []
          },
          {
            "level": 3,
            "title": "📞 联系我",
            "slug": "📞-联系我",
            "link": "#📞-联系我",
            "children": []
          }
        ]
      }
    ],
    "path": "/about.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "学习笔记",
    "headers": [
      {
        "level": 2,
        "title": "分类",
        "slug": "分类",
        "link": "#分类",
        "children": []
      },
      {
        "level": 2,
        "title": "最近更新",
        "slug": "最近更新",
        "link": "#最近更新",
        "children": []
      }
    ],
    "path": "/notes/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/frontend/javascript.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/frontend/react.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "ICTest开发",
    "headers": [
      {
        "level": 2,
        "title": "目录",
        "slug": "目录",
        "link": "#目录",
        "children": []
      }
    ],
    "path": "/notes/frontend/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Vue.js 学习笔记",
    "headers": [
      {
        "level": 2,
        "title": "Vue 3 新特性",
        "slug": "vue-3-新特性",
        "link": "#vue-3-新特性",
        "children": [
          {
            "level": 3,
            "title": "Composition API",
            "slug": "composition-api",
            "link": "#composition-api",
            "children": []
          }
        ]
      }
    ],
    "path": "/notes/frontend/vue.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/backend/api.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/backend/database.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/backend/nodejs.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "后端开发",
    "headers": [
      {
        "level": 2,
        "title": "目录",
        "slug": "目录",
        "link": "#目录",
        "children": []
      }
    ],
    "path": "/notes/backend/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/tools/docker.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/tools/git.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/tools/linux.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "工具开发",
    "headers": [
      {
        "level": 2,
        "title": "目录",
        "slug": "目录",
        "link": "#目录",
        "children": []
      }
    ],
    "path": "/notes/tools/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/ICtest/javascript.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/notes/ICtest/react.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "IC测试开发",
    "headers": [
      {
        "level": 2,
        "title": "目录",
        "slug": "目录",
        "link": "#目录",
        "children": []
      }
    ],
    "path": "/notes/ICtest/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Vue.js 学习笔记",
    "headers": [
      {
        "level": 2,
        "title": "Vue 3 新特性",
        "slug": "vue-3-新特性",
        "link": "#vue-3-新特性",
        "children": [
          {
            "level": 3,
            "title": "Composition API",
            "slug": "composition-api",
            "link": "#composition-api",
            "children": []
          }
        ]
      }
    ],
    "path": "/notes/ICtest/vue.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}

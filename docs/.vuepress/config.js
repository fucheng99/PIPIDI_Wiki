import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
// 或者使用 webpack
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  // 必须指定 bundler
  bundler: viteBundler(),
  // 或者使用 webpack
  // bundler: webpackBundler(),
  
  // 基础路径
  base: '/PIPIDI_Wiki/',
  
  // 网站语言
  lang: 'zh-CN',
  
  // 网站标题
  title: 'PIPIDI WIKI',
  
  // 网站描述
  description: '个人知识管理与技术学习笔记',
  
  // 头部配置
  head: [
    ['link', { rel: 'png', href: '/images/logo3.png' }],
    ['meta', { name: 'keywords', content: '技术笔记,编程,前端,后端,学习' }],
  ],

  // 主题配置
  theme: defaultTheme({
    // 导航栏
    navbar: [
      { text: '🏠 首页', link: '/' },
      { 
        text: '📚 笔记', 
        children: [
          { text: 'IC前端开发', link: '/notes/frontend/' },
          { text: 'IC后端开发', link: '/notes/backend/' },
          { text: 'IC测试开发', link: '/notes/ICtest/' },
          { text: '工具使用', link: '/notes/tools/' }
        ]
      },
      { text: '👤 关于', link: '/about.md' },
      { text: '⭐ GitHub', link: 'https://github.com/fucheng99/PIPIDI_Wiki' }
    ],

    // 侧边栏
sidebar: {
  '/notes/frontend/': [
    {
      text: 'IC前端开发',
      collapsible: true,
      children: [
        '/notes/frontend/vue.md',
        '/notes/frontend/react.md', 
        '/notes/frontend/javascript.md',
      ]
    }
  ],
  '/notes/backend/': [
    {
      text: 'IC后端开发',
      collapsible: true,
      children: [
        '/notes/backend/nodejs.md',
        '/notes/backend/database.md',
        '/notes/backend/api.md',
      ]
    }
  ],
    '/notes/ICtest/': [
    {
      text: 'IC测试开发',
      collapsible: true,
      children: [
        '/notes/ICtest/vue.md',
        '/notes/ICtest/react.md',
        '/notes/ICtest/javascript.md',
      ]
    }
  ],
  '/notes/tools/': [
    {
      text: '工具使用', 
      collapsible: true,
      children: [
        '/notes/tools/git.md',
        '/notes/tools/docker.md',
        '/notes/tools/linux.md',
      ]
    }
  ],
  // 为 /notes/ 根路径添加侧边栏
  '/notes/': [
    {
      text: '笔记首页',
      children: [
        '/notes/README.md',
        '/notes/frontend/README.md',
        '/notes/backend/README.md',
        '/notes/ICtest/README.md',
        '/notes/tools/README.md',
      ]
    }
  ],
  // 为关于页面添加一个空的侧边栏
  '/about/': [],
},

    // 主题功能配置
    logo: '/images/logo1.png',
    repo: null,
    docsDir: 'docs',
    editLink: false,
    
    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '最后更新',
  }),

  // 插件配置
  plugins: [
    searchPlugin({
      // 搜索插件配置
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
})
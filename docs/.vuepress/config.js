import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite' // Add this import

export default defineUserConfig({
  // 基础路径
  base: '/',
  
  // 网站语言
  lang: 'zh-CN',
  
  // 网站标题
  title: '我的个人Wiki',
  
  // 网站描述
  description: '这是我的个人知识库，记录学习和工作笔记',
  
  // 主题配置
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '笔记',
        link: '/notes/',
      },
      {
        text: '关于',
        link: '/about.md',
      },
    ],
    
    // 侧边栏
    sidebar: {
      '/notes/': [
        {
          text: '前端开发',
          collapsible: true,
          children: [
            '/notes/frontend/vue.md',
            '/notes/frontend/react.md',
            '/notes/frontend/javascript.md',
          ],
        },
        {
          text: '后端开发',
          collapsible: true,
          children: [
            '/notes/backend/nodejs.md',
            '/notes/backend/database.md',
            '/notes/backend/api.md',
          ],
        },
        {
          text: '工具使用',
          collapsible: true,
          children: [
            '/notes/tools/git.md',
            '/notes/tools/docker.md',
            '/notes/tools/linux.md',
          ],
        },
      ],
    },
    
    // 其他主题配置
    logo: '/images/logo.png',
    repo: 'https://github.com/yourusername/my-personal-wiki',
    editLink: false,
  }),
  
  // 添加 bundler 配置 (必需)
  bundler: viteBundler(),
  
  // 插件配置
  plugins: [
    // 可以添加搜索插件、图片缩放等
  ],
})
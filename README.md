# PIPIDI Wiki

![VuePress](https://img.shields.io/badge/VuePress-2.x-brightgreen)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)
![License](https://img.shields.io/badge/License-MIT-green)

基于 VuePress 构建的个人知识库，用于整理和分享技术学习笔记。

## 🚀 特性

- 📚 **结构化知识管理** - 清晰的分类和导航
- 🔍 **内置搜索** - 快速定位所需内容  
- 📱 **响应式设计** - 支持各种设备访问
- ⚡ **快速构建** - 基于 Vite 的快速开发体验
- 🎨 **美观界面** - 现代化的 UI 设计

## 📖 在线访问

🌐 [https://fucheng99.github.io/PIPIDI_Wiki/](https://fucheng99.github.io/PIPIDI_Wiki/)

## 🛠 技术栈

- **框架**: VuePress 2.x
- **构建工具**: Vite
- **部署**: GitHub Pages + GitHub Actions
- **主题**: VuePress Default Theme

## 📁 项目结构
PIPIDI_Wiki/
├── docs/ # 文档根目录
│ ├── .vuepress/ # VuePress 配置
│ │ ├── config.js # 主配置文件
│ │ └── public/ # 静态资源
│ ├── notes/ # 学习笔记
│ │ ├── frontend/ # 前端开发
│ │ ├── backend/ # 后端开发
│ │ └── tools/ # 工具使用
│ ├── README.md # 网站首页
│ └── about.md # 关于页面
├── .github/workflows/ # GitHub Actions
└── package.json # 项目依赖
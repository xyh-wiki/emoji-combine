# Emoji Combiner Frontend

纯前端的 Emoji 合成工具站点，通过 React + Vite 构建。支持中英双语、基础 SEO 优化以及 Dokploy + Nixpacks 部署。

## 技术栈

- React 18 + TypeScript
- Vite 作为构建工具
- react-router-dom 管理前端路由
- 自研轻量 i18n（JSON 词典 + Context）
- Zustand 管理 Emoji 与 UI 状态
- react-helmet-async 进行 SEO Meta 管理

## 主要功能

- 选择 Emoji A / Emoji B 并进行合成
- 浏览器端 Canvas 生成 PNG 图片
- 一键下载合成结果
- 推荐 Emoji 组合
- 多页面模块：Home / FAQ / About / Contact / Privacy / Terms / Sitemap / 404
- 中英文切换
- 基础 SEO：sitemap.xml、robots.txt、OG 标签、关键字文案模块

## 目录结构简要

- `src/pages`：各路由页面
- `src/components`：通用组件（导航、Footer、Emoji 组件、Toast、Seo 等）
- `src/store`：Zustand 状态管理
- `src/i18n`：多语言配置
- `src/utils`：工具函数（Emoji 列表与合成逻辑）
- `src/styles`：全局与主题样式

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 部署建议（Dokploy + Nixpacks）

- 使用 Node 20 运行构建过程，静态资源输出目录为 `dist/`
- Dokploy 中配置 Nixpacks 自动检测 Vite 项目
- 运行命令：`npm run build`
- 发布目录：`dist`

## 后续扩展方向

- 增加更多 Emoji 列表与分类选择
- 提供下载尺寸选择
- 增加更多工具（例如 Emoji 转图片、文字转 Emoji 等），并在 Sitemap 中维护入口

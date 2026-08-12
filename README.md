# Open Science Wiki

[AIPOCH Open Science](https://github.com/aipoch/open-science) 的官方操作与复现文档，使用 [Docusaurus](https://docusaurus.io/) 构建。AIPOCH 官网可以从本仓库同步 `docs/` 与 `static/img/open-science/`，加载最新 Wiki 内容和实操截图。

## 文档结构

- `docs/getting-started/`：安装、首次引导、第一个项目
- `docs/workspace/`：项目、会话、Composer、文件、预览、权限、Notebook、Provenance、Subagents
- `docs/settings/`：13 个设置主面板及其子功能
- `docs/reference/`：完整控件索引、文件格式、快捷操作、架构和排错
- `static/img/open-science/`：隔离环境中实际运行 Open Science 采集的界面截图

侧边栏由 Docusaurus 根据 `docs/` 目录和 `_category_.json` 自动生成。

## 本地运行

```bash
npm install
npm run start
```

开发服务器默认打开 `http://localhost:3000/`。验证生产构建：

```bash
npm run build
npm run serve
```

## 更新约定

1. 新页面放在对应 `docs/` 分类，并用 `sidebar_position` 排序。
2. 应用截图使用 PNG，放入 `static/img/open-science/`，文档以 `/img/open-science/<file>.png` 引用。
3. 描述高风险按钮时同时写明确认、影响和恢复方式。
4. 提交前必须运行 `npm run build`，确保 MDX、内部链接和静态资源完整。

## 相关仓库

- Open Science: https://github.com/aipoch/open-science
- Wiki: https://github.com/aipoch/openscience-wiki

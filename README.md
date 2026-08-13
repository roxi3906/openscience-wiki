# Open Science Wiki

[English](#english) · [简体中文](#简体中文)

## English

The official operating and reproducibility documentation for [AIPOCH Open Science](https://github.com/aipoch/open-science), built with [Docusaurus](https://docusaurus.io/). The AIPOCH website can sync the current Wiki pages and product screenshots from this repository.

### Content structure

- `docs/`: Simplified Chinese source and the default locale
- `i18n/en/docusaurus-plugin-content-docs/current/`: English documents with the same file structure as `docs/`
- `i18n/en/code.json`: English home-page and shared interface strings
- `i18n/en/docusaurus-theme-classic/`: English navbar and footer strings
- `static/img/open-science/`: screenshots captured from a running Open Science installation
- `i18n.config.mjs`: the locale registry used by Docusaurus and the translation checker

Docusaurus creates the sidebar from each document tree and its `_category_.json` files.

### Run locally

```bash
npm install
npm run start:zh
npm run start:en
```

The development server opens `http://localhost:3000/` by default. The full production build contains both languages:

```bash
npm run check:i18n
npm run build
npm run serve
```

`npm run build:zh` and `npm run build:en` build one locale for faster diagnosis.

### Add another language

1. Add its Docusaurus locale code, label, HTML language, and direction to `i18n.config.mjs`.
2. Run `npm run write-translations -- --locale <locale>` to create shared interface translation files.
3. Copy the `docs/` tree to `i18n/<locale>/docusaurus-plugin-content-docs/current/`, then translate every `.md`, `.mdx`, and `_category_.json` file without changing its relative path.
4. Translate each `message` value in the generated interface JSON files. Keep the keys unchanged.
5. Run `npm run check:i18n` and `npm run build`. The check fails if a locale has a missing or orphaned page.

When adding a page, add its translation to every registered non-default locale in the same change. Put screenshots in `static/img/open-science/` and reference them as `/img/open-science/<file>.png` so all languages share the same verified product image.

## 简体中文

本仓库是 [AIPOCH Open Science](https://github.com/aipoch/open-science) 的官方操作与复现文档，使用 [Docusaurus](https://docusaurus.io/) 构建。AIPOCH 官网可以从本仓库同步最新 Wiki 页面与产品实操截图。

### 内容结构

- `docs/`：简体中文源文档，也是默认语言
- `i18n/en/docusaurus-plugin-content-docs/current/`：与 `docs/` 目录结构一致的英文文档
- `i18n/en/code.json`：英文首页与通用界面文案
- `i18n/en/docusaurus-theme-classic/`：英文导航栏与页脚文案
- `static/img/open-science/`：从实际运行的 Open Science 中采集的截图
- `i18n.config.mjs`：供 Docusaurus 和翻译检查脚本共用的语言注册表

Docusaurus 根据各语言文档目录和 `_category_.json` 自动生成侧边栏。

### 本地运行

```bash
npm install
npm run start:zh
npm run start:en
```

开发服务器默认打开 `http://localhost:3000/`。完整生产构建会同时生成中英文站点：

```bash
npm run check:i18n
npm run build
npm run serve
```

排查单一语言时，可分别使用 `npm run build:zh` 和 `npm run build:en`。

### 增加其他语言

1. 在 `i18n.config.mjs` 中加入 Docusaurus locale code、显示名称、HTML 语言和文字方向。
2. 运行 `npm run write-translations -- --locale <locale>` 生成通用界面翻译文件。
3. 将 `docs/` 复制到 `i18n/<locale>/docusaurus-plugin-content-docs/current/`，保持相对路径不变，逐篇翻译 `.md`、`.mdx` 与 `_category_.json`。
4. 翻译生成的界面 JSON 中每个 `message` 的值，不要修改 key。
5. 运行 `npm run check:i18n` 和 `npm run build`；任何漏译页面或孤立页面都会导致检查失败。

新增文档时，必须在同一次提交中为每个已注册的非默认语言补充对应页面。截图统一使用 PNG，放入 `static/img/open-science/`，并以 `/img/open-science/<file>.png` 引用，让所有语言共用同一张已核实的产品截图。

## Related repositories / 相关仓库

- Open Science: https://github.com/aipoch/open-science
- Wiki: https://github.com/aipoch/openscience-wiki

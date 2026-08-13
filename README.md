# Open Science Wiki

This repository contains the official operating and reproducibility documentation for [AIPOCH Open Science](https://github.com/aipoch/open-science). The site uses [Docusaurus](https://docusaurus.io/), and AIPOCH.com can sync the current Wiki pages and product screenshots from this repository.

English is the default and only published language. The locale registry remains in place so maintainers can add other overseas languages later without changing the document URLs.

## Content structure

- `docs/` contains the English documentation source.
- Each `_category_.json` file sets a sidebar section label and description.
- `static/img/open-science/` contains screenshots captured from a running Open Science installation.
- `src/pages/` and `src/css/` contain the home page and AIPOCH theme changes.
- `i18n.config.mjs` defines the default locale.
- `scripts/check-english.mjs` rejects Chinese characters in repository text files.

## Run locally

Use Node.js 20 or later.

```bash
npm install
npm start
```

The development server opens [http://localhost:3000](http://localhost:3000). Test the production output before publishing:

```bash
npm run check:english
npm run build
npm run serve
```

## Edit documentation

Add or update a Markdown file under `docs/`, then set its `sidebar_position` in front matter. Keep sibling positions unique. Store product captures in `static/img/open-science/` and reference them with a public path:

```md
![Describe the visible application state](/img/open-science/example.png)
```

Run `npm run check:english` before committing. The production build runs the same check and stops if Chinese text enters a tracked source file.

## Add another language

1. Add the Docusaurus locale code, label, HTML language, and direction to `i18n.config.mjs`.
2. Run `npm run write-translations -- --locale <locale>` to create the shared interface files.
3. Copy `docs/` to `i18n/<locale>/docusaurus-plugin-content-docs/current/`, keeping every relative path unchanged.
4. Translate the copied documents and interface message values.
5. Build the site and inspect the new locale locally before publishing.

## Related repositories

- [AIPOCH Open Science](https://github.com/aipoch/open-science)
- [Open Science Wiki](https://github.com/aipoch/openscience-wiki)

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {defaultLocale, localeConfigs, locales} from './i18n.config.mjs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Science Wiki',
  tagline: '面向可复现科研的本地优先 AI 工作台',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    // Docusaurus 3.10.2's Rspack server bundle leaves route-registry
    // require.resolveWeak calls untransformed. Keep the stable Webpack path.
    faster: false,
  },

  // Set the production url of your site here
  url: 'https://aipoch.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aipoch',
  projectName: 'openscience-wiki',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale,
    locales,
    localeConfigs,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/aipoch/openscience-wiki/edit/main/',
          editLocalizedFiles: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/open-science/conversation-completed.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AIPOCH',
        logo: {
          alt: 'AIPOCH',
          src: 'img/aipoch-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Open Science 文档',
          },
          {to: '/docs/getting-started/installation', label: '安装', position: 'left'},
          {to: '/docs/reference/troubleshooting', label: '排错', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/aipoch/open-science',
            label: 'Open Science GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Open Science',
                to: '/docs/',
              },
              {
                label: '完整控件索引',
                to: '/docs/reference/control-index',
              },
            ],
          },
          {
            title: '项目',
            items: [
              {
                label: 'Open Science',
                href: 'https://github.com/aipoch/open-science',
              },
              {
                label: 'Wiki 源码',
                href: 'https://github.com/aipoch/openscience-wiki',
              },
              {
                label: '问题反馈',
                href: 'https://github.com/aipoch/open-science/issues',
              },
            ],
          },
          {
            title: 'AIPOCH',
            items: [
              {
                label: '官网',
                href: 'https://aipoch.com',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} AIPOCH · All Rights Reserved.`,
      },
      prism: {
        // AIPOCH style: code blocks stay dark in both light and dark mode
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

export default config;

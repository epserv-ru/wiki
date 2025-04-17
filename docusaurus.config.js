// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

let mainInfoLabel = 'Основная информация';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Вики',
  tagline: 'основная информация, полезные туториалы и всё, что может понадобиться для лучшего понимания игрового процесса ElectroPlay',
  url: 'https://wiki.epserv.ru/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'epserv-ru', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  trailingSlash: false,
  titleDelimiter: '–',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
    localeConfigs: {
      ru: {
        htmlLang: 'ru',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/epserv-ru/wiki/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/epserv-ru/wiki/tree/main/',
        // },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['docusaurus-theme-search-typesense'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Вики',
        logo: {
          alt: 'EP',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: mainInfoLabel,
          },
          // {to: '/blog', label: 'Блог', position: 'left'},
          {
            href: 'https://github.com/epserv-ru/wiki',
            label: 'Редактировать на GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Вики',
            items: [
              {
                label: mainInfoLabel,
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Ссылки',
            items: [
              {
                label: 'Наш сайт',
                href: 'https://epserv.ru/',
              },
              {
                label: 'ВК',
                href: 'https://vk.com/epsrv',
              },
              {
                label: 'Discord',
                href: 'https://epserv.ru/discord/',
              },
            ],
          },
          {
            title: 'Другое',
            items: [
              // {
              //   label: 'Блог',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/epserv-ru/wiki',
              },
            ],
          },
        ],
        copyright: '© 2025 ElectroPlay',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      typesense: {
        typesenseCollectionName: 'epserv-public-wiki',

        typesenseServerConfig: {
          nodes: [
            {
              host: 'wikisearch.epserv.ru',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: '1SeyotRysWrXSSjY85emmDVzMMNntVil',
        },
        
        typesenseSearchParameters: {},

        contextualSearch: true,
      },
    }),
};

module.exports = config;

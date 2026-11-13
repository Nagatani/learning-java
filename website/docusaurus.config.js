// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Javaプログラミング入門',
  tagline: '大学の講義資料を棚卸ししたものです。',
  url: 'https://nagatani.github.io/',
  baseUrl: '/learning-java/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Nagatani',
  projectName: 'learning-java',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'successor-techbook-java-primer',
        content:
          'このサイトは更新を終了しています。後継の教材 <a target="_blank" rel="noopener noreferrer" href="https://github.com/Nagatani/techbook-java-primer">techbook-java-primer</a> をご覧ください。',
        backgroundColor: '#fff3cd',
        textColor: '#664d03',
        isCloseable: false,
      },
      navbar: {
        title: 'Javaプログラミング入門',
        logo: {
          alt: 'Javaプログラミング入門',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documents',
          },
          {
            href: 'https://github.com/Nagatani/techbook-java-primer',
            label: '後継の教材はこちら',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://nagatani.me/">Nagatani</a> .`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TosiDrop',
  tagline: 'Token Distribution Platform on Ergo & Cardano.',
  url: 'https://anetabtc.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tosi.png',
  organizationName: 'TosiDrop',
  projectName: 'anetabtc-documentation',
  // trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/anetaBTC',
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
      navbar: {
        title: 'TosiDrop',
        logo: {
          alt: 'My Site Logo',
          src: 'img/tosi.png',
        },
        items: [
          {
            href: 'https://github.com/anetaBTC',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
    //   colorMode: {
    //     defaultMode: 'light',
    //     disableSwitch: false,
    //     switchConfig: {
    //       darkIcon: '💃',
    //       darkIconStyle: {
    //         marginLeft: '2px',
    //       },
    //       lightIcon: '🔥',
    //       lightIconStyle: {
    //         marginLeft: '1px',
    //       },
    //   },
    // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/@anetaBTC',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/anetaBTC',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/anetaBTC',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/anetaBTC',
              },
              {
                label: 'Website', 
                href: 'https://anetabtc.io'
              },
            ],
          },
        ],
        copyright: `anetaBTC is a Singapore-based DAO.`,
        // ${new Date().getFullYear()}
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

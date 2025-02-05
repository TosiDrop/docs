// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TosiDrop',
  tagline: 'Token Distribution Platform on Ergo & Cardano.',
  url: 'https://docs.tosidrop.me',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tosi.png',
  organizationName: 'TosiDrop',
  projectName: 'tosi-documentation',
  // trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          editUrl: 'https://github.com/TosiDrop/tosi-documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/TosiDrop/tosi-documentation/edit/main/',
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
          alt: 'TosiDrop Logo',
          src: 'img/tosi.png',
        },
        items: [
          {
            href: 'https://github.com/TosiDrop',
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
                href: 'https://medium.com/@tosidrop',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/C32Mm3j4fG',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/TosiDrop',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TosiDrop'
              },
              {
                label: 'Website', 
                href: 'https://tosidrop.me'
              },
            ],
          },
        ],
        copyright: `TosiDrop 2025`,
        // ${new Date().getFullYear()}
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

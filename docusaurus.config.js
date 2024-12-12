// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "THP Lab",
  tagline: "W3C is cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://THP-Lab.github.iom",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "THP-Lab.github.io", // Usually your GitHub org/user name.
  projectName: "THP-Lab", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/THP-Lab/thp-lab.github.io/tree/master",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/THP-Lab/thp-lab.github.io/tree/master',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Nécessaire pour tout plugin multi-instance
         */
        id: 'second-blog',
        /**
         * Route URL pour la section blog de votre site.
         * *NE PAS* inclure de slash à la fin.
         */
        routeBasePath: 'my-second-blog',
        /**
         * Chemin d'accès aux données sur le système de fichiers par rapport au répertoire du site.
         */
        path: './my-second-blog',
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo-THP.png",
      navbar: {
        title: "Accueil",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-THP.png",
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/my-second-blog', label: 'blog-THP', position: 'left' },
          {
            to: "https://github.com/thp-lab",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Projects",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                to: "https://discordapp.com/invite/THP-Lab",
              },
              {
                label: "THP",
                to: "https://www.thehackingproject.org/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: "GitHub",
                to: "https://github.com/thp-lab",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} THP-Lab. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

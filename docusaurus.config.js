// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "THP Lab",
  tagline: "W3C is cool",
  favicon: "img/favicon.ico",
  url: "https://THP-Lab.github.iom",
  baseUrl: "/",
  organizationName: "THP-Lab.github.io",
  projectName: "THP-Lab",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          // Map sidebars to specific paths
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            // Use appropriate sidebar based on path
            if (args.item.dirName === "Discord_bot_for_points") {
              return "discordBotSidebar";
            }
            if (args.item.dirName === "intuition") {
              return "intuitionSidebar";
            }
            if (args.item.dirName === "agent") {
              return "agentSidebar";
            }
            return sidebarItems;
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/THP-Lab/thp-lab.github.io/tree/master",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "second-blog",
        routeBasePath: "my-second-blog",
        path: "./my-second-blog",
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo-THP.png",
      navbar: {
        title: "Accueil",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-THP.png",
        },
        items: [
          { to: "/blog", label: "THP-lab", position: "left" },
          { to: "/my-second-blog", label: "Blog THP", position: "left" },
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
                label: "Blog",
                to: "/blog",
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
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;

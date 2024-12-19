// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  discordBotSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        "Discord_bot_for_points/getting-started/intro",
        "Discord_bot_for_points/getting-started/local_development",
      ],
    },
    {
      type: "category",
      label: "Commands",
      items: [
        "Discord_bot_for_points/commands/overview",
        "Discord_bot_for_points/commands/balance",
        "Discord_bot_for_points/commands/generate",
        "Discord_bot_for_points/commands/help",
        "Discord_bot_for_points/commands/leaderboard",
        "Discord_bot_for_points/commands/publicLeaderboard",
        "Discord_bot_for_points/commands/send",
      ],
    },
    {
      type: "category",
      label: "Open Source",
      items: ["Discord_bot_for_points/open-source-contribution/intro"],
    },
  ],
  intuitionSidebar: ["intuition/intuition"],
  agentSidebar: ["Agent/agent"],
};

export default sidebars;

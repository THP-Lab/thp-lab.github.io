import { translate } from "@docusaurus/Translate";
import { sortBy } from "../utils/jsUtils";

export type TagType =
  | "favorite"
  | "opensource"
  | "product"
  | "design"
  | "i18n"
  | "versioning"
  | "large"
  | "meta"
  | "personal"
  | "Gaming";

// Add sites to this list
// prettier-ignore
const Projects: Project[] = [
  {
    title: 'Intuition',
    description: 'A set of tools leveraging intuition to experiment with enriched semantics and artificial intelligence, fostering trust and ownership in secure networks',
    preview: 'https://pbs.twimg.com/profile_images/1686585471235682305/a1Ll5kow_400x400.jpg',
    website: '/docs/intuition',
    source: 'https://github.com/0xIntuition',
    tags: ['opensource', 'favorite'],
  },
  {
    title: "Discord Points",
    description: 'Discord bot for managing and tracking points, enabling transfers, balance displays, leaderboards, and server-logged transactions',
    preview: 'https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/discord.jpeg',
    website: '/docs/Discord_bot_for_points/getting-started/intro',
    source: '',
    tags: ['opensource', 'favorite'],
  },
  {
    title: "Agent",
    description: 'Platform enhancing the Boss Fighters experience with tools built by and for the community',
    preview: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1784650/capsule_616x353.jpg?t=1728815393',
    website: '/docs/Agent',
    source: '',
    tags: ['opensource', 'favorite', 'Gaming'],
  },
];

export type Project = {
  title: string;
  description: string;
  preview: string | null;
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  favorite: {
    label: translate({ message: "Favorite" }),
    description: translate({
      message:
        "Our favorite THP Lab Projects that you must absolutely check out!",
      id: "showcase.tag.favorite.description",
    }),
    color: "#e9669e",
  },

  opensource: {
    label: translate({ message: "Open-Source" }),
    description: translate({
      message: "Open-Source THP Lab Projects can be useful for inspiration!",
      id: "showcase.tag.opensource.description",
    }),
    color: "#39ca30",
  },

  product: {
    label: translate({ message: "Product" }),
    description: translate({
      message: "THP Lab Projects associated to a commercial product!",
      id: "showcase.tag.product.description",
    }),
    color: "#dfd545",
  },

  design: {
    label: translate({ message: "Design" }),
    description: translate({
      message:
        "Beautiful THP Lab Projects, polished and standing out from the initial template!",
      id: "showcase.tag.design.description",
    }),
    color: "#a44fb7",
  },

  i18n: {
    label: translate({ message: "I18n" }),
    description: translate({
      message:
        "Translated THP Lab Projects using the internationalization support with more than 1 locale.",
      id: "showcase.tag.i18n.description",
    }),
    color: "#127f82",
  },

  versioning: {
    label: translate({ message: "Versioning" }),
    description: translate({
      message:
        "THP Lab Projects using the versioning feature of the docs plugin to manage multiple versions.",
      id: "showcase.tag.versioning.description",
    }),
    color: "#fe6829",
  },

  large: {
    label: translate({ message: "Large" }),
    description: translate({
      message:
        "Very large THP Lab Projects, including many more pages than the average!",
      id: "showcase.tag.large.description",
    }),
    color: "#8c2f00",
  },

  meta: {
    label: translate({ message: "Meta" }),
    description: translate({
      message: "THP Lab Projects of Meta (formerly Facebook) projects",
      id: "showcase.tag.meta.description",
    }),
    color: "#4267b2",
  },

  personal: {
    label: translate({ message: "Personal" }),
    description: translate({
      message:
        "Personal websites, blogs and digital gardens built with Docusaurus",
      id: "showcase.tag.personal.description",
    }),
    color: "#14cfc3",
  },

  Gaming: {
    label: translate({ message: "Gaming" }),
    description: translate({
      message:
        "THP Lab Projects in relation with gaming",
      id: "showcase.tag.gaming.description",
    }),
    color: "#ffcfc3",
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortProjects() {
  let result = Projects;
  // Sort by site name
  result = sortBy(result, (Project) => Project.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (Project) => !Project.tags.includes("favorite"));
  return result;
}

export const sortedProjects = sortProjects();

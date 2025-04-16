/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "category",
      label: "Основная информация",
      link: {
        type: "generated-index",
        slug: "main-info",
        description: "В этом разделе вы сможете найти много полезной информации о самом сервере, а также про то, кто работает и играет на этом сервере, про существующие донаты и многое другое.",
      },
      items: [
        "main-info/server-staff",
        "main-info/donations",
      ],
    },
    {
      type: "category",
      label: "Навыки",
      link: {
        type: "doc",
        id: "skills/intro",
      },
      items: [
        "skills/intro",
        "skills/combat",
        "skills/mining",
        "skills/foraging",
        "skills/farming",
        "skills/archery",
        "skills/enchanting",
        "skills/fishing",
        "skills/mastery",
      ],
    },
    {
      type: "category",
      label: "Полезные команды",
      link: {
        type: "generated-index",
        slug: "useful-commands",
        description: "В этом разделе описаны все команды, которые могут вам пригодиться в игре.",
      },
      items: [
        "useful-commands/toggle",
        "useful-commands/top",
        "useful-commands/mail",
        "useful-commands/ignore",
        "useful-commands/team"
      ],
    },
    {
      type: "doc",
      id: "armor-stands",
    },
    {
      type: "doc",
      id: "item-frame-features",
    },
    {
      type: "doc",
      id: "glass-paint",
    },
    {
      type: "doc",
      id: "chat-and-formatting",
    },
    {
      type: "doc",
      id: "badges",
    },
    {
      type: "doc",
      id: "reputation",
    },
    {
      type: "doc",
      id: "friends",
    },
    {
      type: "doc",
      id: "community-center",
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;

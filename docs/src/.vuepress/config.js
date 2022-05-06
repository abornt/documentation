const { description } = require("../../package");

module.exports = {
  base: "/documentation/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Technical documentation of Wellms",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "EscolaLMS/documentation",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "main",
    editLinkText: "Suggest changes on this page",
    lastUpdated: false,
    nav: [
      {
        text: "Technical Documentations",
        items: [
          {
            text: "Getting Started",
            link: "/getting-started/",
          },
          {
            text: "Admin Panel (App)",
            link: "/app-guide/",
          },
          {
            text: "Api Reference",
            link: "/api-reference/",
          },
          {
            text: "Packages",
            link: "/packages/",
          },
          {
            text: "Development",
            link: "/development/",
          },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/EscolaLMS",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [],
        },
      ],

      "/getting-started/": [
        {
          title: "Getting Started",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["lorem1", "Quickstart Guide"],
            ["lorem2", "Installation"],
            ["lorem4", "Headless Architecture"],
            ["lorem5", "Help & Support"],
            ["lorem6", "License"],
            ["lorem7", "Usage Information (telemetry)"],
          ],
        },
      ],
      "/app-guide/": [
        {
          title: "App Guide",
          collapsable: false,
          children: [
            ["", "Overview"],
            ["lorem1", "Dashboard"],
            ["lorem2", "Users"],
            ["lorem3", "User Groups"],
            ["lorem4", "Orders"],
            ["lorem5", "Payments"],
            ["lorem6", "Courses"],
            ["lorem7", "H5Ps"],
            ["lorem8", "SCORMs"],
            ["lorem9", "Consultations"],
            ["lorem11", "Stationary Events"],
            ["lorem12", "Products"],
            ["lorem13", "Webinars"],
            ["lorem14", "Templates"],
            ["lorem15", "Files"],
            ["lorem16", "Categories"],
            ["lorem17", "Settings"],
            ["lorem18", "Roles"],
            ["lorem19", "Notifications"],
            ["lorem20", "Questionnaires"],
            ["lorem21", "Reports"],
          ],
        },
      ],
      "/api-reference/": [
        {
          title: "API Reference",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["lorem1", "REST API"],
            ["lorem2", "JS-SDK"],
            ["lorem3", "CLI"],
            ["lorem4", "Translation"],
          ],
        },
      ],
      "/packages/": [
        {
          title: "Packages",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["lorem1", "Core"],

            [
              "lorem2",
              "API Laravel REST API. Main module that compose all Laravel packages",
            ],

            [
              "lorem3",
              "Auth. User authentication. Roles & Permission Management",
            ],

            ["lorem4", "Cart. General shop management."],

            ["lorem5", "Categories"],

            [
              "consultations",
              "Consultations. One to one conversation package with `jitsi`",
            ],

            ["lorem7", "Core. Core Package "],

            ["lorem8", "Courses. and content package"],

            [
              "lorem9",
              "Courses Import Export. ZIP package and duplicate feature.",
            ],

            [
              "lorem10",
              "CSV-Users. Exporting and importing users in `.csv` format",
            ],

            [
              "fakturownia",
              "Fakturownia-Integration. Generates Invoice from Fakturowania",
            ],

            ["lorem12", "Files. Uploading, deleting and reusing files."],

            ["lorem13", "H5P Headless."],

            [
              "lorem14",
              "Images. Responsive and compressions processing module",
            ],

            ["invoices", "Invoices generation."],

            ["lorem16", "Jitsi."],

            ["lorem17", "Docker Images."],

            ["lorem18", "LRS xAPI Learning Record Stores"],

            ["lorem19", "MailerLite. Customized group for LMS events"],

            ["lorem20", "Mattermost."],

            ["model-fields", "Model Fields. Extra attributes to any model"],

            ["lorem21", "Notifications."],

            ["lorem22", "Pages. Simple CMS."],

            [
              "lorem23",
              "Payments. Facades that allows to connect payment gateways",
            ],

            ["lorem24", "Permissions and Roles."],

            ["questionnaire", "Questionnaire. Answers & Reports"],

            ["lorem26", "Reports. Courses reports."],

            ["lorem27", "Scorm. Attach Scorm packages to courses"],

            [
              "lorem28",
              "Settings. Additional global fields of various types and other package setup",
            ],

            ["lorem29", "Stationary Events."],

            ["lorem30", "Tags. Tagging for any Module"],

            ["lorem31", "Templates."],

            [
              "lorem32",
              "Templates-Certificates. Editing certificate templates",
            ],

            [
              "lorem33",
              "Templates-Email. Notification management with custom mjml templates.",
            ],

            [
              "lorem34",
              "Templates-PDF. Templates in fabric.js frontend rendering format.",
            ],

            [
              "lorem35",
              "Templates-SMS. Notification management with custom templates",
            ],

            [
              "lorem36",
              "Topic Types. List of possible Topic Types for Course content",
            ],

            ["lorem37", "Translations."],

            ["lorem38", "Video Processing. Generation `hls` streaming formats"],

            [
              "lorem39",
              "Vouchers. E-commerce vouchers to manage cart promotion",
            ],

            [
              "webinar",
              "Webinar. Live video stream with `Jitsi` and `YouTube`",
            ],
            [
              "youtube",
              "Youtube. Package Youtube integration",
            ],
          ],
        },
      ],

      "/development/": [
        {
          title: "Development",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["lorem1", "Backend customization"],
            ["lorem2", "Admin panel customization"],
            ["lorem3", "Developing packages"],
            ["lorem4", "Contributing"],
            ["lorem5", "Permissions"],
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

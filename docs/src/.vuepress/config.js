const { description } = require("../../package");

module.exports = {
  base: "/documentation",
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
        text: "External Links",
        items: [
          {
            text: "Github main page",
            link: "https://github.com/EscolaLMS",
          },
          {
            text: "Components Reference",
            link: "https://escolalms.github.io/Components/",
          },
          {
            text: "SDK Reference",
            link: "https://escolalms.github.io/sdk/",
          },
          {
            text: "API REST Reference",
            link: "https://escolalms.github.io/API/",
          },
        ],
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
            ["guide", "Quickstart Guide"],
            ["installation", "Installation"],
            ["headless-architecture", "Headless Architecture"],
            ["help-support", "Help & Support"],
            ["license", "License"],
            ["demo", "Demo"],
            ["telemetry", "Usage Information (telemetry)"],
          ],
        },
      ],
      "/app-guide/": [
        {
          title: "App Guide",
          collapsable: false,
          children: [
            ["", "Overview"],
            /*
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
            */
          ],
        },
      ],
      "/api-reference/": [
        {
          title: "API Reference",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["rest", "REST API"],
            ["sdk", "Java/Type Script Software development kit"],
            ["cli", "CLI"],
            ["components", "Components"],
            ["translation", "Translation"],
          ],
        },
      ],
      "/packages/": [
        {
          title: "Packages",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["core", "Core"],

            [
              "api",
              "API Laravel REST API. Main module that compose all Laravel packages",
            ],

            [
              "auth",
              "Auth. User authentication. Roles & Permission Management",
            ],

            [
              "assign-without-account",
              "Package enabling accessing courses and products without having account.",
            ],

            ["cart", "Cart. General shop management."],

            ["categories", "Categories"],

            [
              "consultations",
              "Consultations. One to one conversation package with `jitsi`",
            ],

            ["courses", "Courses. and content package"],

            [
              "courses-import-export",
              "Courses Import Export. ZIP package and duplicate feature.",
            ],

            [
              "csv-users",
              "CSV-Users. Exporting and importing users in `.csv` format",
            ],

            [
              "fakturownia",
              "Fakturownia-Integration. Generates Invoice from Fakturowania",
            ],

            ["files", "Files. Uploading, deleting and reusing files."],

            ["h5p", "H5P Headless."],

            ["images", "Images. Responsive and compressions processing module"],

            ["invoices", "Invoices generation."],

            ["jitsi", "Jitsi."],

            ["docker", "Docker Images."],

            ["lrs", "LRS xAPI Learning Record Stores"],

            ["mailerlite", "MailerLite. Customized group for LMS events"],

            ["mattermost", "Mattermost."],

            ["model-fields", "Model Fields. Extra attributes to any model"],

            ["notifications", "Notifications."],

            ["pages", "Pages. Simple CMS."],

            [
              "payments",
              "Payments. Facades that allows to connect payment gateways",
            ],

            ["permissions", "Permissions and Roles."],

            ["questionnaire", "Questionnaire. Answers & Reports"],

            ["reports", "Reports. Courses reports."],

            ["scorm", "Scorm. Attach Scorm packages to courses"],

            [
              "settings",
              "Settings. Additional global fields of various types and other package setup",
            ],

            ["stationary-events", "Stationary Events."],

            ["tags", "Tags. Tagging for any Module"],

            ["templates", "Templates."],

            [
              "templates-certificates",
              "Templates-Certificates. Editing certificate templates",
            ],

            [
              "templates-email",
              "Templates-Email. Notification management with custom mjml templates.",
            ],

            [
              "templates-pdf",
              "Templates-PDF. Templates in fabric.js frontend rendering format.",
            ],

            [
              "templates-sms",
              "Templates-SMS. Notification management with custom templates",
            ],

            [
              "topic-types",
              "Topic Types. List of possible Topic Types for Course content",
            ],

            ["tracker", "Tracker."],

            ["translations", "Translations. (not implemented)"],

            ["video", "Video Processing. Generation `hls` streaming formats"],

            [
              "vouchers",
              "Vouchers. E-commerce vouchers to manage cart promotion",
            ],

            [
              "webinar",
              "Webinar. Live video stream with `Jitsi` and `YouTube`",
            ],
            ["youtube", "Youtube. Package Youtube integration"],
          ],
        },
      ],

      "/development/": [
        {
          title: "Development",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["backend", "Backend customization"],
            ["admin", "Admin panel customization"],
            ["frontend", "Frontend development"],
            ["contributing", "Contributing"],
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

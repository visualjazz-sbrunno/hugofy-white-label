export default [
  { label: "Title", name: "title", widget: "string", default: "Global Settings" },
  {
    label: "Footer",
    name: "footer",
    widget: "list",
    allow_add: false,
    fields: [
      { label: "Intro", name: "footer_text", widget: "string", required: false },
      {
        label: "Footer GLobal Links",
        name: "footer_global_link",
        widget: "list",
        allow_add: true,
        fields: [
          { label: "Footer Link Text", name: "footer_global_link_text", widget: "string" },
          { label: "Footer Link URL", name: "footer_global_link_url", widget: "string" },
          { label: "Footer Link URL Text", name: "footer_global_link_url_text", widget: "string" },
        ],
      },
      {
        label: "Footer Social Links",
        name: "footer_social_link",
        widget: "list",
        allow_add: true,
        fields: [
          { label: "Footer Social URL", name: "footer_social_link_url", widget: "string", default: "http://www.twitter.com/" },
          { label: "Footer Social Platform", name: "footer_social_link_platform", widget: "string", default: "twitter" },
        ],
      },
      {
        label: "Footer Privacy Links",
        name: "footer_pirvacy_link",
        widget: "list",
        allow_add: true,
        fields: [
          { label: "Footer Privacy URL", name: "footer_pirvacy_link_url", widget: "string", default: "/privacy-policy" },
          { label: "Footer Privacy Text", name: "footer_pirvacy_link_text", widget: "string", default: "Privacy policy" },
        ],
      },
      {
        label: "Footer Disclaimer Text",
        name: "footer_disclaimer_text",
        widget: "string",
        default: "ABN 99 999 999 999 | Copyright © 2020 · Isobar Canberra",
        required: true,
      },
      { label: "Google Analytics ID", name: "footer_ga", widget: "string", default: "UA-9999999-1", required: true },
      {
        label: "SEO Settings",
        name: "seo",
        widget: "list",
        allow_add: false,
        fields: [
          { label: "OG Site Name", name: "seo_og_sitename", widget: "string", required: false },
          { label: "OG Image", name: "seo_og_image", widget: "image", required: false },
          { label: "OG URL", name: "seo_og_url", widget: "string", required: false },
          { label: "OG Type", name: "seo_og_type", widget: "string", required: false },
          { label: "OG Description", name: "seo_og_description", widget: "string", required: false },
          { label: "OG Twitter", name: "seo_og_twitter", widget: "string", required: false },
        ],
      },
      {
        label: "Article Settings",
        name: "article",
        widget: "list",
        allow_add: false,
        fields: [
          { label: "Title", name: "article_title", widget: "string", required: false },
          { label: "Description", name: "article_description", widget: "string", required: false },
          { label: "Full Name", name: "article_fullname", widget: "string", required: false },
          { label: "Email Address", name: "article_email", widget: "string", required: false },
        ],
      },
      {
        label: "Resources Settings",
        name: "resources",
        widget: "list",
        allow_add: false,
        fields: [
          { label: "Title", name: "resources_title", widget: "string", required: true },
          { label: "Banner Title", name: "resources_banner_title", widget: "string", required: false },
          { label: "Banner Description", name: "resources_banner_description", widget: "string", required: false },
          { label: "Banner Background Image", name: "resources_banner_image", widget: "image", required: false },
        ],
      },
    ],
  },
];

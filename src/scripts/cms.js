window.CMS_MANUAL_INIT = true;

import React from "react";
import CMS, { init } from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";

import { ModuleFields, SEOFields, SettingsFields, BannerFields, ArticleFields } from "./cms/";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../scss/main.scss";

init({
  config: {
    backend: {
      name: "git-gateway",
    },
    load_config_file: false,
    media_folder: "site/static/img",
    public_folder: "img",
    publish_mode: "editorial_workflow",
    collections: [
      {
        name: "post",
        label: "Post",
        folder: "site/content/post",
        create: true,
        fields: [{ label: "Title", name: "title", widget: "string", required: true }, ...SEOFields, ...BannerFields, ...ArticleFields],
      },
      {
        name: "resources",
        label: "Resources",
        folder: "site/content/resources",
        create: true,
        fields: [
          { label: "Title", name: "title", widget: "string", required: true },
          ...SEOFields,
          ...BannerFields,
          ...ArticleFields,
          {
            label: "Category",
            name: "category",
            widget: "select",
            options: ["News & Blogs", "Personal stories", "Case studies", "Fact sheets", "Guides & Toolkits", "Support services", "Research"],
          },
          {
            label: "Focus",
            name: "focus",
            widget: "select",
            options: [
              "Support for managers, colleagues and staff",
              "Assessing organisational approach",
              "Improving workplace culture",
              "Developing policy and practice",
              "Responding to national/global crises",
            ],
          },
          {
            label: "Role",
            name: "role",
            widget: "select",
            options: [
              "CEO or leadership role",
              "Senior manager",
              "HR professional",
              "Line manager/supervisor",
              "Sole trader",
              "Employee",
              "Health and/or wellbeing lead",
              "Diversity and/or inclusion lead",
              "Champion or advocate",
            ],
          },
          {
            label: "Organisation size",
            name: "organisation_size",
            widget: "select",
            options: ["Micro (<10 employees)", "Small (10-49 employees)", "Medium (50-249 employees)", "Large (250+ employees)"],
          },
          {
            label: "Industry",
            name: "industry",
            widget: "select",
            options: [
              "Business Consulting & Management",
              "Charity, Not-for-profit",
              "Defence",
              "Education & Training",
              "Emergency Services & Security",
              "Energy & Utilities",
              "Environment & Agriculture",
              "Financial & Insurance Services",
              "Government & Public Agencies",
              "Healthcare",
              "IT & Telecommunications",
              "Law & Legal Services",
              "Manufacturing",
              "Media, Communications & Digital",
              "Mining",
              "Occupational Health & Rehabilitation",
              "Property & Construction",
              "Recruitment & HR",
              "Retail & Consumer",
              "Science & Pharmaceuticals",
              "Tourism & Hospitality",
              "Transport & Logistics",
            ],
          },
          ...ModuleFields,
        ],
      },
      {
        name: "pages",
        label: "Pages",
        folder: "site/content",
        create: true,
        slug: "{{fields.title}}",
        fields: [{ label: "Title", name: "title", widget: "string", required: true }, ...SEOFields, ...BannerFields, ...ModuleFields],
      },
      {
        name: "settings",
        label: "Global Settings",
        folder: "site/content/settings",
        slug: "settings",
        editor: {
          preview: false,
        },
        fields: [...SettingsFields],
      },
    ],
  },
});

CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewStyle(styles, { raw: true });

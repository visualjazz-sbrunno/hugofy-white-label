import React from "react";
import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../scss/main.scss";

CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewStyle(styles, {raw: true});
CMS.init();

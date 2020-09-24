// @note Set Environment Variables

const ACTIVE_ENV = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`;
require('dotenv').config({ path: `.env.${ACTIVE_ENV}` });

// @note Define and Extract Website and PWA Metadata

const WEBSITE_METADATA = {
  title: `Kevala Design - Website Development & Design Studio`,
  description: `Website development and design studio challenging the status quo. We offer a full suite of services to bring ideas online, contact us today for a free quote.`,
  author: `@kevaladesign`,
  siteUrl: process.env.URL || process.env.DEPLOY_URL || `https://www.kevaladesign.com`,
};

const PWA_METADATA = {
  short_name: `Kevala Design`,
  lang: `en`,
  background_color: `#000000`,
  theme_color: `#EDE2D5`,
};

const { title, description, author, siteUrl } = WEBSITE_METADATA;
const { short_name, lang, background_color, theme_color } = PWA_METADATA;

module.exports = {
  siteMetadata: {
    title,
    description,
    author,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name,
        description,
        lang,
        start_url: `/`,
        background_color,
        theme_color,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: `query`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
  ],
};

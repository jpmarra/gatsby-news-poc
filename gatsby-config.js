module.exports = {
  siteMetadata: {
    title: `MLB News`,
    description: `Statically generated legacy news articles`,
    author: `@jpmarra`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Article`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: `Article`,
        imagePath: `media.photo.cuts[0].src`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MLB News`,
        short_name: `mlb-news`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#ececec`,
        display: `minimal-ui`,
        icon: `src/assets/logo.svg` // This path is relative to the root of the site.
      }
    }, // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};

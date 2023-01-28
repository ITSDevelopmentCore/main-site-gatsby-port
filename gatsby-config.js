/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ITS Development - Разработка ПО для бизнеса`,
    siteUrl: `https://www.itsdevelopment.ru`
  },

  plugins: [
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    }
  ]
};
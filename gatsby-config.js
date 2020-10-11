module.exports = {
  siteMetadata: {
    title: `FORNO's Portfolio`,
    description: `FORNO's Portfolio page with awesome uesful tools and every information.`,
    author: `FORNO`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/forno_fornya`,
      },
      {
        name: `Github`,
        url: `https://github.com/forno`,
      },
    ],
    keywords: `gatsby,forno,portfolio`,
    siteUrl: `https://forno.github.io`,
    lang: `ja`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-material-ui`,
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
        name: `FORNO Portfolio`,
        short_name: `FORNO`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}

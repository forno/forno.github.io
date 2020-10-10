module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FORNO Portfolio`,
        short_name: `FORNO`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `../src/images/icon.png`
      },
    },
    `gatsby-plugin-offline`,
  ]
}
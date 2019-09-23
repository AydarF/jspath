module.exports = {
  siteMetadata: {
    title: `JavaScript Source Project`,
    description: `Kick off your next, great JS project.`,
    author: `Aydar Fayzullin`,
    keywords: `react course, react for designers, ios development, javascript, vue`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '9c8h2v96or0u',
        accessToken: 'kE6x5_vexoxHCGL6j1YCuAQpqboLOnFX1TO3HWRouGs'
      }
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

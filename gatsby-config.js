module.exports = {
  siteMetadata: {
    title: 'Gatsby Codebros Starter',
    description: 'Change description',
    author: 'codebros.cz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Codebros Starter',
        short_name: 'Codebros',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#333333',
        display: 'minimal-ui', // Other options: fullscreen, standalone or browser. Docs: https://developers.google.com/web/fundamentals/web-app-manifest/
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

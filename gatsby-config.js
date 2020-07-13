module.exports = {
  siteMetadata: {
    title: 'Moravská stavební a topenářská a.s.',
    description:
      'Komplexní dodávky ve stavebnictví a tepelné energetice pro objekty občanské a průmyslové výstavby',
    author: 'ctyrimedia.cz',
    address: {
      street: 'B. Martinů 1885/2',
      city: 'Nový Jičín',
      postal: '741 01',
      country: 'Česká republika',
    },
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Work Sans:ital,wght@0,400;0,700;1,400;1,700'],
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Moravská stavební a topenářská a.s.',
        short_name: 'Moravska.cz',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#333333',
        display: 'minimal-ui', // Other options: fullscreen, standalone or browser. Docs: https://developers.google.com/web/fundamentals/web-app-manifest/
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

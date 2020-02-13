module.exports = {
  siteMetadata: {
    title: 'Lawrence Ng',
    author: 'Lawrence Ng',
    description: 'Lawrence\'s personal landing page',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-59621724-1",
      },
    },
    'gatsby-plugin-sass',
  ],
}

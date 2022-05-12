module.exports = {
  siteMetadata: {
    siteTitle: `Paylivre SDK Gateway Mobile Docs`,
    defaultTitle: `Paylivre SDK Gateway Mobile Docs`,
    siteTitleShort: `Documentation SDK Gateway`,
    siteDescription: `This is the documentation for the Paylivre SDK Gateway Mobile.`,
    siteUrl: `https://paylivre-documentation-sdk.com`,
    siteAuthor: `paylivre`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#215aff`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/paylivre/sdk-gateway-mobile-docs`,
        // yamlFilesPath: `src/yamlFiles`,
        // baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paylivre SDK Gateway Mobile Docs`,
        short_name: `Paylivre SDK Gateway Mobile Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://paylivre.github.io/sdk-gateway-mobile-docs`,
      },
    },
    `gatsby-plugin-offline`,
  ],
  pathPrefix: "/sdk-gateway-mobile-docs",
};

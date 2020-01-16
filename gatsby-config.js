module.exports = {
  siteMetadata: {
    title: `Measurable AI`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        name: `Measurable AI`,
        short_name: `MAI`,
        start_url: `/`,
        background_color: `#221852`,
        theme_color: `#221852`,
        display: `standalone`,
        icon: `src/images/manifest-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `blog.measurable.ai`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        includedRoutes: ["**/categories", "**/posts", "**/media"],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-extract-schema`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: process.env.GATSBY_MULTI_LANG
          ? [`en-US`, `zh-HK`, `zh-CN`]
          : [`en-US`],
        defaultLanguage: `en-US`,
        redirect: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

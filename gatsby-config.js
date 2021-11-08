const siteUrl = "https://www.measurable.ai"

module.exports = {
  siteMetadata: {
    title: `Measurable AI`,
    description: `[Alternative Data for Emerging Markets] Measurable AI generates actionable consumer insights based on billions of transactional data for the emerging markets.`,
    author: `Measurable AI`,
    siteUrl: siteUrl,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allWordpressPost {
            edges {
              node {
                link
                modified
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: "3309668",

        // Include LinkedIn Insight in development.
        // Defaults to false meaning LinkedIn Insight will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-138954130-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
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
        gcm_sender_id: "539876079581",
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
        redirectComponent: `${__dirname}/src/components/seo.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

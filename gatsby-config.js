const config = require("./data/SiteConfig");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.description,
    siteUrl: config.siteUrl + pathPrefix,
    // rssMetadata: {
    //     site_url: config.siteUrl + pathPrefix,
    //     feed_url: config.siteUrl + pathPrefix + config.siteRss,
    //     title: config.siteTitle,
    //     description: config.siteDescription,
    //     image_url: `${config.siteUrl + pathPrefix}/images/icon.webp`, // todo: image path
    //     author: config.userName,
    //     copyright: config.copyright,
    // },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`],
      },
    },
    // {
    //     resolve: "gatsby-plugin-feed", // todo : ovo pogledat
    //     options: {
    //         query: `
    //           {
    //             site {
    //               siteMetadata {
    //                 title
    //                 description
    //                 siteUrl
    //                 site_url: siteUrl
    //               }
    //             }
    //           }
    //         `,
    //         feeds: [
    //             {
    //                 title: "Services RSS Feed",
    //                 output: "/rss.xml",
    //                 query: `
    //             {
    //               allMarkdownRemark(
    //                 limit: 2000
    //                 sort: {fields: [frontmatter___date], order: ASC}
    //                 filter: { fields: { slug: { ne: $slug } } }
    //                 ) {
    //                 edges {
    //                     node {
    //                         fields {
    //                             slug
    //                         }
    //                         frontmatter {
    //                             title
    //                             description
    //                             cover
    //                             date
    //                         }
    //                     }
    //                 }
    //               }
    //             }
    //             `,
    //                 serialize: ({ query: { site, allMarkdownRemark } }) => {
    //                     console.log(allMarkdownRemark);
    //                     return allMarkdownRemark.edges.map((node) => {
    //                         return Object.assign({}, node.frontmatter, {
    //                             url: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
    //                             guid: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
    //                         });
    //                     });
    //                 },
    //             },
    //         ],
    //     },
    // },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "services",
        path: `${__dirname}${config.servicesDir}`,
      },
    },
    // {
    //     resolve: "gatsby-source-filesystem",
    //     options: {
    //         name: "images",
    //         path: `${__dirname}/src/images/`,
    //     },
    //     __key: "images",
    // },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
          "gatsby-remark-smartypants",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs", // keep this under autolink headers https://github.com/gatsbyjs/gatsby/issues/5764
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [config.googleAnalyticsID],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp", // image manipulation
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    // "gatsby-plugin-remove-trailing-slashes",
    "gatsby-plugin-image",
    // {
    //     resolve: `gatsby-plugin-manifest`,
    //     options: {
    //         name: `Barcode`,
    //         short_name: `Barcode`,
    //         start_url: `/`,
    //         background_color: `#ffffff`,
    //         theme_color: `#ffffff`,
    //         display: `standalone`,
    //         icon: `${config.siteUrl + pathPrefix}/images/icon.webp`,
    //     },
    // },
    // "gatsby-plugin-offline",
  ],
};

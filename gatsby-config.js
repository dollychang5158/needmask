module.exports = {
  pathPrefix: "/needmask/",
  siteMetadata: {
    title: `Need Mask | 口罩偵探`,
    description: `Need Mask | 口罩偵探:幫你快速列出地區口罩剩餘數量列表的好夥伴。`,
    siteUrl: `https://dollychang5158.github.io/needmask/`,
    url: `https://dollychang5158.github.io/needmask/`,
    author: `dolly`,
    keywords: [`口罩`,`口罩偵探`,`武漢肺炎`,`NeedMask`,`needmask`,`need`,`mask`,`呼吸道`,`洗手`,`口罩數量`],
    image: `share.png`,
  },plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/navLogoIcon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157943540-1",
      },
    },
    `gatsby-plugin-modal-routing`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

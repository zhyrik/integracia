/*
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}).
*/

module.exports = {
  siteMetadata: {
    title: `квартири, іпотека`,
    description: `Ми надаємо широкий спектр послуг, пошук роботи, вакансії, візи, освядченя , оформлення іпотеки, кредити, пошук житла, оренда, карти побиту`,
    author: `@zhurik`,
    siteUrl: 'https://mystifying-lovelace-f6fbfb.netlify.com/',
    defaultImage: '/image/default.jpg'
  },
  plugins: [
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'bxof2jv2ip32',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'jcTXMToFF0uydrG_W-rl8UEi7bt2-e5hQh8e4eGeozU',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-152959031-1",
        // Defines where to place the ttracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-MCGDQBV",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "mystifying-lovelace-f6fbfb.netlify.com",
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
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
        name: `Інтеграція`,
        short_name: `integracia`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: `Mehmet Kocer`,
    description: `Hello, I’m mehmet, a frontend developer at @despatchcloud`,
    author: `@mkocerdev`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/src/data/photos`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mehmet Kocer`,
        short_name: `mkocer`,
        start_url: `/`,
        background_color: `#F1FFF2`,
        theme_color: `#F1FFF2`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    "gatsby-transformer-remark",
  ],
};

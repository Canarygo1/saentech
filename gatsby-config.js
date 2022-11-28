module.exports = {
  siteMetadata: {
    title: `Saentech Canarias - Saentech Canarias`,
    description: `¿Por qué Confiar en Saen Tech Canarias? Saen Tech es el resultado de la suma de mucha experiencia, gran profesionalidad, sacrifcio, constancia y ...`,
    author: `@alecruzdev`,
    siteUrl: `https://www.saentech.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Inter&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          apiKey: "AIzaSyBoIra_YHv5qbebEGoQdMnhYbOZjybME_k",
          authDomain: "saentech-3e813.firebaseapp.com",
          projectId: "saentech-3e813",
          storageBucket: "saentech-3e813.appspot.com",
          messagingSenderId: "329888571041",
          appId: "1:329888571041:web:a6aee83f8d39aaad099ae0",
          measurementId: "G-ZP8SYNM25E"
        }
      }
    },
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/saentech.jpeg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

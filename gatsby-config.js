const path = require(`path`);

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Comfortaa`,
            subsets: [`latin`],
            variants: [`300`, `400`, `500`, `600`, `700`]
          },
        ],
      }, 
    }, {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`public/service-worker.js`),
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ]
}
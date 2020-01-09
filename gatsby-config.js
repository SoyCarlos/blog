module.exports = {
  siteMetadata: {
    title: `Carlos E Ortega`,
    name: `Carlos`,
    siteUrl: `https://blog.carlos.soy`,
    description: `I am Carlos E Ortega, an Undergraduate student studying Data Science.`,
    hero: {
      heading: `Carlos Eduardo Ortega`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/SoyCarlosEO/`,
      },
      {
        name: `github`,
        url: `https://github.com/SoyCarlos/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/soycarlos/`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/imcarlos/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carlos E Ortega`,
        short_name: `Carlos`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/.png`,
      },
    },
  ],
};

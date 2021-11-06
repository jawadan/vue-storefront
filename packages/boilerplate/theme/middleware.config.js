module.exports = {
  integrations: {
    boilerplate: {
      location: 'vsf-wordpress-api/server',
      configuration: {
        api: process.env.WORDPRESS_GRAPHQL
      }
    }
  }
};

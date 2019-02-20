const path = require('path');
const withGraphql = require('next-plugin-graphql');
const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');

const stage = process.env.UP_STAGE;

module.exports = withTypescript(
  withCSS(
    withGraphql({
      webpack(config, options) {
        config.resolve.alias['pages'] = path.join(__dirname, 'src', 'pages');
        config.resolve.alias['components'] = path.join(__dirname, 'src', 'components');
        config.resolve.alias['manipulations'] = path.join(__dirname, 'src', 'manipulations');
        config.resolve.alias['lib'] = path.join(__dirname, 'src', 'lib');
        return config;
      },
      assetPrefix: stage ? `/${stage}` : ''
    })
  )
);

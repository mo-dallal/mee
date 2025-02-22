const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
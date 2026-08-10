const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MinimizerPlugin = require("minimizer-webpack-plugin");
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new MinimizerPlugin({
        test: /\.(?:[cm]?js|css|html?|json)(\?.*)?$/i,
        minify: [
          MinimizerPlugin.terserMinify,
          MinimizerPlugin.cssnanoMinify,
          MinimizerPlugin.htmlMinifierTerser,
          MinimizerPlugin.jsonMinify,
        ],
      })
    ]
  }
});

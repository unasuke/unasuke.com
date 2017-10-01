const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'base': './source/stylesheets/src/base.scss',
    'index': './source/stylesheets/src/index.scss',
    'sponsor': './source/stylesheets/src/sponsor.scss',
  },
  output: {
    filename: '[name].css',
    path: path.resolve(__dirname, 'source/stylesheets'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader'
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ]
};

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  entry: {
    base: "./source/stylesheets/src/base.scss",
    index: "./source/stylesheets/src/index.scss",
    sponsor: "./source/stylesheets/src/sponsor.scss",
    activity: "./source/stylesheets/src/activity.scss",
    aboutme: "./source/stylesheets/src/aboutme.scss",
    pay: "./source/stylesheets/src/pay.scss",
  },
  output: {
    path: path.resolve(__dirname, "source/stylesheets/"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
};

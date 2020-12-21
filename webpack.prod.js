const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[fullhash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[fullhash].css" }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: 'index.html',
      chunks: ['ol','map','index','index-style'],
      // minify: {
      //   removeAttributeQuotes: true,
      //   collapseWhitespace: true,
      //   removeComments: true
      // }
    }),
    new HtmlWebpackPlugin({
      template: "./src/admin-profile.html",
      filename: 'admin-profile.html',
      chunks: ['ol','map','admin-profile','profile'],
      // minify: {
      //   removeAttributeQuotes: true,
      //   collapseWhitespace: true,
      //   removeComments: true
      // }
    }),
    new HtmlWebpackPlugin({
      template: "./src/admin-signup.html",
      filename: 'admin-signup.html',
      chunks: ['admin-signup'],
      // minify: {
      //   removeAttributeQuotes: true,
      //   collapseWhitespace: true,
      //   removeComments: true
      // }
    }),
    new HtmlWebpackPlugin({
      template: "./src/admin-login.html",
      filename: 'admin-login.html',
      chunks: ['admin-login'],
      // minify: {
      //   removeAttributeQuotes: true,
      //   collapseWhitespace: true,
      //   removeComments: true
      // }
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader, //2. Extract css into files
            "css-loader", //1. Turns css into commonjs
        ]
      }
    ]
  }
});
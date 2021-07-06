const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const extractCSS = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const PurifyCSSPlugin = require("purifycss-webpack");
const glob = require("glob-all");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  // resolve: {
  //   alias: {
  //     react: "preact/compat",
  //     "react-dom": "preact/compat"
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(["app/public", "app/*.html"]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "public/styles/[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      hash: true
    })
  ],
  devServer: {
    compress: true,
    port: 3000
  },
  output: {
    filename: "public/javascript/[name].[chunkhash].js",
    path: path.resolve(__dirname, "./app"),
    publicPath: "/" // change publicpath to "./" when serving without a server
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: "../"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "public/images/[name].[ext]",
              publicPath: "/" // change publicpath to "./" when serving without a server
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

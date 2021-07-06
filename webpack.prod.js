const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var BrotliPlugin = require("brotli-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({}),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      importsDirectory: ".",
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://app.hitriva.com"),
          handler: "staleWhileRevalidate"
        }
      ]
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CompressionPlugin()
  ]
});

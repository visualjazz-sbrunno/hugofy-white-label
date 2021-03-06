const webpack = require("webpack");
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",

  entry: {
    cms: path.join(__dirname, "src", "scripts", "cms.js"),
    main: path.join(__dirname, "src", "index.js"),
  },

  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },

  resolve: {
    alias: {
      "uikit-util": path.join(__dirname, "src", "scripts", "util"),
    },
  },

  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },

      { test: /\.json$/, loader: "json-loader" },

      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "fonts/",
            },
          },
        ],
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        loader: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true },
      },
    ],
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    //
    // new webpack.ProvidePlugin({
    //   fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    // }),

    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true,
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/fonts/",
        to: "fonts/",
        flatten: true,
      },
    ]),
    new HtmlWebpackPlugin({
      filename: "admin/index.html",
      template: "src/cms.html",
      inject: false,
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};

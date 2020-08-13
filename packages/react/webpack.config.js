const webpack = require("webpack");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require("./package.json");
const path = require("path");

const libraryName = pkg.name;

module.exports = {
  entry: path.join(__dirname, "./lib/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "rehoboam-react.js",
    library: libraryName,
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        use: ["babel-loader"],
        include: [path.resolve(__dirname, "lib")],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]_[local]__[hash:base64:5]",
              },
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]__[hash:base64:5]",
              },
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};

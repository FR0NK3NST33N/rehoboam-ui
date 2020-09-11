const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const cwd = process.cwd();

module.exports = env => {
    var environment = env.ENV === "dev" ? "development" : "production";
    return {
        entry: {
            "dist/rehoboam": "./lib/index.js"
        },
        output: {
            path: path.resolve(__dirname, ""),
            filename: "[name].bundle.js"
        },
        plugins: [
            new webpack.DefinePlugin({
                ENV: JSON.stringify(env.ENV)
            }),
            new MiniCssExtractPlugin({
                filename: "[name].min.css"
            }),
            new CopyPlugin({
                patterns: [{
                    from: "./lib/",
                    to: "./dist/",
                    force: true
                }]
            })
        ],
        mode: environment,
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // only enable hot in development
                                hmr: environment === "development",
                                // if hmr does not work, this is a forceful method.
                                reloadAll: true
                            }
                        },
                        { loader: "css-loader" },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        ['cssnano', { preset: 'default' }]
                                    ]
                                }
                            }
                        },
                        { loader: "sass-loader" }
                    ]
                }
            ]
        }
    };
};
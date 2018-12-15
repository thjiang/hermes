const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf.js");

const buildPath = path.resolve(__dirname, "../../server/app/public/");
const manifest = require(path.resolve(__dirname,
    `${buildPath}/dll/bundle-manifest.json`
));
console.log(path.resolve(__dirname,
    `${buildPath}/dll/bundle-manifest.json`
));
console.log(path.resolve(__dirname, `${buildPath}/dll/bundle.dll.js`));

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: "js/app.[chunkhash:8].js",
        chunkFilename: "js/[name].[chunkhash:8].js",
        path: buildPath,
        publicPath: buildPath
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: buildPath
                        }
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: buildPath
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    mode: "production",
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: manifest
        }),
        new HtmlWebpackPlugin({
            title: "登录 - 网易考拉",
            filename: "web.html",
            template: "index.ejs",
            favicon: "./favicon.ico",
            chunks: ["vendors", "web"]
        }),
        new HtmlWebpackPlugin({
            title: "登录 - 网易考拉",
            filename: "wap.html",
            template: "index.ejs",
            favicon: "./favicon.ico",
            chunks: ["vendors", "wap"]
        }),
        // new AddAssetHtmlPlugin({
        //     // filepath: require.resolve('../server/app/public/dll/bundle.dll.js')
        //     filepath: require.resolve(`${buildPath}/dll/bundle.dll.js`)
        // }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[name].css"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
});

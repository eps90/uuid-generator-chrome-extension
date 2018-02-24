const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dirsToCleanUp = ['dist'];

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve("dist"),
        filename: "[name].[chunkhash].js",
        publicPath: "/",
        chunkFilename: "[name].[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js/, loader: "babel-loader", exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(dirsToCleanUp),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    devtool: "source-map"
};
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

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
        new CleanWebpackPlugin(dirsToCleanUp)
    ],
    devtool: "source-map"
};
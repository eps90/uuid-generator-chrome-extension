const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");

const extractStyles = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const dirsToCleanUp = ["dist", "coverage"];
const filesToCopy = [
    "manifest.json",
    {from: "img/*", flatten: true}
];

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
            },
            {
                test: /\.css$/,
                loader: extractStyles.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractStyles.extract({
                    use: [
                        {loader: "css-loader"},
                        {loader: "sass-loader"}
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(dirsToCleanUp),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        extractStyles,
        new CopyWebpackPlugin(filesToCopy),
        new ZipPlugin({
            path: path.resolve(__dirname, "build"),
            filename: "uuid_generator.zip"
        })
    ],
    devtool: "source-map"
};
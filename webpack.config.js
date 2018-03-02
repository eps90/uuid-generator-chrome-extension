const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const DotEnv = require("dotenv-webpack");

const extractStyles = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const dirsToCleanUp = ["dist", "coverage", "build"];
const filesToCopy = [
    "manifest.json",
    {from: "img/*", flatten: true}
];

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src", "index.js"),
        vendor: [
            "react",
            "react-dom",
            "prop-types",
            "uuid",
            "@fortawesome/fontawesome",
            "@fortawesome/fontawesome-free-solid",
            "@fortawesome/react-fontawesome",
            "react-clipboard.js"
        ]
    },
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
        new DotEnv(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        extractStyles,
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),
        new CopyWebpackPlugin(filesToCopy),
        new ZipPlugin({
            path: path.resolve(__dirname, "build"),
            filename: "uuid_generator.zip"
        })
    ],
    devtool: "source-map"
};
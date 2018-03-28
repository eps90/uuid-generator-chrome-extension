const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
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

const getAppVersion = () => {
    const manifest = require(path.join(__dirname, "manifest.json"));
    return manifest.version;
};

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
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            "process.env.APP_VERSION": JSON.stringify(getAppVersion())
        }),
    ]
};

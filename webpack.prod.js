const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const path = require("path");
const webpack = require("webpack");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = merge(commonConfig, {
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        new ZipPlugin({
            path: path.resolve(__dirname, "build"),
            filename: "uuid_generator.zip"
        })
    ]
});
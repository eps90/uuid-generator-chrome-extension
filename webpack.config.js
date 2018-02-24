const path = require("path");

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
    devtool: "source-map"
};
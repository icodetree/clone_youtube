const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js", // 빌드시 연결되는 JS
        path: path.resolve(__dirname, "dist"), // 빌드되는 폴더명
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ["style-loader", "css-loader"], // 뒤에서부터 처리
                use: [MiniCssExtractPlugin.loader, "css-loader"], // 뒤에서부터 처리
            },
            {
                test: /\.jpg$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html", // 빌드시 포함되는 html
        }),
        new MiniCssExtractPlugin({
            filename: "common.css",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 8080,
    },
};

const HtmlPlugin = require("html-webpack-plugin")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack");

const fs = require('fs');
const cwd = process.cwd();

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        before: app => {
            console.log("test")
            app.get('https://jsonplaceholder.typicode.com/:fileName', (req, res) => {
                console.log("test")
                const { fileName } = req.params;
                if (!fileName) res.json({ error: "Not found" });
                const apiPath = `/mock/get`;
                const file = `${path.join(cwd, apiPath, fileName)}.json`;
                if (fs.existsSync(file)) {
                    setTimeout(() => {
                        res.sendFile(file);
                    }, 500);
                } else {
                    res.sendStatus(404);
                }

            })
        }
    },
    plugins: [
            new HtmlPlugin({
                filename: "index.html",
                template: "./src/index.html"
            }),
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
                }
            })
        ],
    }
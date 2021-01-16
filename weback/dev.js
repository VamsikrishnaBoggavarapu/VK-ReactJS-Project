const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const fs = require('fs');
const HtmlPlugin = require("html-webpack-plugin")
const commonPaths = require('./paths');
const common = require('./common');
const cwd = process.cwd();

module.exports = () => 
    merge(common(), {
        mode: 'development',
        entry: commonPaths.entryPath,
        devServer: {
            compress:true,
            hot:true,
            host:'localhost',
            port:3000,
            historyApiFallback: true, 
            noInfo: true,
            overlay: true,
            before: (app) => {
                app.get('/vk/:fileName', (req, res) => {
                    const { fileName } = req.params;                    
                    if (!fileName) res.json({ error: fileName });
                    const apiPath = `/mock/get`;
                    const file = `${path.join(cwd, apiPath,fileName)}.json`;
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
                template: "./src/public/index.html"
            }),
            
        ],
    });

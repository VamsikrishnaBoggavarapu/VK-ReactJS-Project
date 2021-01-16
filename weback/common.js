const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_module/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: [{ loader: "file-loader" }]
                },
                {
                    test: /\.(woff2|ttf|woff|eot)$/,
                    use: [{ loader: "file-loader" }]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                }
            ]
        },
        resolve: {
            modules: ['scr', 'node_modules'],
            extensions: ['*', '.js', 'jsx', '.css'],
            alias: {
                '@vk': './',
                '@@vk': '../',
                '@lib': path.resolve(__dirname, '../src/lib'),
                '@src': path.resolve(__dirname, '../src'),
                '@shared': path.resolve(__dirname, '../src/shared'),
            }
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
                }
            })
        ]
    }
}
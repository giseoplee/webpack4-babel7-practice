const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

function isProduction (mode) {
    return mode == 'production' ? true : false;
}

module.exports = {
    entry: {
        vendor: ['@babel/polyfill', 'eventsource-polyfill', 'react', 'react-dom'],
        app: ['@babel/polyfill', 'eventsource-polyfill', resolve('/src/client/index.js')]
    },
    output: {
        path: resolve('/dist'),
        filename: '[name].[hash].bundle.js',
        publicPath: '/'
    },
    module: {  
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: resolve('/src/client/public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};


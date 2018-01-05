const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig =
    new HtmlWebpackPlugin({template: `${__dirname}/public/index.html`, filename: 'index.html', inject: 'body'});

const hmr = ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?noInfo=false'];

module.exports = {
    entry: {
        main: hmr.concat(['./src/index.js'])
    },
    output: {
        filename: 'bundle.js',
        path: __dirname,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin()
    ]
}
const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './static/dist'),
        filename: 'main.js',
        publicPath: '/static/dist/',
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    mode: 'development',
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.svg$/, loader: 'file-loader' },
        ],
    },
}

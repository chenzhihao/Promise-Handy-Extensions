var path = require('path');
var webpack = require('webpack');


config = {
    entry: [
        path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
        library: ['promiseHandyExtension']
    },
    externals: {
    },
    eslint: {
        configFile: '.eslintrc'
    },
    resolve: {
        alias: {}
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

module.exports = config;
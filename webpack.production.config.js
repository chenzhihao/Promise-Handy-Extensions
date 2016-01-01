var path = require('path');
var webpack = require('webpack');


config = {
    entry: [
        path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve(__dirname, 'release'),
        filename: 'promiseHandyExtension.min.js',
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;
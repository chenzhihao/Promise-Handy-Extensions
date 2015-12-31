var path = require('path');


config = {
    entry: [path.resolve(__dirname, 'index.js')],
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'bundle.js'
    },
    eslint: {
        configFile: '.eslintrc'
    },
    resolve: {
        alias: {}
    },
    module: {
        noParse: [],
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules|bower_components/}
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            }
        ]
    }
};

module.exports = config;
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/output',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080,
        contentBase: __dirname + '/output'
    },
    module:
    {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};
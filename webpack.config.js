var webpack = require('webpack');
var path = require('path'); // help us manipulate path names more easily

// set up webpack
module.exports = {
    devtool: 'inline-source-map', // gives line numbers in case there's errors, for debugging
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: { // webpack will output files here (not used for this project)
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: { // this is where webpack will look for files to bundle together
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js'] // webpack will expect these extensions
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // look for js/jsx files
                exclude: /node_modules/,
                // babel-loader for es6 index with presets. will use react syntax (jsx)
                // es2015 preset for additional features
                loader: ['babel-loader?presets[]=react,presets[]=es2015'] // loader(s) when referencing a list
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // hot reloading/live reloading
        new webpack.NoEmitOnErrorsPlugin() // prevents webpack from compiling if there are errors
    ]
}

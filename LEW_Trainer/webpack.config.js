const path              = require('path'),
      webpack           = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        main: './scripts/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'server/public/js'),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            CSS: path.resolve(__dirname, 'css')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'scripts')
                ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'css')
                ],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false', 'postcss-loader']
                })
            }
        ]

    },
    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,
    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 300,
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('../css/[name].css'),
        new HtmlWebpackPlugin({
            title: 'LEW Trainer',
            filename: '../index.html',
            template: 'scripts/index.ejs'
        }),
        new CopyWebpackPlugin([
            { from: 'fonts', to: '../fonts'}
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'user/run.js'),
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'js/user/[name]-[chunkhash].js',
        // publicPath: 'http://cdn.com/'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                exclude: path.resolve(__dirname, 'node_modules'),
                // include: path.resolve(__dirname, 'user'),
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    broswers: ['last 5 versions']
                                }), //CSS浏览器兼容
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    broswers: ['last 5 versions']
                                }), //CSS浏览器兼容
                            ]
                        }
                    },
                    {
                        loader: "less-loader",
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loaders:[
                    'url-loader?limit=20&name=assets/[name]-[hash:5].[ext]',
                    'image-webpack-loader'
                ]
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader:"url-loader" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'user.php',
            template: path.resolve(__dirname, 'user/index.php'),
            inject: 'body',
        }),
        new CleanWebpackPlugin(path.resolve(__dirname, 'out/js/user'))
    ]
    // resolve: {
    //     alias: {
    //         adsfad: path.resolve(__dirname, 'static/css'),
    //
    //     }
    // }
};


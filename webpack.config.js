// File: webpack.config.js
// Desc: module bundler for marine digital dashboard ui project structure
// Date: 8/18/2019
//................................................................................
console.log( "Mounting webpack.config.js..." );

const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve( __dirname + '/src/index.js' ),
    output: {
        path: __dirname + '/build',
        filename: 'bundle-fe.js'
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [ ':data-src' ],
                        //minimize: true,
                        //removeComments: true,
                        //collapseWhitespace: true
                    }
                }
            },
            {
                test: [ /\.json$/ ],
                exclude: /node_modules/,
                loader: 'json-loader',
                type: 'javascript/auto'
            },
            {
                test: [ /\.js$/, /\.es6$/, /\.jsx$/ ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015' ]
                }
            },
            // {
                // test: [/\.js$/],
                // exclude: /node_modules/,
                // loader: 'jshint-loader',
                // query: {
                    // presets: ['react', 'es2015']
                // }
            // },
            {
                test: [ /\.css$/, /\.scss$/, /\.sass$/ ],
                //loader: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ],
                loader: [ 'style-loader', 'css-loader','postcss-loader', 'sass-loader?modules' ],
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,                              
                loader: 'url-loader?limit=10000' // the url-loader uses data urls.
            },
            //{
                // test: /\.(jpe|jpg|png|gif|woff|woff2|eot|ttf|svg)(\?.*$|$)/,    
                // use: [
                    // {
                        // loader: 'file-loader', // the file-loader emits files.
                        // options: {
                            // emitFile: false
                        // }
                    // }
                // ]
            // },
            {
                test: /\.(jpe?g|png|gif|ico|woff|woff2|eot|ttf|svg|otf)$/i,
                loader: 'file-loader?name=[name].[ext]',    // the file-loader emits files.
            },
            {
                test: /\.(gif|png|jpe|ico?g|svg|ico|otf)$/i,
                use: [
                    // {
                        // loader: 'file-loader',
                        // options: {
                            // name:'[name].[ext]',
                            // emitFile: false
                        // }
                     // },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
                options: {
                    // defaults
                    removeTags: false,
                    removingTags: [],
                    warnTags: [],
                    removeSVGTagAttrs: false,
                    removingTagAttrs: [],
                    warnTagAttrs: [],
                    classPrefix: false,
                    idPrefix: false
                }
            },
        ]
    },
    resolve: {
        extensions: [ '.js', '.es6', '.jsx', 'json' ]
    },
    plugins: [
        HtmlWebpackPluginConfig = new HtmlWebpackPlugin( {
            template: path.resolve(__dirname + "/index.tpl.html"),
            favicon: 'src/assets/images/favicon.ico', 
        } ),
        new webpack.LoaderOptionsPlugin( {
            options: {
                postcss: [ 'autoprefixer' ]
            }
        } ),

        new webpack.BannerPlugin( "Carling Technologies::OctoPlex Production\n" + new Date() ),
        new webpack.HotModuleReplacementPlugin(),
    ],
    watch: false,
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};

// eof

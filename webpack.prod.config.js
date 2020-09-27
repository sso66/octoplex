// File: webpack.prod.config.js
// Desc: bundle for production phase
// Date: 8/1/2019
console.info( "Mounting webpack.prod.config.js..." );

const WebpackStripLoader = require( 'strip-loader' );
const devConfig = require( './webpack.config.js' );

const stripLoader = {
    test: [ /\.js$/, /\.es6$/, /\.jsx$/ ],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader( 'console.log' )
};

devConfig.module.rules.push( stripLoader );

module.exports = devConfig;

// eof

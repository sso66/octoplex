// File: postcss.config.js
// Desc:
// Date: 8/1/2019
console.log( "Mounting postcss.config.js..." );

module.exports = {
    plugins: { 
        'postcss-import': {},
        'postcss-preset-env': {
            browsers: ['last 2 versions', '>5%']
        },
    },
};

// eof

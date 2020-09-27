// nodejs/square.js
console.log( "Mounting square.js..." );

const multiply = require('./multiply');

module.exports = function(n) {
  return multiply(n, n);
};

// eof 

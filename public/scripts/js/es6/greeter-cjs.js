// greeter-cjs.js
console.log("Mounting greeter-cjs.js... <Root />");

// Applied Common JavaScript (CJS) Module Pattern
const config = require('../db/config.json');
console.log("Loading config.json...");

module.exports = function() {
  const greet = document.createElement('h1');
  greet.textContent = "Carling Technologies::OctoPlex Production";
  //greet.textContent = config.greetText;
  return greet;
};

// eof
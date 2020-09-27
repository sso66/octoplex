// File: server/readwords/readWords.js
// Note: subscriber/consumer node.js application
// Date: 02/28/2020
//..............................................................................
console.log( "Mounting readwords.js..." );

const censor = require('censorify');

console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and mad text."));  
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day."));

const content = document.querySelector("#content");
content.innerHTML = '<i>'+censor.getCensoredWords()+'</i><br />';
content.innerHTML += censor.censor("Some very sad, bad and mad text.");

// eof

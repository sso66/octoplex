// File: server/censorify/censortext.js
// Note: provider/publisher node packaged module
// Date: 02/28/2020
//..............................................................................
console.log( "Mounting censortext.js..." );

let censoredWords = ['sad', 'bad', 'mad'];
let customCensoredWords = [];

// constructor/initializer
function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    
    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }

    return inStr;
}

// accessor/getter
function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

// mutator/setter
function addCensoredWord(word) {
    customCensoredWords.push(word);
}

exports.censor = censor;
exports.getCensoredWords = getCensoredWords;
exports.addCensoredWord = addCensoredWord;

// exports = { censor, getCensoredWords, addCensoredWord };

// eof

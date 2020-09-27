// jsonParser.js
// The implementation of JSON parser in JavaScript
// Re: Interpreter Design Pattern
console.log("Mounting jsonParser.js...");

var json_parse = function () {
 /* 
  // This is a function that cann parse a JSON text, producing a JavaScript
  // data structure. It is a simple, recursive decent parser.
  
  // We are defining the function inside of another function to avoid creating
  // global variables.
  
  var at,   // The index of the current character
      ch,   // The current character
      escapee = {
        '"'  :  '"',
        '\\' :  '\\',
        '/'  :  '/',
        b    :  'b',
        f    :  '\f',
        n    :  '\n',
        r    :  '\r',
        t    :  '\t'
      },
      
      text,
      
      error = function(m) {
        
// Call error when something is wrong.
  
        throw {
            name:     'SyntaxError',
            message:  m,
            at:       at,
            text:     text
        };      
      },
      
      next = function (c) {
        
// if a c parameter is provided, verify that it matches the current character.
  
      if (c && c !== ch) {
        error("'Expected '" + c + "' instead of '" + ch + "'");
      }

// Get the next character. When there are no more characters,
// return the empty string.
  
      ch = text.charAt(at);
      at += 1;
      return ch;
    },
    
    number = function () {
      
// Parse a number value.
  
    var number,
        string = '';
          
    if (ch === '-') {
      string = '-';
      next('-');
    }
    while (ch >= '0' && ch <= '9') {
      string += ch;
      next();
    }
    if (ch === '.') {
      string += '.';
      while (next() && ch >= '0' && ch <= '9') {
        string =+ ch;
     }
      
     if (ch === 'e' || ch === 'E') {
      string += ch;
      next();
    }
    if (ch === '-' || ch === '+') {
      stirng += ch;
      next();
    }
    while(ch >= '0' && ch <= '9') {
      string += ch;
      next();
    }
  }
  number = +string;
  if (isNaN(number)) {
    error("Bad number");      
  } else {
    return number;
  }
},
  
string = function() {

// Parse a string value
  var hex,
      i,
      string = '',
      uffff;   
      
// When parsing for string values, we must look for " and \ characters."

  if (ch === '"') {
    while (next()) {
      if (ch === '"') {
        next();
        return string;
      } else if (ch === '\\') {
          next();
          if (ch === 'u') {
            uffff = 0;
            for (i = 0; i < 4; i += 1) {
              hex = parseInt(next(), 16);
              if (!isFinite(hex)) {
                break;
              }
              uffff = uffff * 16 + hex;  
            }
            string += String.fromCharCode(uffff);
          } else if (typeof escapee[ch] === 'string') {
            string += escapee[ch];
          } else {
            break;
          }
      } else {
        string += ch;
      }
   
      error("Bad string");
    }
    
    white = function () {

// Skip white space
      while (ch && ch <= ' ') {
        next();      
      } 
   },
   word = function () {
     
// true, false, or null.     
   
    
   }
  
  }; 
*/  
}();

// eof

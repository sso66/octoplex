// File: server/index.js
// Note: Main entry point for Node.js application
// Date: 2/28/2020
//..............................................................................
console.log( "Mounting server/index.js..." );

const _ = require( 'lodash' );
_.each( [ 1, 2, 3 ], function ( n ) {

  console.log( n ); //> 1, 2, 3

} );

const square = require( './nodejs/square' );
console.log( "square's map reduce method: " + square( 25 ) ); // => 625

const data = require( './nodejs/db.json' );
console.log( data );

const readwords = require( './readwords/readwords' );
console.log( readwords );

const root = document.querySelector( '#root' );
// ___ HTML text vs. String ___
root.innerHTML = '<b>' + "Here's what going on the server-side environment!" + '</b>';
// root.textContent = "Here's what going on in the server-side environment!\n";

require( './nodejs/indexedDB' );

// README: https://github.com/gaearon/react-transform-hmr
// require ('./react/hello-node.js'); // issue with Hot Module replacement API

// client/server communication pattern
// 1. Request/Reply
// 2. Subscribe/Publish
// 3. Pull/Push

// eof

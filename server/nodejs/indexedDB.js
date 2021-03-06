// File: server/nodejs/indexedDB.js
// Note: Main entry point for Node.js application: Browser I/O requirement
// Date: 2/25/2020
//..............................................................................
console.log( "Mounting indexedDB.js..." );

// This works on all devices/browsers, and uses IndexedDBShim as a final fallback
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open( "SampleDB", 1 );

// Create the schema
open.onupgradeneeded = function () {

    var db = open.result;
    var store = db.createObjectStore( "User", { keyPath: "id" } );
    var index = store.createIndex( "NameIndex", [ "name.last", "name.first" ] );

};

open.onsuccess = function () {

    // Start a new transaction
    var db = open.result;
    var tx = db.transaction( "User", "readwrite" );
    var store = tx.objectStore( "User" );
    var index = store.index( "NameIndex" );

    // Add some data
    store.put( { id: 12345, name: { first: "John", last: "Doe" }, age: 42 } );
    store.put( { id: 67890, name: { first: "Bob", last: "Smith" }, age: 35 } );

    // Query the data
    var getJohn = store.get( 12345 );
    var getBob = index.get( [ "Smith", "Bob" ] );

    getJohn.onsuccess = function () {

        console.log( "Name: " + getJohn.result.name.first ); // => "John"

    };

    getBob.onsuccess = function () {

        console.log( "Name: " + getBob.result.name.first ); // => "Bob"

    };

    // Close the db when the transaction is done
    tx.oncomplete = function () {

        db.close();

    };

};

// eof

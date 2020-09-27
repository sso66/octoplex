// src/redux/loggingMiddleware.js
console.log( "Mounting loggingMiddleware.js..." );

const loggingMiddleware = ( store ) = ( next ) => ( action ) => {

    // custom middleware
    console.log( `Redux Log: `, action )
    
    next( action );
}

export default loggingMiddleware;

// eof


// src/redux/BankAccount/bankStore.js
console.log( "Mounting bankStore.js..." );

import { createStore, applyMiddleware } from 'redux';
import bankReducer from './bankReducer';


// Applying a custom Middleware
//..............................................................................................
const logger = ( store ) => ( next ) => ( action ) => {
    console.log( 'dispatching:', action);
    
    return next( action );
}

// In sequence, define your Store. In a Redux application, the store owns the state and is 
// instantiated with the reducers that manipulates that state. Invoke Redux's createStore 
// method to create a store passing the reducer function.
//..............................................................................................
const bankStore = createStore( 
    bankReducer,
    applyMiddleware(logger)
);

export default bankStore;

// eof

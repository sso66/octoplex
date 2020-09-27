// src/redux/BankAccount/bankReducer.js
console.log( "Mounting bankReducer.js..." );

import { combineReducers } from 'redux';
import update from 'react-addons-update';

import types from './types';


// In sequence, define a reducer to be used in the Store. The reducer function will receive 
// the current store state and the dispatched action, and it should return the new state. 
//
// Notice that the state in Redux store must necessarily be treated as immutable - so be careful 
// using one of the following constructs to represent the state:
//
// 1. Single primitives (simple) value (a String, Boolean value or a number)
//
// 2. An Array or primitive (indexed) values (e.g. [ 1, 2, 3, 4 ])
//
// 3. An Object of primitive values (e.g. {name: 'cassio', age: 35 })
//
// 4. An Object with nested Objects that will be manipulated using React immutable helpers.
//
// 5. An immutable structure (using something like immutable.js library, for example).
// 
//..............................................................................................
/*
const initialState = {
    balance: 0,   
};

// Refactoring the BankAccountContainer...
//..............................................................................................
//const bankReducer = ( state, action ) => {
    
//..............................................................................................    
// Notice that Redux store always dispatches an INIT action. The fact that an initial action
// is always automatically dispatched can be used to set up the initial state of the store - 
// the need for you to manually dispatch an "create account" action. 
//
// Addtionally, in this initial dispatch, the store state is empty so we can refactor the 
// reducer function to always set up the initial value automaticall using ES6 default function
// parameter (Default function paramenters allow formal parameters to be initialized with 
// default values if no value or undefined is passed.).
//     
//..............................................................................................
//const bankReducer = ( state = initialState, action ) => {
    
    // When applying a Middleware: remove the "console.log"    
    //console.log( action ); // Temporarily logging all actions

     switch ( action.type ) {
        // Note that the CREATE_ACCOUNT case is also to be commented out below.
        // case types.CREATE_ACCOUNT:
        //  return initialState;

        case types.DEPOSIT_INTO_ACCOUNT:
            return { balance: state.balance + parseFloat( action.amount ) };

        case types.WITHDRAW_FROM_ACCOUNT:
            return { balance: state.balance - parseFloat( action.amount ) };
    
        default:
            return state;  
    }
};
*/

//..............................................................................................
// Notice that we're using the reducer to log all dispatched actions. It's not a good practice
// to use the log here, so it will remain temporarily here - this code will be refactored at 
// later steps.

// Most importantly, observe how a switch statement is used to make different transformations 
// on the state based on the dispatched action:
//
// a) When the CREATE_ACCOUNT action is diapatched, it returns the default initial state for a
//    new bank account (balance zero).
//
// b) If the actions DEPOSIT_INTO_ACCOUNT or WITHDRAW_FROM_ACCOUNT are dispatched, the function 
//    adds or substracts the amount value passed with the action and return a new, updated 
//    object.
//
// c) Finally, the reducer has a default case to prevent errors. If an unknown action is 
//    dispatched, it simply returns the old state again.


// Working with multiple reducers
//..............................................................................................
// To manage different and unrelated types of state in your application - state relating to UI,
// state relating to the data the user has entered or data that was fetch from the server...
// split your reducer into many different functions - each managing independent parts of the
// state.

// Redux provides a combineReducers helper function to turn multiple reducing functions in  a
// single reducer that you can pass to store.
//..............................................................................................
export const initialState = {
    initialBalance: 0,      // problem domain state object
    initialUI: {            // user interface state object
        showExchange: false,
    }        
};

// Note The previous bankReducer managed an object containing the balance numeric value. The
// following new balanceReducer, in turn manage the numeric value (state) directly
//..............................................................................................
export const balanceReducer = ( state = initialState.initialBalance, action ) => {
    switch ( action.type ) {
        case types.DEPOSIT_INTO_ACCOUNT:
            return state + parseFloat( action.amount );

        case types.WITHDRAW_FROM_ACCOUNT:
            return state - parseFloat( action.amount );
   
        default:
            return state;   
    }
}

const uiReducer = ( state = initialState.initialUI, action ) => {
    switch ( action.type ) {
        case types.TOGGLE_EXCHANGE:
            return update( state, { showExchange: { $apply: currentState => !currentState } } );

        default:
            return state;   
    }
}

// Combining problem domain reducer and user interface reducer: KVC/KVO paradigm
//
// The combineReducers function accepts an object. Each key on this object represent an entry
// on the centralized application state tree. Each reducer function reference to this object
// will manage only this entry and have no acccess to other values int the applicaton state -
// which helps in keeping the pieces isolated and organized.
//
// In plain English, the Bank applicaton will have two entries in the centeralized application
// state tree: pd and ui. The balanceReducer function is responsible for managing only the "pd"
// entry of the application state, while the uiReducers is responsible for the "ui" entry.
//
// Re: mapStateToProps method: key:value
//..............................................................................................
const bankReducer = combineReducers( { pd: balanceReducer, ui: uiReducer } ); 

export default bankReducer;

// eof

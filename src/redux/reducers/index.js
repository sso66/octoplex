// src/redux/reducers/index.js
console.log( "Mounting reducers/index.js..." );

import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'


export default combineReducers( {
    
    //counter,  // reducer
    //todos     // reducer
    
    // KVC: Key Value Coding
    todo: todos,    // reducer
    count: counter, // reducer
    
} )

// eof


// File: src/redux/rootReducer.js
// Desc: Redux Root Reducer
// Date: 11/1/2019
//..............................................................................
console.log( "Mounting redux/rootReducer.js..." );

import { combineReducers } from 'redux'

import * as datetime from '../reducers/datetimeReducer'
//import * as user from '../reducers/userReducer'
//import * as trafficlight from '../reducers/trafficlightReducer'


export const rootReducer = combineReducers( {
    // key/value coding here & key/value observing in "customer" React
    
    // siu: system interface unit - 2nd party object
    time_siu: datetime.datetimeReducer,
    
    // cbo: common business object interface - 3rd party object
    // user_cbo: user.userReducer,
    
    // gui: graphical user interface - 1st party object
    // light_gui: trafficlight.trafficlightReducer, // 
    
} )

export const initialState = {

    time_siu: datetime.initialState,
    //user_cbo: user.initialState,
    //light_gui: trafficlight.initialState,
}

export default rootReducer;

 // eof
 
 
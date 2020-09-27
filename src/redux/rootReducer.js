// File: src/redux/rootReducer.js
// Desc: create generic root reducer for React + Redux application
// Date: 8/1/2019
console.log( "Mounting redux/rootReducer.js..." );

 // "short-order-cooks": RECEIVERS
 //........................................

import { combineReducers } from 'redux'
import * as datetime from './datetimeReducer'
import * as user from './userReducer'
import * as trafficlight from './trafficlightReducer'


export const rootReducer = combineReducers( {
    // key: value coding here & observing in "customer" React components
    timeSIU: datetime.datetimeReducer,              // system interface uint
    userCBO: user.userReducer,                      // common business object interface
    lightGUI: trafficlight.trafficlightReducer,     // graphical user interface
    
} )

export const initialState = {

    time: datetime.initialState,
    user: user.initialState,
    light: trafficlight.initialState,
    
}

export default rootReducer;

 // eof
 
 
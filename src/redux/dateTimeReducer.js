// File: src/redux/datetimeReducer.js
// Desc: create action types for 1-state scenario
// Date: 8/1/2019
console.log( "Mounting redux/rootReducer.js..." );

 // "short-order-cook": RECEIVER
 //........................................
import types from './actionTypes';

export const initialState = {

    currentTime: new Date()

 }

export const datetimeReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {

        case types.FETCH_NEW_TIME:
            return {
                ...state, 
                currentTime: action.payload
            }

            default:
                return state;
        }
 }

 export default datetimeReducer;

 // eof
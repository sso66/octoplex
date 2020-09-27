// File: src/redux/reducers/datetimeReducer.js
// Desc: Redux Reducer - "short-order-cook": RECEIVER 
// Date: 11/4/2019
//..............................................................................
console.log( "Mounting redux/datetimeReducer.js..." );

import types from '../actions/actionTypes';

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
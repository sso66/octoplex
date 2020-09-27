// File: src/redux/userReducer.js
// Desc: create action types for 2-state scenario
// Date: 8/1/2019
console.log( "Mounting redux/userReducer.js..." );


// "short-order-cook": RECEIVER
//........................................
import * as types from './actionTypes';

export const initialState = {
    
    user: {},
    isLoggedIn: false,
    
};

export const userReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.LOGIN:
            return { 
                ...state, 
                user: action.payload, 
                isLoggedIn: true 
            };

        case types.LOGOUT:
            return { 
                ...state, 
                user: {username: 'octoplex', password: '12345'}, 
                isLoggedIn: false 
        };

        default:
            return state;

    }
    
};

export default userReducer;

// eof

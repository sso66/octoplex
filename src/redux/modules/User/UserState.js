// src/redux/modules/UserState.js
console.log( "Mounting UserState.js..." );

// Actions are POJOs - Object literals - that must have a type
// property to the type of action that is being performed. The 
// type property should be a string.
//...............................................................

export const types = {
    LOGIN: 'user login',
    LOGOUT: 'user logout',
};


// Set the intial state for the first time the reducer is 
// called (which redux expects us to return an initial state). 
//...............................................................
const initialState = {
    user: {},
    isLoggedIn: false
};


// The reducer function receives two arguments when it's called:
// 1. The state tree
// 2. The action which trigger a change
//...............................................................
export const reducer = ( state = initialState, action ) => {

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


// An action creater is a function that is expected to return 
// an action (type and payload as well as meta data, if any).
//...............................................................
export const actionCreators = {

    login: (user) => ( { 
        type: types.LOGIN, 
        payload: user 
    } ),
    
    logout: () => ( { 
        type: types.LOGOUT 
    } )
    
};

// eof


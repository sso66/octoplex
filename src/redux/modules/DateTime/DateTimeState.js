// File: src/redux/modules/DateTime/DateTimeState.js
// Desc:
// Date: 8/1/2019
console.log( "Mounting DateTimeState.js..." );

// Actions are POJOs - Object literals - that must have a type
// property to the type of action that is being performed. The 
// type property should be a string.
//...............................................................
export const types = {
    FETCH_NEW_TIME: 'fetch new time',
};

// Set the intial state for the first time the reducer is 
// called (which redux expects us to return an initial state). 
//...............................................................
const initialState = {
    currentTime: new Date(),
};

// The reducer function receives two arguments when it's called:
// 1. The state tree
// 2. The action which trigger a change
//...............................................................
export const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.FETCH_NEW_TIME:
            return { 
                ...state, 
                currentTime: action.payload 
            };
            
        default:
            return state;

    }
    
};

// An action creater is a function that is expected to  return 
// an action (type and payload as well as meta data,if any).
//...............................................................
export const actionCreators = {

    fetchNewTime: () => ( { 
        type: types.FETCH_NEW_TIME, 
        payload: new Date() 
    } )
    
};


// eof


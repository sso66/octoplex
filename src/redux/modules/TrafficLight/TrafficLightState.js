// src/redux/modules/TrafficLightState.js
console.log( "Mounting TrafficLightState.js..." );

// Actions are POJOs - Object literals - that must have a type
// property to the type of action that is being performed. The 
// type property should be a string.
//...............................................................
export const types = {
    STOP: 'stop',
    CAUTION: 'caution',
    GO: 'go'
};

// Set the intial state for the first time the reducer is 
// called (which redux expects us to return an initial state). 
//...............................................................
const initialState = {
    isLightOn: false
};

// The reducer function receives two arguments when it's called:
// 1. The state tree
// 2. The action which trigger a change
//...............................................................
export const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.STOP:
            return { 
                ...state, 
                isLightOn: true 
            };

        case types.CAUTION:
            return { 
                ...state, 
                isLightOn: true        };

        case types.GO:
            return { 
                ...state, 
                isLightOn: true 
        };

        default:
            return state;

    }
};

// An action creater is a function that is expected to return
// an action (type and payload as well as meta data, if any).
//...............................................................
export const actionCreators = {

    stopAction: () => ( { 
        type: types.STOP, 
        payload: "", 
    } ),
    
    cautionAction: () => ( { 
        type: types.CAUTION, 
        payload: "", 
    } ),
    
    goAction: () => ( { 
        type: types.GO, 
        payload: "",  
    } ),

};

// eof

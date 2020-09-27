// File: src/redux/trafficlightReducer.js
// Desc: create action types for 3-state scenario
// Date: 8/1/2019
console.log( "Mounting redux/trafficlightReducer.js..." );

import * as types from './actionTypes';

const initialState = {
    isLightOn: false
};

export const trafficlightReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.STOP:
            return { 
                state, 
                isLightOn: true 
            };

        case types.CAUTION:
            return { 
                state, 
                isLightOn: true        };

        case types.GO:
            return { 
                state, 
                isLightOn: true 
        };

        default:
            return state;

    }
};

export default trafficlightReducer;

// eof

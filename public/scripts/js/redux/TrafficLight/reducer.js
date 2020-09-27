// TrafficLight/reducers.js
console.log("Mounting TrafficLight/reducers.js...");

import * as types from './types';

const initialState = {
    trafficLight: "STOP"
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.STOP:
            return { state, trafficLight: action.payload};
        case types.CAUTION:
            return { state, trafficLight: action.payload};
        case types.GO:
            return { state, trafficLight: action.payload};
        default:
            return state;
    }
}
// eof

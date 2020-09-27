// src/redux/AirCheap/reducers/airports.js
console.log( "Mounting reducers/airports.js..." );

import { RECEIVE_AIRPORTS } from '../types';


const airports = ( state = [], action ) => {
    switch ( action.type ){
        case RECEIVE_AIRPORTS:
            return action.airports;
            
        default:
            return state;            
    }
}

export default airports;

// eof


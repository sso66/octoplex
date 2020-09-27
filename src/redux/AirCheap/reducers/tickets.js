// src/redux/AirCheap/reducers/tickets.js
console.log( "Mounting reducers/tickets.js..." );

import { REQUEST_TICKETS, RECEIVE_TICKETS } from '../types';


const tickets = ( state = [], action ) => {
    switch ( action.type ) {
        case REQUEST_TICKETS:
            return [];
        
        case RECEIVE_TICKETS:
            return action.tickets;
            
        default:
            return state;
    }
}

export default tickets;

// eof

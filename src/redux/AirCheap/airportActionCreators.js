// src/redux/AirCheap/airportActionCreators.js
console.log( "Mounting airportActionCreators.js..." );

//..............................................................................................
//  Create an API helper for dealing with "airport" and "ticket" fetching: Creating separate
//  helper module 
//..............................................................................................


import { REQUEST_AIRPORTS, RECEIVE_AIRPORTS, CHOOSE_AIRPORT, 
         REQUEST_TICKETS, RECEIVE_TICKETS } from './types';
import AirCheapAPI from './AirCheapAPI';


let airportActionCreators = {
    // Thunk Action Creator: Asyn Operations
    fetchAirports( origin, destination ) {
        return ( dispatch ) => {
            dispatch( { type: REQUEST_AIRPORTS } );
            AirCheapAPI.fetchAirports().then (
                (airports) => dispatch( { type: RECEIVE_AIRPORTS, success: true, airports } ),
                (error) => dispatch( { type: RECEIVE_AIRPORTS, succes: false } )
            )
        }
    },

    fetchTickets( origin, destination ) {
        return ( dispatch ) => {
            dispatch( { type: REQUEST_TICKETS } );            
            AirCheapAPI.fetchTickets( origin, destination ).then (
                ( tickets) => dispatch( { type: RECEIVE_TICKETS, success: true, tickets } ),
                ( error ) => dispatch( { type: RECEIVE_TICKETS, success: false } )
            )
        }
    },

    // Regular Action Creator: SynC Operations
    chooseAirport( target, airport ) {
        return { 
            type: CHOOSE_AIRPORT,
            target: target,
            code: airport ? airport.value : ''
        }
    },
}

export default airportActionCreators;

// eof

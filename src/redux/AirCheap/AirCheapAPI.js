// src/redux/AirCheap/AirCheapAPI.js
console.log( "Mounting AirCheapAPI.js... " );

//..............................................................................................
//  Create an API helper for dealing with "airport" and "ticket" fetching: Creating separate
//  helper module 
//..............................................................................................

import 'whatwg-fetch';

let AirCheapAPI = {
    fetchAirports() {
        return fetch( 'https://aircheapapi.pro-react.com/airports' )
            .then( ( response ) => response.json() );
    },
    
    fetchTickets( origin, destination ) {
        return fetch( `https://aircheapapi.pro-react/tickets?origin=${origin}&destination=${destination}` )
            .then( ( response ) => response.json());
    }
}

export default AirCheapAPI;

// eof

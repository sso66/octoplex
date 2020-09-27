// src/redux/AirCheap/types.js
console.log( "Mounting AirCheap types.js..." );

//..............................................................................................
//  When developing an applications in a real world scenario, you would probably start with
//  types.js with few constants and increase them as needed:
//
//  - REQUEST_AIRPORTS to name the action we will dispatch as the application starts to fetch
//    all the airport. And since this will be an async operation, we will will also create the 
//    RECEIVE_AIRPORTS constant to represent the success/error on the operation;
//
//  - CHOOSE_AIRPORT to name a sychcronous action of the user selection for an airport (as both
//    origin or destination);
//
//  - Finally, will have REQUEST_TICKETS constant to name the action that we will dispatch when 
//    both origin and destination are selected. This will be an asynchronous data fetching 
//    operation, so we will also need a constant to represent success and, eventually, an error 
//    on the fetch operation: RECEIVE_TICKETS.
//..............................................................................................

export default {
    REQUEST_AIRPORTS: 'request airports',
    RECEIVE_AIRPORTS: 'receive airports',
    CHOOSE_AIRPORT: 'choose airport',
    
    REQUEST_TICKETS: 'request tickets',
    RECEIVE_TICKETS: 'receive tickets',  
};


 
// eof

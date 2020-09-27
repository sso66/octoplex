// src/components/AirCheap/TicketItem.jsx
console.log( "Mounting AirCheap/TicketItem.jsx.. <TickItem />");

import React, { Component, PropTypes } from 'react';

//..............................................................................................
// The ticket service return a JSON structure that looks like this (for each ticket):
// 
//  {
//      "id": "fc704c16fd79",
//      "company": "US Airlines",
//      "points": 25000,
//      "duration": 590,
//      "segment": [
//          {
//              "duration": "590",
//              "departureTime": "2019-05-25T17:45:00.000Z",
//              "arrivalTime": "2019-05-26T03:35:00.000Z",
//              "origin": "GRU",
//              "destination": "JFK"
//          }     
//      ]        
//  }
//..............................................................................................

// Default date configuration
const dateConfig = {
    
}

class TicketItem extends Component {
    
    render() {
        return (
            <div className="ticket">
                <span className="ticket-company"> ticket-company </span>
                <span className="ticket-location">ticket-location:
                    <strong> ticket.segment[0].origin </strong>
                    <small> departureTime </small>
                </span>
                <span className="ticket-separator">
                    &#8680;
                </span>
                <span className="ticket-location"> ticket-location:
                    <strong> ticket.segment[ticket.segment.length-1].destination </strong>
                    <small> arrivalTime </small>
                </span>
                <span className="ticket-connection">
                    stops
                </span>
                <span className="ticket-points">
                    <button className="">ticket.points points</button>
                </span>                    
            </div>
        )            
    }
}

export default TicketItem;

// eof

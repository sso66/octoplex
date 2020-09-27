// Stoplight/buttons.js
console.log("Mounting buttons.js...");

// < UIViewDelegate >
import React, { Component } from 'react';
import { goAction, cautionAction, stopAction } from './actions'; // constants

export const Buttons = ({ 
    store 
}) => {
    const state = store.getstate();
    
    return (
        <div style={textAlign: 'center'}>
            <button 
                //onClick=""
                onClick={() => {store.dispatch(goAction)}}
                //disabled=""
                disabled={state == 'GO' || state == 'CAUTION'}
                //style=""
                style={{cursor: 'pointer'}}
            >
                Go
            </button>
            
            <button 
                //onClick=""
                onClick={() => {store.dispatch(cautionAction)}}
                //disabled=""
                disabled={state == 'CAUTION' || state == 'STOP'}
                //style=""
                style={{cursor: 'pointer'}}
            >
                Caution
            </button>

            
            <button 
                //onClick=""
                onClick={() => {store.dispatch(stopAction)}}
                //disabled=""
                disabled={state == 'STOP' || state == 'GO'}
                //style=""
                style={{cursor: 'pointer'}}
            >
                Stop
            </button>

        </div>
    )
}

// eof  

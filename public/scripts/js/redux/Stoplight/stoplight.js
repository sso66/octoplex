// Stoplight/stoplight.js
console.log("Mounting stoplight.js...");

// < UIViewDelegate >
import React, { Component } from 'react';

const stopColor = (state) => {
    return state == 'STOP' ? 'red' : 'white';
}

const cautionColor = (state) => {
    return state == 'CAUTION' ? '#ff0' : 'white';
}

const goColor = (state) => {
    return state == 'GO' ? 'rgb(39,232,51)' : 'white';
}

export const Stoplight = ({ 
    store 
}) => {
    const state = store.getstate();
    
    return (
        <div style={textAlign: 'center'}>
            <svg height='170'>
                <circle 
                    cx='145' cy='60' r=15 
                    //fill=''
                    fill={stopColor(state)}
                    stroke='black'
                />

                <circle 
                    cx='145' cy='100' r=15 
                    //fill=''
                    fill={cautionColor(state)}
                    stroke='black'
                />

                <circle 
                    cx='145' cy='140' r=15 
                    //fill=''
                    fill={goColor(state)}
                    stroke='black'
                />
            </svg>
        </div>
    )
}

// Stoplight, which is React stateless functional component, renders SVG circles 
// whose color depends on the application state. The componen obtains the state
// from the store's getState() method and subsequently uses one of three methods
// to turn the state into a color.

// eof 

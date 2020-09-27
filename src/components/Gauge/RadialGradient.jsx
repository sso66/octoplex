// RadialGradient.jsx
console.log("Mounting RadialGradient.jsx... <RadialGradient />")

import React from 'react'

const RadialGradient = props => (
    <svg viewBox="0 0 10 10">
        <defs>
            <radialGradient 
                id="radialGradient" 
                spreadMethod="reflect"
                cx="50%"
                cy="75%"
                fx="50%"
                fy="50%"
            >
                <stop className="stop1" offset="30%"  stopColor="gold" />
                <stop className="stop2" offset="60%" stopColor="white" /> 
                <stop className="stop3" offset="95%" stopColor="green" />
            </radialGradient>
        </defs>
    </svg>        
  )

export default RadialGradient;

// eof

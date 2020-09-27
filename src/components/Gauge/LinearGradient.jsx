// LinearGradient.jsx
console.log("Mounting LinearGradient.jsx... <LinearGradient />")

import React from 'react'

const LinearGradient = props => (
    <svg>
        <defs>
            <linearGradient id="linearGradient">
                <stop className="stop1" offset="5%" stopColor="gold" />
                <stop className="stop2" offset="95%" stopColor="green" />
            </linearGradient>
        </defs>
    </svg>        
  )

export default LinearGradient;

// eof

// ColorMatrixFilter.jsx
console.log("Mounting ColorMatrixFilter.jsx... <ColorMatrixFilter />")

import React from 'react'

const ColorMatrixFilter = props => (
    <svg>
        <defs>
            <filter id="glow">
                <feColorMatrix 
                    type="matrix"
                    values=
                    "
                    0 0 0 0 0
                    0 0 0 0.9 0
                    0 0 0 0.9 0
                    0 0 0 0 1
                    "
                />
        
                <feGaussianBlur 
                    stdDeviation="3.5"
                    result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
    </svg>
)

export default ColorMatrixFilter;

// eof

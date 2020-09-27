// IFilter.jsx
// Common SVG Filter Interface
console.log("Mounting IFilter.jsx... <IBlurFilter />");

import React from 'react'

const IFilter = props => (
    <svg>
        <defs>
            <filter id="blur">
                <feGaussianBlur 
                    in="SourceGraphic"
                    stdDeviation={20} 
                    result="blur"
                />
           
                <feOffset 
                    in="blur"
                    dx="22"
                    dy="22"
                    result="offsetBlur" 
                />
                <feMerge>
                    <feMergeNode in="offsetBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
         </defs>
    </svg>
)

export default IFilter;

// eof 

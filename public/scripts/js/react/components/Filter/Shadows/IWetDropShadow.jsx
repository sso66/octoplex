// IWetDropShadow.jsx
// Re: Filters
import React from 'react';

const IWetDropShadow = props => (
    <svg {...props}>
        <defs>
          <filter id="drop-shadow">
            <feGaussianBlur 
                in="SourceAlpha" 
                stdDeviation={2} />
          </filter>
        </defs>
    </svg>
)

export default IWetDropShadow;

// eof 

// IDryDropShadow.jsx
// Re: Filters
import React from 'react';

const IDryDropShadow = props => (
    <svg {...props}>
        <defs>
          <filter id="drop-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation={2} result="blur" />
            <feOffset in="blur" dx={4} dy={4} result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
    </svg>
)

export default IDryDropShadow;

// eof 

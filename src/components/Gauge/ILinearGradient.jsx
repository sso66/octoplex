// ILinearGradient.jsx
//----------------------------------------------------------------------
// Re: Archieving 3D Effects with SVG 
// Virtual lighting using gradients
//----------------------------------------------------------------------
console.log("Mounting ILinearGradient.jsx... <ILinearGradient />")

import React from 'react';

const ILinearGradient = props => (
    <svg {...props}>
        <defs>
            <linearGradient
                id="button-surface"
                gradientUnits="objectBoundingBox"
                x1={1}
                x2={1}
                y1={0}
                y2={1}
            >
                <stop stopColor="#434343" offset={0} />
                <stop stopColor="#000000" offset={0.67} />
            </linearGradient>
            
            <linearGradient
                id="virtual-light"
                gradientUnits="objectBoundingBox"
                x1={0}
                x2={0}
                y1={0}
                y2={1}
            >
                <stop stopColor="#eee" offset={0} stopOpacity={1} />
                <stop stopColor="#eee" offset={0.4} stopOpacity={0} />
            </linearGradient>
        </defs>
    </svg>
)

export default ILinearGradient;

// eof

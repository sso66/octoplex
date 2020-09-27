// IRadialGradient.jsx
//----------------------------------------------------------------------
// Re: Archieving 3D Effects with SVG 
// Virtual lighting using gradients
//----------------------------------------------------------------------
console.log("Mounting IRadialGradient.jsx... <IRadialGradient />")

import React from 'react';

const IRadialGradient = props => (
    <svg {...props}>
        <defs>
            <radialGradient
                id="button-surface"
                gradientUnits="objectBoundingBox"
                x1={1}
                x2={1}
                y1={0}
                y2={1}
            >
                <stop stopColor="#434343" offset={0} />
                <stop stopColor="#000000" offset={0.67} />
            </radialGradient>
            
            <radialGradient
                id="virtual-light"
                gradientUnits="objectBoundingBox"
                x1={0}
                x2={0}
                y1={0}
                y2={1}
            >
                <stop stopColor="#eee" offset={0} stopOpacity={1} />
                <stop stopColor="#eee" offset={0.4} stopOpacity={0} />
            </radialGradient>
        </defs>
    </svg>
)

export default IRadialGradient;

// eof

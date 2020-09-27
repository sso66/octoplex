// GradientButton.jsx
//----------------------------------------------------------------------
// Re: Archieving 3D Effects with SVG 
// Virtual lighting using gradients
//----------------------------------------------------------------------
console.log( "Mounting GradientButton.jsx... <GradientButton />" );

import React from 'react';
import ILinearGradient from './ILinearGradient';

const GradientButton = props => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        transform="scale(0.8)"
        {...props}
    >
        // linear gradient interface 
        <ILinearGradient />
        
        
        <g transform={props.transform}>
            // shape object content    
            <rect
                x={10}
                y={10}
                rx={15}
                ry={15}
                width={180}
                height={80}
                
                fill="url(#button-surface)"
                stroke="#363636"
            />
            <text
                x={30}
                y={55}
                dy={-8}
                fill="white"
                stroke="none"
                fontFamily="sans-serif"
                fontSize={20}
                fontWeight={500}
            >
                <tspan x="50" y="50" fontSize="16">{props.title}</tspan>
                <tspan x="50" y="57" display="" fontSize="14">{props.value}</tspan>
                <tspan x="50" y="69" display="" fontSize="12">{props.name}</tspan>
                
                
            </text>
            
            // virtual lighting effect
            <rect
                x={12}
                y={12}
                rx={15}
                ry={15}
                width={176}
                height={76}
                fill="url(#virtual-light)"
                stroke="url(#octoplex-filter)"
                stroke="#fff"
                strokeOpacity={0.4}
            />
        </g>
  </svg>
)

export default GradientButton;

// eof 

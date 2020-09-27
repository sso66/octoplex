// N2KRockerSwitchButton.jsx
console.log( "Mounting N2KButton.jsx... <N2KRockerSwitchButton />" );

import React from 'react'
import IRadialGradient from './IRadialGradient';

const SVGR = props => (
    <svg
        width="100%"
        height="100%"
        transform=""
        {...props}
  >
          // bounding box
        <rect 
            display=""
            x="3%"
            y="0"
            width="28%"
            height="25%"
            stroke="none"
            fill="none"
        />
        <svg
            x="3%"
            y="0"
            width="28%"
            height="25%"
            viewBox="0 50 100 100"
            preserveAspectRatio={"xMidYMin meet"}
        >
          <rect
            fill="#000"
            height="40%"
            stroke="silver"
            width="97%"
            x="8%"
            y="106%"
          />
          
          <text
            fill="white"
            fontFamily="sans-serif"
            fontSize={14}
            stroke="white"
            strokeWidth={0}
            textAnchor="middle"
            x="55%"
            y="100%"
          >
            Blige Pump #1
          </text>
          <text
            fill="tomato"
            fontFamily="sans-serif"
            fontSize={14}
            fontWeight="bold"
            stroke="tomato"
            strokeWidth={0}
            textAnchor="middle"
            x="30%"
            y="130%"
          >
            OFF
          </text>
          
          <text
            fill="lightgreen"
            fontFamily="sans-serif"
            fontSize={14}
            fontWeight="bold"
            stroke="lightgreen"
            strokeWidth={0}
            textAnchor="middle"
            x="86%"
            y="130%"
          >
            ON
        </text>
        
        <circle
            cx="60%"
            cy="126%"
            fill="url(#button-surface)"
            fillOpacity="0.9"
            r="10%"
            stroke="snow"
            strokeWidth={2}
          />

        <circle
            cx="60"
            cy="126%"
            fill="url(#virtual-light)"
            fillOpacity="0.9"
            r="8%"
            stroke="snow"
            strokeWidth={2}
          />
          
        </svg>            
    </svg>
)

export default SVGR

// eof 

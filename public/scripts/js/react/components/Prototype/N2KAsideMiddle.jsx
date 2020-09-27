// N2KAsideMiddle.jsx
console.log("Mounting SVG... <SVG />");

import React from 'react';

const SVG = (props, {
    width = '100%',
    height = '100%',
    viewBox = '0 0 400 400',
    stroke = "gray",
    fill = "none",
    style = {
        backgroundColor: "black", 
        padding: "5px", 
        border: "4px double #333"
    },
    className = '',

}) =>
    // nested systems of coordinates
    <svg
        width={width}
        height={height}
        viewBox={viewBox}
        style={style}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >     
        // bounding box: n2k-aside-middle
        <rect
            display=""
            x="1%"
            y="70%"
            width="98%"
            height="10%"
            stroke={stroke}
            strokeOpacity="0.3"
            fill={fill}
        />
        
        // viewport: n2k-aside-middle
        <svg
            x="1%"
            y="70%"
            width="98%"
            height="10%"
            viewBox="0 0 100 100"
            preserveAspectRatio={"xMidYMid meet"}           
        >
            // placeholder
            <text
                display="" 
                x="48%" 
                y="80%" 
                textAnchor="middle"
                stroke="none"
                fill="white" 
                fontFamily="$n2k-verdana, sans-serif"
                fontSize="42"
            >
                <tspan>Since March-26-2019 12:00:00</tspan>
            </text>
        </svg>
    </svg>; 
  
export default SVG;

// eof
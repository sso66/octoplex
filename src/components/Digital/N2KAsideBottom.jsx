// N2KAsideBottom.jsx
console.log("Mounting SVG... <SVG />");

import React from 'react';

const SVG = (props, {
    width = '100%',
    height = '100%',
    viewBox = '0 0 200 200',
    stroke = "none",
    fill = "none",
    style = {
        backgroundColor: "#abc", 
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
        // bounding box: n2k-aside-bottom
        <rect
            display=""
            x="2%"
            y="70%"
            width="96%"
            height="10%"
            stroke={stroke}
            fill={fill}
        />
         // bounding box: n2k-aside-bottom
        <rect
            display=""
            x="2%"
            y="72%"
            width="96%"
            height="10%"
            stroke={stroke}
            fill={fill}
        />
        // viewport: n2k-aside-bottom
        <svg
            x="2%"
            y="72%"
            width="96%"
            height="10%"
            viewBox="0 0 100 100"
            preserveAspectRatio={"xMidYMid meet"}           
        >
            // placeholder
            <circle
                display=""
                id="led"
                cx="50%"
                cy="50%"
                r="25"
                fill={props.fill}
                stroke="gray"
                strokeWidth={8}
            />
        </svg>    
    </svg>; 
  
export default SVG;

// eof
// N2KAsideLeft.jsx
console.log("Mounting SVG... <SVG />");

import React, {Component } from 'react';

const SVG = (props, {
    width = '100%',
    height = '100%',
    viewBox = '0 0 400 400',
    stroke = "red",
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
        // bounding box: n2k-aside-right
        <rect
            display=""
            x="78%"
            y="16%"
            width="19%"
            height="82%"
            stroke={stroke}
            fill={fill}
        />

        // viewport: n2k-aside-right
        <svg
            x="78%"
            y="16%"
            width="19%"
            height="82%"
            viewBox="0 0 100 100"
            preserveAspectRatio={"xMinYMax meet"}
        >
            <g 
                display=""
                id="clear-button">
                <rect
                    x="5%"
                    y="50%"
                    rx="5"
                    width="90%"
                    height="45%"
                    stroke="silver"
                    strokeWidth="2"
                    fill="#666"
                />
                <text
                    x="48%" 
                    y="80%" 
                    textAnchor="middle"
                    stroke=""
                    fill="#fff" 
                    fontFamily={'sans-serif'}
                    fontSize="24"
                >
                    <tspan>Display</tspan>
                </text>
            </g>
        </svg>
    </svg>; 
  
export default SVG;

// eof
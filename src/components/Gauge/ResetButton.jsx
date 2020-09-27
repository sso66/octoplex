// ResetButton.jsx
console.log("Mounting ResetButton.jsx ... <ResetButton />");

import React, {Component } from 'react';

const ResetButton = (props, {
    width='100%',
    height='100%',
    viewBox='0 0 400 400',
    preserveAspectRatio='xMidYMid meet',
    stroke='rgba(255, 255, 255, 1',
    fill='rgba(255, 255, 255, 0)',
    style={ 
        backgroundColor: "transparent",
        margin: "auto", 
        border: "1px dotted #00f",
        padding: "5px",
    },
    className=`svg-icon ${className || ""}`,
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
        // bounding box: 
        <rect
            display=""
            x="3%"
            y="16%"
            width="19%"
            height="82%"
            stroke={stroke}
            fill={fill}
        />
        // viewport:
        <svg
            x="3%"
            y="16%"
            width="19%"
            height="82%"
            viewBox="0 0 100 100"
            preserveAspectRatio={"xMinYMax meet"}
        >
            <g 
                display=""
                className="reset-button">
                <rect
                    x="10%"
                    y="50%"
                    rx="5"
                    width="80%"
                    height="40%"
                    stroke="silver"
                    strokeWidth="2"
                    fill="#666"
                />
                <text
                    x="48%" 
                    y="75%" 
                    textAnchor="middle"
                    stroke="none"
                    fill="#fff" 
                    fontFamily="Montserrat, Arial, sans-serif"
                    fontSize="18"
                    fontWeight="600"
                >
                    <tspan>Reset</tspan>
                </text>
            </g>
        </svg>
    </svg>
  
export default ResetButton;

// eof
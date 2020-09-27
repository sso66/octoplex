// LEDIndicator.jsx
console.log("Mounting LEDIndicator... <LEDIndicator />");

import React from 'react';

const LEDIndicator = (props, {
    width='100%',
    height='100%',
    viewBox='0 0 400 400',
    preserveAspectRatio='xMidYMid meet',
    stroke='rgba(255, 255, 255, 0',
    fill='rgba(255, 255, 255, 0)',
    style={ 
        backgroundColor: "transparent",
        margin: "auto", 
        border: "1px dotted #00f",
        padding: "5px",
    },
    className=`svg-icon ${className || ""}`,
}) => (
    <svg 
        width={width} 
        height={height}
        viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}
        style={style}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        // bounding box: 
        <rect
            display=""
            x="1%"
            y="76%"
            width="98%"
            height="8%"
            stroke={stroke}
            fill={fill}
        />
        
        // viewport:
        <svg
            x="1%"
            y="76%"
            width="98%"
            height="8%"
            viewBox="0 0 36 36"
            preserveAspectRatio={"xMidYMid meet"} 
        >
            // placeholder
            <circle
                display=""
                className="led"
                cx="50%"
                cy="50%"
                r="25%"
                fill={props.color}
                stroke="gray"
                strokeWidth={3}
            />
        </svg>
    </svg> 
)  
export default LEDIndicator;

// eof
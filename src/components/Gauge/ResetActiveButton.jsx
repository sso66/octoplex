// ResetActiveButton.jsx
console.log( "Mounting N2KButton.jsx... <ResetActiveButton />" );

import React from 'react';
import ILinearGradient from './ILinearGradient';

const ResetActiveButton = (props, {
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
}) => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        transform=""
        {...props}
    >
        // linear gradient interface 
        <ILinearGradient />
        
        // bounding box: 
        <rect
            display=""
            x="3%"
            y="16%"
            width="19%"
            height="82%"
            stroke="none"
            fill="none"
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
            <g id="active-button">
                // shape object content
                <rect
                    x="5%"
                    y="45%"
                    rx="5%"
                    ry="5%"
                    width="90%"
                    height="45%"
                    stroke="#363636"
                    strokeWidth="2"
                    fill="url(#button-surface)"
                />
                <text
                    x="48%" 
                    y="74%" 
                    textAnchor="middle"
                    stroke="none"
                    fill="#fff" 
                    fontFamily="Montserrat, Arial, sans-serif"
                    fontSize="24"
                    fontWeight="600"
                    
                >
                    <tspan>{props.title}</tspan>
                </text>
                
                // virtual lighting effect
                <rect display=""
                    x="6%"
                    y="45%"
                    rx="5%"
                    ry="5%"
                    width="88%"
                    height="43%"
                    fill="url(#virtual-light)"
                    stroke="#fff"
                    strokeOpacity={0.4}
                />
            </g>
        </svg>
    </svg>
)    

export default ResetActiveButton;

// eof 

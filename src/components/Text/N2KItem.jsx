// N2KItem.jsx
console.log("Mounting N2KItem... <N2KItem />");

import React from 'react';

const N2KItem = (props, {
    width='100%',
    height='100%',
    viewBox='0 0 400 400',
    preserveAspectRatio='xMidYMid meet',
    //stroke='rgba(255, 255, 255, 0.3)',
    stroke="url(#linearGradient)",
    fill='rgba(255, 255, 255, 0)',
    //fill="url(#linearGradient)",
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
        // bounding box: svg-header
        <rect
            display=""
            x="1%"
            y="1%" 
            width="98%" 
            height="14%" 
            stroke={stroke} 
            fill={fill}
        />
        // viewport: svg-header
        <svg
            x="1%"
            y="1%" 
            width="98%" 
            height="14%" 
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"                
        >

            <text
                display="" 
                x="50%" 
                y="65%"
                stroke="#fff"
                fill="#fff" 
                textAnchor="middle"
                fontFamily="Montserrat, Arial, sans-serif"
                //fontFamily="serif"
                //fontFamily="monospace"
                //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                fontSize="48"
                fontWeight="800"
            >
                <tspan>{props.title}</tspan>
            </text>
        </svg>  
        // bounding box: svg-main-content
        <rect
            display=""
            x="1%"
            y="16%"
            width="98%"
            height="68%"
            stroke={stroke}
            fill={fill}
            
        />
        // viewport: svg-main-content
        <svg
            x="1%"
            y="16%"
            width="98%"
            height="68%"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
        >
            <text
                display="" 
                x="50%" 
                y="60%" 
                textAnchor="middle"
                stroke="#fff"
                fill="#fff"
                fontFamily="Montserrat, Arial, sans-serif"
                //fontFamily="serif"
                //fontFamily="monospace"
                //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                fontSize="30"
                //style={{filter:"url(#glow)"}}
            >
                <tspan>{props.value}</tspan>
            </text>
        </svg>
        // bounding box: svg-footer
        <rect
            display=""
            x="1%"
            y="85%"
            width="98%"
            height="14%"
            stroke={stroke}
            fill={fill}
        />
        // viewport: svg-footer
        <svg
            x="1%"
            y="85%"
            width="98%"
            height="14%"
            viewBox="0 0 100 100"        
            preserveAspectRatio={"xMaxYMid meet"}           
        >
            <text
                display="" 
                x="60%" 
                y="65%" 
                textAnchor="end"
                stroke="none"
                fill="#fff"
                fontFamily="Montserrat, Arial, sans-serif"
                //fontFamily="serif"
                //fontFamily="monospace"
                //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                fontSize="38"
                fontWeight="600"
                //style={{filter:"url(#glow)"}}
            >
                <tspan>{props.name}</tspan>
            </text>
        </svg>

        // border box
        <g display="none">   
            <rect
                display=""        
                x="2%"
                y="17%"
                rx="3"
                width="96%"
                height="66%"
                stroke="gray"
                strokeWidth={2}
                strokeOpacity="0.5"
                fill="url('#linearGradient')"
                fillOpacity="0.2"
            />
            // content box 
            <rect
                display=""
                x="5%"
                y="29%"
                rx="2"
                width="90%"
                height="42%"
                stroke="#333"
                strokeWidth={1}
                strokeOpacity="0.5"
                fill="url('#linearGradient')"
                fillOpacity="0.2"            
            />
        </g>
    
        <g display="none">        
            // border ring 
            <circle
                display=""
                cx="50%"
                cy="50%"
                r="140"
                stroke="gray"
                strokeWidth={5}
                strokeOpacity="1"
                fill="#000"
                fillOpacity="0.2"
            />
            // content ring
            <circle
                display=""
                cx="50%"
                cy="50%"
                r="120"
                stroke="#333"
                strokeWidth={1}
                strokeOpacity="0.5"
                fill="#fff"
                fillOpacity="0.2"            
            />
        </g>  
    </svg> 
)

export default N2KItem;

// eof

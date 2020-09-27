// N2KAsideTop.jsx
console.log("Mounting SVG... <SVG />");

import React from 'react';
import ColorMatrixFilter from './ColorMatrixFilter'

const SVG = (props, {
    width = '100%',
    height = '100%',
    viewBox = '0 0 200 200',
    stroke = "",
    fill = "",
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
        <ColorMatrixFilter />
        // bounding box: n2k-aside-top
        <rect
            display=""
            x="35%"
            y="41%"
            width="29%"
            height="3%"
            stroke={stroke}
            fill={fill}
        />
        
        // viewport: n2k-aside-top
        <svg
            x="35%"
            y="41%"
            width="29%"
            height="3%"
            viewBox="0 0 36 36"
            preserveAspectRatio={"xMidYMid meet"}           
        >
            // placeholder
            <text
                display="" 
                x="50%" 
                y="60%" 
                textAnchor="middle"
                //stroke="rgba(75, 130, 280, 1)"
                stroke="#999"
                fill="#fff" 
                //fontFamily="Montserrat, Arial, sans-serif"
                //fontFamily="monospace"
                fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                fontSize="28"
                fontWeight="600"
                //style={{filter:"url(#glow)"}}
            >
                <tspan>Carling Technologies</tspan>
            </text>
        </svg>
    </svg>; 
  
export default SVG;

// eof
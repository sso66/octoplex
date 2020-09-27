// N2KAsideLeft.jsx
console.log("Mounting SVG... <SVG />");

import React from 'react';

const SVG = (props, {
    width = '100%',
    height = '100%',
    viewBox = '0 0 200 200',
    stroke = "none",
    fill = "none",
    style = {
        backgroundColor: "black", 
        padding: "5px", 
        border: "4px double #333"
    },
    className = '',

}) => {
    const _bind = () => {};
    const handleClick1 = (e, props) => _bind(dispatch1());
    const handleClick2 = (e, props) => _bind(dispatch2());
    const handleClick3 = (e, props) => _bind(dispatch3());
    
    const dispatch1 = (props) => {
        alert("SVG Button!")
    }

    const dispatch2 = (props) => {
        confirm("SVG Button!")
    }

    const dispatch3 = (props) => {
        prompt("SVG Button!")
    }
    
    return (
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
            // bounding box: n2k-aside-left
            <rect
                display=""
                x="3%"
                y="15%"
                width="19%"
                height="83%"
                stroke={stroke}
                fill={fill}
            />
    
            // viewport: n2k-aside-left
            <svg
                x="3%"
                y="15%"
                width="19%"
                height="83%"
                viewBox="0 0 100 100"
                preserveAspectRatio={"xMinYMax meet"}
            >
                <g 
                    display=""
                    className={className}
                    onClick={(e) => handleClick2(e,props)}
                >
                    <rect
                        x="5%"
                        y="53%"
                        rx="5"
                        width="90%"
                        height="45%"
                        stroke="silver"
                        strokeWidth="2"
                        fill="#666"
                    />
                    <text
                        x="50%" 
                        y="85%" 
                        textAnchor="middle"
                        stroke=""
                        fill="#fff" 
                        fontFamily="sans-serif"
                        fontSize="25"
                        
                    >
                        <tspan className="svg-button">Reset</tspan>
                    </text>
                </g>
            </svg>
        </svg> 
    )
}

export default SVG;

// eof
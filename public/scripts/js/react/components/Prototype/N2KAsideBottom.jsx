// N2KAsideBottom.jsx
console.log("Mounting SVG... <SVG />");

import React from 'react';

const SVG = (props, {
   width='100%',
    height='100%',
    viewBox='0 0 400 400',
    preserveAspectRatio='xMidYMid meet',
    stroke='rgba(255,255,255, 0)',
    fill='rgba(255,255,255, 0)',
    style={ 
        backgroundColor: "transparent", 
        padding: "3px", 
        border: "1px dotted blue"
    },
    className='',
}) =>
    // nested systems of coordinates
    <svg
        width={width}
        height={height}
        viewBox={viewBox}
        style={style}
        className={className}
        preserveAspectRatio={preserveAspectRatio}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >     
        // bounding box: n2k-aside-bottom 
        <rect
            display=""
            x="1%"
            y="75%"
            width="98%"
            height="8%"
            stroke={stroke}
            fill={fill}
        />
        
        // viewport: n2k-aside-bottom
        <svg
            x="1%"
            y="75%"
            width="98%"
            height="8%"
            viewBox="0 0 42 42"
            preserveAspectRatio={"xMidYMid meet"}           
        >
            // placeholder
            <circle
                display=""
                id="led"
                className="led"
                cx="50%"
                cy="50%"
                r="25%"
                fill={props.fill}
                //fill="#f00"
                stroke="gray"
                strokeWidth={3}
            />
        </svg>
    </svg>; 
  
export default SVG;

// eof
// Heart.jsx
//Stateless Component  
console.log("Mounting Heart.jsx... <Heart />")

import React from 'react';

const Heart = (props) => (  
    <svg 
        viewBox="-40 0 150 100" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
     >
        <g fill={props.fill} 
            transform="rotate(-10 50 100) translate(-36 45.5) skewX(40) scale(1 0.5)">
            <path 
                id="heart" 
                d="
                    M 10,30 
                    A 20,20 0,0,1 50,30 
                    A 20,20 0,0,1 90,30 
                    Q 90,60 50,90 
                    Q 10,60 10,30 
                    z" 
            />
        </g> 
        <use href="#heart" 
            fill="none" 
            stroke={props.stroke} 
            //strokeWidth={props.strokeWidth} 
            //strokeOpacity={props.strokeOpacity} 
        />
    </svg>  
)
// usage: <Heart fill="color value" stroke="color value" />

export default Heart;

// eof

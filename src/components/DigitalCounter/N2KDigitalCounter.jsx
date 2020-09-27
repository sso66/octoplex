// N2KTimer.jsx
console.log("Mounting N2KTimer.jsx... <N2KTimer />");

import React from 'react';

import N2KItem from '../Text/N2KItem';
import N2KAsideMiddle from './N2KAsideMiddle';
import N2KAsideLeft from './N2KAsideLeft';

const SVGR = (props, {
    width='100%',
    height='100%',
    viewBox='0 0 400 400',
    stroke="none",
    fill="none",
    style={ 
        backgroundColor: "transparent", 
        padding: "3px", 
        border: "1px dotted blue"
    },
    className='',
}) => (
    <div>
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
            <N2KItem 
                title={props.title} 
                value={props.value} 
                name={props.name} />

            <N2KAsideMiddle />
            <N2KAsideLeft />
                    
        </svg>
    </div>
)

export default SVGR;

// eof

// FilteredSvgComponent.jsx
console.log("Mount FilteredSvgComponent.jsx... <FilteredSvgComponent />");

import React from 'react';
import IFilter from './IFilter';

const FilteredSvgComponent = props => (
    <svg
        width={250}
        height={250}
    >
        // common filter interface
        <IFilter />
        
        // shape object content: original and filtered 
        <g 
            className="myCircles"
            fill="#007f00"  
         >         
            <circle
                display=""
                cx={50}
                cy={50}
                r={45}
            />
            <circle
                cx={150}
                cy={50}
                r={45}
                filter="url(#blurMe)"
            />
        </g>
    </svg>
)

export default FilteredSvgComponent

// eof
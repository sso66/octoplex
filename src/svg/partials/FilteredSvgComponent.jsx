// FilteredSvgComponent.jsx
console.log("Mount FilteredSvgComponent.jsx... <FilteredSvgComponent />")
import React from 'react'

const FilteredSvgComponent = props => (
    <svg
        width={800}
        height={600}
    >
        <defs>
            <filter id="blurMe">
                <feGaussianBlur 
                    in="SourceAlpha"
                    stdDeviation={4} 
                    result="blur"/>
           
                <feOffset 
                    in="blur"
                    dx="4"
                    dy="4"
                    result="offsetBlur" />
                    
                <feMerge>
                    <feMergeNode
                        in="offsetBlur"/>
                    <feMergeNode
                        in="SourceGraphic"/>
                </feMerge>
            </filter>
         </defs>
         
         <g 
            className="myCircles"
            display=""
            fill="#007f00"  
         >         
            <circle
                cx={100}
                cy={150}
                r={50}
            />
            <circle
                cx={210}
                cy={150}
                filter="url(#blurMe)"
                r={50}
            />
        </g>
    </svg>
)

export default FilteredSvgComponent

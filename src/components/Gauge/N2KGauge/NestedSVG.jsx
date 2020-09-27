// File: src/components/Gauge/N2KGauge/NestedSVG.jsx
// Desc: Better Positioning and Transforming With Nested SVG
// Date: 10/3/2019
// Note:
// 1. Nesting SVGs While still Placing Them Relatively
// 2. Transformaing Elements
// 3. Another Advantage of Nested SVGs with Presentation Attributes
//..............................................................................
console.log("Mounting NestedSVG.jsx... <NestedSVG />")

import React from 'react';


const NestedSVG = () => {
 
    const styles = {
        //fill: 'red',
        //fillOpacity: 0.75,
        //stroke: 'black',
        //strokeWidth: 3,
        //strokeOpacity: 'none',
    };

    return (
        <div className="n2k-gauge">
            {/* parent SVG */}
            <svg 
                width="300" 
                height="300"
                style={{stroke: '#00f', strokeWidth: 3}}
            >
                <g display="">
                    <svg 
                        x="100" 
                        y="100">
                        <circle 
                            r="50" 
                            cx="50" 
                            cy="50" 
                            fill= "red" 
                            style={styles} />
                    </svg>
                    
                    <circle 
                        r="50" 
                        cx="50" 
                        cy="50" 
                        fill= "yellow" 
                        style={styles} />
                </g>
                {/* child SVG */}
                <svg
                    viewBox="0 0 300 300"
                    preserveAspectRatio="xMinYMin meet"  
                    x="100" 
                    y="50" 
                    display="none">
                    <rect 
                        x="0" 
                        y="0" 
                        width="142" 
                        height="142" 
                        style={{fill: 'yellow'}} />
                    <rect 
                        x="50" 
                        y="-50" 
                        width="100" 
                        height="100" 
                        style={{transform: `rotate(${45}deg)`, fill: 'black'}} />
                </svg>                            
                {/* child SVG */}
                <svg 
                    viewBox="0 0 300 300"
                    preserveAspectRatio="xMaxYMin meet"  
                    x="100" 
                    y="100" 
                    style={{fill: 'yellow', stroke: 'red'}} 
                    display="none">
                    <rect 
                        x="0" 
                        y="0" 
                        width="142" 
                        height="142"  />
                    <rect 
                        x="100" 
                        y="-50" 
                        width="100" 
                        height="100" 
                        style={{transform: `rotate(${45}deg)`}} />
                </svg>
            </svg>
        </div>
    )
}

export default NestedSVG;

// eof 

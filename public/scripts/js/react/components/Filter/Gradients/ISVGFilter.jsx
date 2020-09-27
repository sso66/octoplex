// ISVGFilter.jsx
console.log("Mounting ISVGFilter.jsx ... <ISVGFilter />");
 
import React from 'react'

const ISVGFilter = props => (
    <svg {...props} >
        <defs>
            // establish the filter's bounds: bounding box
            <filter
                id="octoplex-filter"
                filterUnits="userSpaceOnUse"
                x={-10}
                y={-10}
                width={"120%"}
                height={"120%"}
            >
                <feGaussianBlur 
                    in="SourceAlpha" 
                    stdDeviation={40} 
                    result="blur" 
                />
                
                <feOffset 
                    in="blur" 
                    dx={4} 
                    dy={4} 
                    result="offsetBlur" />
                
                <feSpecularLighting
                    in="blur"
                    surfaceScale={5}
                    specularConstant={1}
                    specularExponent={10}
                    lightingColor="#d90000"
                    result="specOut"
                >
                    <fePointLight 
                        x={-5000} 
                        y={-10000} 
                        z={20000} 
                    />
                </feSpecularLighting>
            
                <feComposite
                    in="specOut"
                    in2="SourceAlpha"
                    operator="in"
                    result="specOut"
                />
            
                <feComposite
                    in="SourceGraphic"
                    in2="specOut"
                    operator="arithmetic"
                    k1={0}
                    k2={1}
                    k3={1}
                    k4={0}
                    result="litPaint"
                />
            
                <feMerge>
                    <feMergeNode in="offsetBlur" />
                    <feMergeNode in="litPaint" />
                </feMerge>
            </filter>
        </defs>
    </svg>
)

export default ISVGFilter;

// eof
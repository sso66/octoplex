// SVGFilter.jsx
console.log("Mounting SVGFilter.jsx ... <SVGFilter />");
 
import React from 'react'

const SVGFilter = props => (
    <svg
        width={250}
        height={250}
        viewBox="0 0 200 185"
        {...props}
    >
        <defs>
            <filter
                id="MyFilter"
                filterUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={200}
                height={120}
            >
                <feGaussianBlur in="SourceAlpha" stdDeviation={4} result="blur" />
                <feOffset in="blur" dx={4} dy={4} result="offsetBlur" />
                <feSpecularLighting
                    in="blur"
                    surfaceScale={5}
                    specularConstant={1}
                    specularExponent={10}
                    lightingColor="#d90000"
                    lightingColor="blue"
                    lightingColor={props.lightingColor}
                    result="specOut"
                >
                    <fePointLight x={-5000} y={-10000} z={20000} />
                </feSpecularLighting>
            
                <feComposite
                    in="specOut"
                    in2="SourceAlpha"
                    operator="in"
                    result="specOut"
                />
                <feComposite
                    in="SourceGrapic"
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
        
        <g filter="url(#MyFilter)">
            <path
                fill="none"
                stroke="#D90000"
                strokeWidth={10}
                d="    
                    M50,66    
                    c-50,0 -50,-60, 0,-60    
                    h100    
                    c50,0 50,60 0,60    
                    z
                "
            />
            <path
                fill="#D90000"
                d="    
                    M60,56    
                    c-30,0 -30-40, 0,-40    
                    h80    
                    c30,0 30,40 0,40    
                    z    
                "
            />
        </g>
        
        <g fill="white" stroke="black" fontSize={36} fontFamily="sans-serif">
            <text x={60} y={46}>
                N2K
            </text>
        </g>
    </svg>
)

export default SVGFilter;

// eof
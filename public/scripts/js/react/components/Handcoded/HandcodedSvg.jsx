// HandcodedSvg.jsx
console.log("Mounting SVG... <SVG />");

import React from 'react';

const SVG = (props, {
    width = '100%',
    height = '100%',
    viewBox = '0 0 100 100',
    preserveAspectRatio = "xMidYMid meet",
    stroke = "black",
    fill = "white",
    //style = {backgroundColor: "#abc", padding: "5px", border: "4px double #333"},
    className = 'svg-icon',
}) => (
    // parent SVG
    // nested systems of coordinates
    <svg
        width={width}
        height={height}
        viewBox={viewBox}
        //style={style}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >     
        // bounding box
        <rect
            display="none"
            x="0"
            y="0"
            width="100"
            height="100"
            stroke="blue"
            strokeDasharray="null"
            strokeLinecap="null"
            strokeLinejoin="null"
            //strokeWidth="0.5"
            fill="none"
        /> 
 
        // child SVG              
        <svg
            display=""   
            x="0"
            y="0"
            width="100"
            height="100"
            viewBox="0 0 400 400"
            preserveAspectRatio={preserveAspectRatio}         
        >  
            <defs>
                <g 
                    display=""
                    id="left-align"
                    stroke="black" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                >
                    <line x1="3" y1="3" x2="48" y2="3" />
                    <line x1="3" y1="19" x2="65" y2="19" />
                    <line x1="3" y1="35" x2="48" y2="35" />
                    <line x1="3" y1="51" x2="65" y2="51"/>
                </g>
                
                <g 
                    display=""
                    id="right-caret"
                    stroke="black" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                 >
                    <polyline
                        points="3 3 30 28 3 53"
                    />
                </g>
                
                <g 
                    display=""
                    id="browser"
                    stroke="black" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                >
                    <rect x="3" y="3" width="80" height="60" />
                    <line x1="3" y1="19" x2="83" y2="19" />
                    <line x1="20" y1="3" x2="20" y2="17" />
                </g>
                
                <symbol
                    id="alert"
                    viewBox="0 0 86 86">
                    <g 
                        display=""
                        stroke="black" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"
                    >
                        <ellipse cx="43" cy="43" rx="40" ry="40" />
                        <ellipse cx="43" cy="65" rx="5" ry="5" fill="black" />
                        <line x1="43" y1="19" x2="43" y2="48" strokeWidth="8" />
                    </g>
                </symbol>
                
                <symbol 
                    id="play" 
                    viewBox="0 0 86 86"
                >
                    <g 
                        display=""
                        stroke="black" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"
                    >
                        <ellipse cx="43" cy="43" rx="40" ry="40" />
                        <polygon points="35 23, 60 43, 35 63" />
                    </g>        
                </symbol>
    
    
                <symbol 
                    id="download" 
                    viewBox="0 0 64 72">
                    <g 
                        display=""
                        stroke="black" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"
                    >
                        <path 
                            d="
                                M 18 3
                                L 46 3
                                L 46 40
                                L 61 40
                                L 32 68
                                L 3 40
                                L 18 40
                                Z
                            "
                        />
                    </g>
                </symbol>
            </defs>
            
            <use href="#left-align" x="0" y="0" />
            <use href="#right-caret" x="180" y="0" />
            <use href="#browser" x="300" y="0" />
            
            <use href="#alert" x="0" y="100" width="100" height="100"></use>
            <use href="#play" x="150" y="100" width="100" height="100"></use>
            <use href="#download" x="300" y="100" width="100" height="100"></use>
        </svg>
    </svg>
)  
export default SVG;

// eof
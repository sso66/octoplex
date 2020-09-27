// components/Icons.jsx
console.log("Mount Icons.jsx... <Icons />");

import React from 'react'
import SymbolDefs from './SymbolDefs'

const SVG = (props) => (
    <div>
        <svg>
            <SymbolDefs />           
            <use 
                href={"#"+props.name} 
                x="50" 
                y="0" 
                width="75" 
                height="75"
                fill="red" />
        </svg>
    </div>
)

export default SVG;

// eof
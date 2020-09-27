// File: src/components/Indicator/N2KIndicator2x1.jsx
// Desc: 
// Date: 8/5/2109
console.log("Mounting N2KIndicator2x1.jsx... <N2KIndicator2x1 />");

import React from 'react';

const N2KIndicator2x1 = (props) => {
    return (
        <div className="n2k-indicators">
            <input 
                type="text"
                className="n2k-indicator-2x1" 
                placeholder="" 
                value={props.name}
                readOnly />
        </div>
    )
}

export default N2KIndicator2x1;

// eof


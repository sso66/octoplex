// N2KIndicator4x1.jsx
console.log("Mounting N2KIndicator2x1.jsx... <N2KIndicator4x1 />");

import React from 'react';

const N2KIndicator4x1 = (props) => {
    return (
        <div className="n2k-indicators">
            <input 
                type="text"
                className="n2k-indicator-4x1" 
                placeholder="" 
                value={props.name}
                readOnly />
        </div>
    )
}

export default N2KIndicator4x1;

// eof


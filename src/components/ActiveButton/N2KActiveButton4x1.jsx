// File: src/components/ActiveButton/N2KActiveButton4x1.jsx
// Desc: performs an action in the system when it press
// Date: 8/6/2019

console.log("Mounting N2KActiveButton4x1.jsx... <N2KActiveButton4x1 />");

import React from 'react';

const N2KActiveButton4x1 = (props) => {
    return (
        <div className="n2k-buttons">
            <input 
                type="button" 
                value={props.name} 
                className="n2k-active-button-4x1 glass" />
        </div>
    )
}

export default N2KActiveButton4x1;

// eof

// ActiveButton4x1.jsx
console.log("Mounting N2KActiveButton4x1.jsx... <N2KActiveButton4x1 />");

import React from 'react';

const N2KActiveButton4x1 = (props) => {
    return (
        <div >
            <input 
                type="button" 
                value={props.name} 
                className="n2k-active-button-4x1" />
        </div>
    )
}

export default N2KActiveButton4x1;

// eof


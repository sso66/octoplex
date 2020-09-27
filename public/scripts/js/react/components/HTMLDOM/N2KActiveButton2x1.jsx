// ActiveButton2x1.jsx
console.log("Mounting N2KActiveButton2x1.jsx... <N2KActiveButton2x1 />");

import React from 'react';

const N2KActiveButton2x1 = (props) => {
    return (
        <div>
             <input 
                type="button" 
                value={props.name}
                className="n2k-active-button-2x1" />
        </div>
    )
}

export default N2KActiveButton2x1;

// eof


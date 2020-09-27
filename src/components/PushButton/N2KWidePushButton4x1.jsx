// N2KWidePushButton4x1.jsx
console.log("Mounting N2KWidePushButton4x1.jsx... <N2KWidePushButton4x1 />");

import React from 'react';

const N2KWidePushButton4x1 = (props) => {
    return (
        <div className="n2k-buttons">
             <input 
                type="button" 
                value={props.name}
                className="n2k-wide-push-button-4x1" />
        </div>
    )
}

export default N2KWidePushButton4x1;

// eof


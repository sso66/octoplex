// File: N2KWideBacklitPushButton2x1.jsx
// Desc:
// Date: 8/7/2019

console.log("Mounting N2KWideBacklitPushButton2x1.jsx... <N2KWideBacklitPushButton2x1 />");

import React from 'react';

const N2KWideBacklitPushButton2x1 = (props) => {
    return (
        <div className="n2k-buttons">
            <input 
                type="button" 
                value={props.name}
                className="n2k-wide-backlit-push-button-2x1" />
        </div>
    )
}

export default N2KWideBacklitPushButton2x1;

// eof


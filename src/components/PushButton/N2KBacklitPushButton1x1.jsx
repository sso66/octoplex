// File: N2KBacklitPushButton1x1.jsx
// Desc:
// Date: 8/7/2019

console.log("Mounting N2KBacklitPushButton1x1.jsx... <N2KBacklitPushButton1x1 />");

import React from 'react';


const N2KBacklitPushButton1x1 = (props) => {
    return (
        <div className="n2k-buttons">
             <input 
                type="button" 
                value={props.name}
                className="n2k-backlit-push-button-1x1 is-round" />
        </div>
    )
}

export default N2KBacklitPushButton1x1;

// eof


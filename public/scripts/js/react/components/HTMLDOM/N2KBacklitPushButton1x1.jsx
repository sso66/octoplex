// PushButton1x1.jsx
console.log("Mounting N2KBacklitPushButton1x1.jsx... <N2KBacklitPushButton1x1 />");

import React from 'react';

const N2KBacklitPushButton1x1 = (props) => {
    return (
        <div >
             <input 
                type="button" 
                value={props.name}
                className="n2k-backlit-push-button-1x1" />
        </div>
    )
}

export default N2KBacklitPushButton1x1;

// eof


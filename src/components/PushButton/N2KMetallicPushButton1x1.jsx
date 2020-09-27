// N2KMetallicPushButton1x1.jsx
console.log("Mounting N2KMetallicPushButton1x1.jsx... <N2KMetallicPushButton1x1 />");

import React from 'react';

const N2KMetallicPushButton1x1 = (props) => {
    return (
        <div className="n2k-buttons">
             <input 
                type="button" 
                value={props.name}
                className="n2k-metallic-push-button-1x1" />
        </div>
    )
}

export default N2KMetallicPushButton1x1;

// eof


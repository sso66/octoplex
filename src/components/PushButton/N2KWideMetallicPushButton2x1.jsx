// N2KWideMetallicPushButton2x1.jsx
console.log("Mounting N2KWideMetallicPushButton2x1.jsx... <N2KWideMetallicPushButton2x1 />");

import React from 'react';

const N2KWideMetallicPushButton2x1 = (props) => {
    return (
        <div className="n2k-buttons">
             <input 
                type="button" 
                value={props.name}
                className="n2k-wide-metallic-push-button-2x1" />
        </div>
    )
}

export default N2KWideMetallicPushButton2x1;

// eof


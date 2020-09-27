// PushButton4x1.jsx
console.log("Mounting N2KWidePushButton4x1.jsx... <N2KWidePushButton4x1 />");

import React from 'react';

const N2KWidePushButton4x1 = (props) => {
    return (
        <div >
            {/*
             <input 
                type="button" 
                value={props.name}
                className="n2k-wide-push-button-4x1" />
            */}                
             <button className="n2k-wide-push-button-4x1">
                <input id="colorbox" type="color" />
                {props.name}
             </button>
        </div>
    )
}

export default N2KWidePushButton4x1;

// eof


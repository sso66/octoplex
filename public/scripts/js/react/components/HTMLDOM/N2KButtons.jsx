// N2KButtons.jsx
console.log("Mounting N2KButtons.jsx ... <N2KButtons />");

import React from 'react';

import N2KActiveButton2x1 from './N2KActiveButton2x1';
import N2KActiveButton4x1 from './N2KActiveButton4x1';

import N2KBacklitPushButton1x1 from './N2KBacklitPushButton1x1';
import N2KWideBacklitPushButton2x1 from './N2KWideBacklitPushButton2x1';

import N2KMetallicPushButton1x1 from './N2KMetallicPushButton1x1';
import N2KWideMetallicPushButton2x1 from './N2KWideMetallicPushButton2x1';

import N2KWidePushButton4x1 from './N2KActiveButton4x1';

import N2KNeonGlow from './N2KNeonGlow';


const N2KButtons = (props) => {
    return (
        <div>
            <h1 className="title">N2K Buttons</h1>
            <N2KActiveButton2x1 name="ActiveButton2x1" /><br />
            <N2KActiveButton4x1 name="ActiveButton4x1" /><br />
            
            <N2KWidePushButton4x1 name="Wide Push Button 1x1" /><br />
            
            <N2KBacklitPushButton1x1 name="Backlit Push Button 1x1" /><br />
            <N2KWideBacklitPushButton2x1 name="Wide Backlit Push Button 2x1" /><br />
            
            <N2KMetallicPushButton1x1 name="Metallic Push Button 1x1" />c
            <N2KWideMetallicPushButton2x1 name="Wide Metallic Push Button 1x1" /><br />
            
            <N2KNeonGlow />

  
        </div>
    )
}

export default N2KButtons;
// eof

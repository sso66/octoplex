// File: src/views/OceanAlexander/QuickStart.jsx
// Desc: Marine Digital Dashboard UI component
// Date: 8/14/2019
//................................................................................
console.log("Mounting QuickStart.jsx... <QuickStart />");

import React from 'react';
import { Link } from 'react-router-dom';

import OAImage from '../../assets/images/ocean-alexander.png';

import N2KActiveButton4x1 from '../../components/ActiveButton/N2KActiveButton4x1';
import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';

import N2KBacklitPushButton1x1 from '../../components/PushButton/N2KBacklitPushButton1x1';
import N2KMetallicPushButton1x1 from '../../components/PushButton/N2KMetallicPushButton1x1';
import N2KWideBacklitPushButton2x1 from '../../components/PushButton/N2KWideBacklitPushButton2x1';
import N2KWideMetallicPushButton2x1 from '../../components/PushButton/N2KWideMetallicPushButton2x1';
import N2KWidePushButton4x1 from '../../components/PushButton/N2KWidePushButton4x1';

import N2KIndicator2x1 from '../../components/Indicator/N2KIndicator2x1';
import N2KIndicator4x1 from '../../components/Indicator/N2KIndicator4x1';


const QuickStart = (props) => { 
    
    return (
    
        <div className="board">
            <section className="hero is-black">
                <div className="container">
                    <img src={OAImage} alt='Ocean Alexander' className="oa-image glow"/>
                    <h2 className="glow">Quick Start</h2>
                </div>
            </section>
    
            <section className="section">
                <div className="container">
                    <div className="level level-item">
                        <N2KWideBacklitPushButton2x1 name="Lights QS" />
                        <N2KWideBacklitPushButton2x1 name="Outlets QS" />
                        <N2KWideBacklitPushButton2x1 name="A/C QS" />
                    </div>
                    <div className="level level-item">
                        <N2KIndicator4x1 name="Lights QS" />
                        <N2KIndicator4x1 name="Outlets QS" />
                        <N2KIndicator4x1 name="A/C QS" />
                    </div>
                    <div className="level level-item">
                        <N2KWideBacklitPushButton2x1 name="Navigation QS" />
                        <N2KWideBacklitPushButton2x1 name="Defrosters QS" />
                    </div>
                    <div className="level level-item">
                        <N2KIndicator4x1 name="Navigation QS" />
                        <N2KIndicator4x1 name="Defrosters QS" />
                    </div>
    
                    <div className="level">
                        <N2KActiveButton2x1 name="Breaker Lockout" />
                        <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                    </div>
                 </div>
            </section>
        </div>
    )
}

export default QuickStart;

// eof 

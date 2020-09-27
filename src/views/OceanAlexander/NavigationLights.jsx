// NavigationLights.jsx
console.log("Mounting NavigationLights.jsx... <NavigationLights />");

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OAImage from '../../assets/images/ocean-alexander.png';
import brand from '../../assets/images/ocean-alexander-pix.png';

import N2KBacklitPushButton1x1 from '../../components/PushButton/N2KBacklitPushButton1x1';
import N2KMetallicPushButton1x1 from '../../components/PushButton/N2KMetallicPushButton1x1';
import N2KWideBacklitPushButton2x1 from '../../components/PushButton/N2KWideBacklitPushButton2x1';
import N2KWideMetallicPushButton2x1 from '../../components/PushButton/N2KWideMetallicPushButton2x1';
import N2KWidePushButton4x1 from '../../components/PushButton/N2KWidePushButton4x1';

import N2KActiveButton4x1 from '../../components/ActiveButton/N2KActiveButton4x1';
import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';

const NavigationLights = (props) => {
    const styles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "flex-start",
    };        
    
   return (
        <div>
            <section className="hero is-black">
                <div className="container">
                    <img src={OAImage} alt='Ocean Alexander' className="oa-image"/>
                    <h1 className="glow">Navigation Lights</h1>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <div className="board">
                        <embed 
                            src={brand} 
                            alt='Ocean Alexander' 
                            className="brand"
                        />
                        {/*
                        <div className="n2k-indicator-1x1">
                            <div className="uminaire">Stern Light</div>
                            <div className="uminaire on">Anchor Light</div>
                            <div className="uminaire">Port Light</div>
                            <div className="uminaire">Stbd Light</div>
                            <div className="luminaire on">Bow Light</div>
                        </div>
                        */}
                        <div className='level level-item'>
                            <N2KWideBacklitPushButton2x1 name="Stern Light" />
                            <N2KWideBacklitPushButton2x1 name="Anchor Light" />
                            <N2KWideBacklitPushButton2x1 name="Port Light" />
                            <N2KWideBacklitPushButton2x1 name="Stbd Light" />
                            <N2KWideBacklitPushButton2x1 name="Bow Light" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="level">
                        <N2KActiveButton2x1 name="Breaker Lockout" />
                        <div className="level-right">
                            <N2KActiveButton2x1 name="<< Back" />
                            <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                        </div>
                    </div>
                </div>
            </section>                        
        </div>
    ) 
}

export default NavigationLights;

// eof

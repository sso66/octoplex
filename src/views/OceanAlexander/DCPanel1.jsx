// File: src/views/OceanAlexander/DCPanel1.jsx
// Desc: Marine Digital Dashboard UI component
// Date: 8/14/2019

console.log("Mounting DCPanel1.jsx... <DCPanel1 />");

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import brand from '../../assets/images/ocean-alexander.png';
import logo from '../../assets/images/ocean-alexander-logo.png';

import N2KActiveButton4x1  from '../../components/ActiveButton/N2KActiveButton4x1';
import N2KActiveButton2x1  from '../../components/ActiveButton/N2KActiveButton2x1';
//import N2KBacklitPushButton1x1 from '../../components/PushButton/N2KBacklitPushButton1x1';
//import N2KMetallicPushButton1x1 from '../../components/PushButton/N2KMetallicPushButton1x1';
import N2KWideBacklitPushButton2x1 from '../../components/PushButton/N2KWideBacklitPushButton2x1';
//import N2KWideMetallicPushButton2x1 from '../../components/PushButton/N2KWideMetallicPushButton2x1';
//import N2KWidePushButton4x1 from '../../components/PushButton/N2KWidePushButton4x1';

import N2KIndicator2x1 from '../../components/Indicator/N2KIndicator2x1';
import N2KIndicator4x1 from '../../components/Indicator/N2KIndicator4x1';


const DCPanel1 = (props) => (
    <div>
        <section className="hero is-black">
            <div className="container">
                <img src={ brand } alt='Ocean Alexander' className="oa-image"/>
                <h1 className="glow">DC Panel 1</h1>
            </div>
        </section>
            
        <section className="section">
            <div className="container">
                <div className='level level-item'>
                    <N2KWideBacklitPushButton2x1 name="Msr toilet (port)" />
                    <N2KWideBacklitPushButton2x1 name="Port stm head toilet" />
                    <N2KWideBacklitPushButton2x1 name="Stbd stm head toilet" />
                    <N2KWideBacklitPushButton2x1 name="VIP stm head toilet" />
                    <N2KWideBacklitPushButton2x1 name="Spare DC 1-5" />
                </div>
                <div className='level level-item'>
                    <N2KWideBacklitPushButton2x1 name="Mid bilge pump 2" />
                    <N2KWideBacklitPushButton2x1 name="Msr head toilet (stbd)" />
                    <N2KWideBacklitPushButton2x1 name="Msr head warmfloor" />/>
                    <N2KWideBacklitPushButton2x1 name="Fwd bilge pump" />
                    <N2KWideBacklitPushButton2x1 name="Mid bilge pump" />
                </div>
                <div className='level level-item'>
                    <N2KWideBacklitPushButton2x1 name="Holding tank ctrl (msr p.)" />
                    <N2KWideBacklitPushButton2x1 name="VIP sump pump" />
                    <N2KWideBacklitPushButton2x1 name="Fwd bilge exhauster" />
                    <N2KWideBacklitPushButton2x1 name="Foyer sump pump" />
                    <N2KWideBacklitPushButton2x1 name="P/S stm lights" />
                </div>
                <div className='level level-item'>
                    <N2KWideBacklitPushButton2x1 name="Holding tank ctrl (msr s.)" />
                </div>
 
            </div>
        </section>
        
        <section className="section">
            <div className="container">
                <div className='level'>
                    <div className="level-left">                        
                        <N2KActiveButton2x1 name="Breaker Lockout" />
                        <Link to='/breaker-panels'><N2KActiveButton2x1 name="Breaker Panels" /></Link>
                    </div>
                    <div className="level-right">                        
                        <N2KActiveButton2x1 name="<< Previous" />
                        <N2KActiveButton2x1 name="Next >>" />
                        <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                    </div>                        
                </div>
            </div>
        </section>                        
    </div>
) 

export default DCPanel1;

// eof
// File: src/views/OceanAlexander/ACMainBreakers.jsx
// Desc: Marine Digital Dashboard UI component
// Date: 8/14/2019

console.log("Mounting ACMainBreakers.jsx... <ACMainBreakers />");

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


const ACMainBreakers = (props) => (
    <div>
        <section className="hero is-black">
            <div className="container">
                <img src={ brand } alt='Ocean Alexander' className="oa-image"/>
                <h1 className="glow">AC Main Breakers</h1>
            </div>
        </section>
            
        <section className="section">
            <div className="container">
                <div className='level level-item'>
                    <N2KWideBacklitPushButton2x1 name="AC #1 - Main Breaker" />
                    <N2KWideBacklitPushButton2x1 name="AC #2 - Main Breaker" />
                    <N2KWideBacklitPushButton2x1 name="AC #3 - Main Breaker" />
                    <N2KWideBacklitPushButton2x1 name="AC #4 - Main Breaker" />
                </div>
                <div className='level level-item'>
                    <N2KWideBacklitPushButton2x1 name="AC #5 - Main Breaker" />
                    <N2KWideBacklitPushButton2x1 name="AC #6 - Main Breaker" />
                    <N2KWideBacklitPushButton2x1 name="AC #7 - Main Breaker" />
                    <N2KWideBacklitPushButton2x1 name="AC #8 - Main Breaker" />
                </div>
                <div className='level level-item'>
                    <N2KWideBacklitPushButton2x1 name="AC #9 - Main Breaker" />
                    <N2KWideBacklitPushButton2x1 name="AC #10 - Main Breaker" />
                    <N2KWideBacklitPushButton2x1 name="AC #11 - Main Breaker" />
                    <N2KWideBacklitPushButton2x1 name="AC #12 - Main Breaker" />
                </div>
            </div>
        </section>
        
        <section className="section">
            <div className="container">
                <div className='level'>
                    <div className="level-left">                        
                        <N2KActiveButton2x1 name="Breaker Lockout" />
                    </div>
                    <div className="level-right">                        
                        <Link to='/ac-power-select'><N2KActiveButton2x1 name="AC Power Select" /></Link>
                        <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                    </div>                        
                </div>
            </div>
        </section>                        
    </div>
) 

export default ACMainBreakers;

// eof
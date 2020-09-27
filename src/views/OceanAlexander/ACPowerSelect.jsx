// ACPowerSelect.jsx
console.log("Mounting ACPowerSelect.jsx... <ACPowerSelect />");

import React, { Component } from 'react';
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


const ACPowerSelect = (props) => {
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
                    <h1 className="glow">AC Power Select</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="level">
                        <div className="level-left level-item">
                            <N2KIndicator4x1 name="Port Shore1 Pwr 100%" />
                            <N2KIndicator4x1 name="Port Gen Pwr Ind." />
                        </div>
               
                        <div className="level-right level-item">
                            <N2KIndicator4x1 name="Stbd Gen Pwr Ind." />
                            <N2KIndicator4x1 name="Stbd Shore2 Pwr 100%" />
                        </div>
                    </div>
                    
                    <div className="level">
                        <div className="level-left level-item">
                            <N2KWideBacklitPushButton2x1 name="Shore Pwr SW #1" />
                            <N2KWideBacklitPushButton2x1 name="Port Gen Pwr SW" />
                        </div>
    
                        <div className="level-right level-item">
                            <N2KWideBacklitPushButton2x1 name="Stbd Gen Pwr SW" />
                            <N2KWideBacklitPushButton2x1 name="Shore Pwr SW #2" />
                        </div>
                    </div>
                    
                    <div className="level">    
                        <div className='level-left level-item'>
                            <N2KIndicator4x1 name="Port Shore 1 Pwr MC" />
                            <N2KIndicator4x1 name="Port Genset MC" />
                        </div>
    
                        <div className='level-right level-item'>
                            <N2KIndicator4x1 name="Stbd Genset MC" />
                            <N2KIndicator4x1 name="Stbd Shore 2 Pwr MC" />
                        </div>
                    </div>
                    <br />                                            
                    <div className='level'>
                        <div className="level-item">
                            <N2KWideBacklitPushButton2x1 name="Port Shore/Gen. Pwr Off" />
                            <N2KWideBacklitPushButton2x1 name="Tie MC" />
                            <N2KWideBacklitPushButton2x1 name="Stbd Shore/Gen. Pwr Off" />
                        </div>
                    </div>                        
                    
                    <div className='level level-item'>
                        <N2KIndicator4x1 name="Single Pwr Feed Both SW" />
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
                            <Link to='/ac-main-breakers'><N2KActiveButton2x1 name="AC Main Breakers" /></Link>
                            <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                        </div>                            
                    </div>
                </div>
            </section>
        </div>
    ) 
}

export default ACPowerSelect;

// eof

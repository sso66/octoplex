// BreakerPanels.jsx
console.log("Mounting BreakerPanels.jsx... <BreakerPanels />");

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OAImage from '../../assets/images/ocean-alexander.png';

import N2KActiveButton4x1  from '../../components/ActiveButton/N2KActiveButton4x1';
import N2KActiveButton2x1  from '../../components/ActiveButton/N2KActiveButton2x1';

import N2KBacklitPushButton1x1 from '../../components/PushButton/N2KBacklitPushButton1x1';
import N2KMetallicPushButton1x1 from '../../components/PushButton/N2KMetallicPushButton1x1';
import N2KWideBacklitPushButton2x1 from '../../components/PushButton/N2KWideBacklitPushButton2x1';
import N2KWideMetallicPushButton2x1 from '../../components/PushButton/N2KWideMetallicPushButton2x1';
import N2KWidePushButton4x1 from '../../components/PushButton/N2KWidePushButton4x1';

import N2KIndicator2x1 from '../../components/Indicator/N2KIndicator2x1';
import N2KIndicator4x1 from '../../components/Indicator/N2KIndicator4x1';



const BreakerPanels = (props) => {
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
                    <h1 className="glow">Breaker Panels</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="level">
                        <div className="level-left level-item">
                            <Link to='/dc-panel-1'><N2KActiveButton4x1 name="DC 1 P/H" /></Link>
                            <N2KActiveButton4x1 name="DC 2 P/H" />
                            <N2KActiveButton4x1 name="DC 3 P/H (Emerg.)" />
                        </div>
               
                        <div className="level-right level-item">
                            <N2KActiveButton4x1 name="AC 1 Garage" />
                            <N2KActiveButton4x1 name="AC 2 Garage" />
                            <N2KActiveButton4x1 name="AC 3 Garage" />
                        </div>
                    </div>
                    
                    <div className="level">
                        <div className="level-left level-item">
                            <N2KActiveButton4x1 name="DC 4 Main Deck" />
                            <N2KActiveButton4x1 name="DC 5 Guest" />
                            <N2KActiveButton4x1 name="DC 6 Guest" />
                        </div>
    
                        <div className="level-right level-item">
                            <N2KActiveButton4x1 name="AC 4 Garage" />
                            <N2KActiveButton4x1 name="AC 5 Garage" />
                            <N2KActiveButton4x1 name="AC 6 Garage" />
                        </div>
                    </div>
                    
                    <div className="level">    
                        <div className='level-left level-item'>
                            <N2KActiveButton4x1 name="DC 7 Crew" />
                            <N2KActiveButton4x1 name="DC 8 Crew" />
                        </div>
    
                        <div className='level-right level-item'>
                            <N2KActiveButton4x1 name="AC 7 Guest" />
                            <N2KActiveButton4x1 name="AC 8 Guest" />
                            <N2KActiveButton4x1 name="AC 9 Crew" />
                        </div>
                    </div>
                    
                    <div className="level">    
                        <div className='level-right level-item'>
                            <N2KActiveButton4x1 name="AC 10 Guest" />
                            <N2KActiveButton4x1 name="AC 11 Guest" />
                            <N2KActiveButton4x1 name="AC 12 Guest" />
                        </div>
                    </div>

                    <div className="level">
                        <div className='level-left'>    
                            <N2KIndicator4x1 name="Service Battery" />
                            <N2KIndicator4x1 name="Emergency Battery" />
                        </div>
                        <div className='level-right'>
                            <N2KIndicator4x1 name="System #1 208V" />
                            <N2KIndicator4x1 name="System #1 120V" />
                        </div>
                    </div>

                    <div className="level">    
                        <div className='level-right level-item'>
                            <N2KIndicator4x1 name="System #2 208V" />
                            <N2KIndicator4x1 name="System #2 120V" />
                        </div>
                    </div>
                </div>
            </section>
                                 
            <section className="section">
                <div className="container">                                       
                    <div className='level'>
                        <div className="level-left">
                            <N2KActiveButton2x1 name="DC Power (Battries) Monitor" />
                            <N2KActiveButton2x1 name="AC Power Feeds" />
                        </div>
                        
                        <div className="level-right">                            
                            <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                        </div>                            
                    </div>
                </div>
            </section>   
        </div>
    ) 
}

export default BreakerPanels;

// eof

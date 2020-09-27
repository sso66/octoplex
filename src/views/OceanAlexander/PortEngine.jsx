// PortEngine.jsx
console.log("Mounting PortEngine.jsx... <PortEngine />");

import React, { Component } from 'react';
import OAImage from '../../assets/images/ocean-alexander.png';

import N2KWideBacklitPushButton2x1  from '../../components/PushButton/N2KWideBacklitPushButton2x1';
import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';
import Icon from '../../components/Gauge/StarterBattery/StarterBattery';

const PortEngine = (props) => {
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
            <section className="hero has-background-black-bis">
                <div className="container">
                    <img src={OAImage} alt='Ocean Alexander' className="oa-image"/>
                    <h2 className="glow">Port Engine</h2>
                </div>
            </section>
        
        
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="card is-shady">
                                <div className="card-image has-text-centered">
                                    <i className="fa fa-paw"></i>

                                </div>
                                <div className="card-content">
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card is-shady">
                                <div className="card-image has-text-centered">
                                    <i className="fa fa-empire"></i>
                                </div>
                                <div className="card-content">
                                <Icon
                                    title="Main Fuel Remaining"
                                    //value="00:00:00"
                                    value="14.7"
                                    name="gal(US)" 
                                    width="350" />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card is-shady">
                                <div className="card-image has-text-centered">
                                    <i className="fa fa-apple"></i>
                                </div>
                                <div className="card-content">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="tile is-ancestor">
                    
                        <div className="tile is-parent">
                            <card className="tile is-child pink post">
                                <input type="button" value="Coolant Temparature" id="" name="" />
                            </card>
                            
                            <card className="tile is-child green post">
                                <input type="button" value="Oil Temparature" id="" name="" />
                            </card>      
                                                      
                            <card className="tile is-child gold post">
                                <input type="button" value="Stbd Engine" id="" name="" />
                            </card>
                            
                            <card className="tile is-child pink post">
                                <input type="button" value="Engine Coolant Temparature" id="" name="" />
                            </card>
                            
                            <card className="tile is-child green post">
                                <input type="button" value="Engine Oil Temparature" id="" name="" />
                            </card>                                
                            
                            <card className="tile is-child gold post">
                                <input type="button" value="Stbd Engine" id="" name="" />
                            </card>

                        </div>
                    </div>

                    <nav className="level board">
                        <div className="level-left">
                            <div className="level-item">
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item"><N2KActiveButton2x1 name="Breaker Lockout" /></div>
                            <div className="level-item"><N2KActiveButton2x1 name="Fresh Water Tank" /></div>
                            <div className="level-item"><N2KActiveButton2x1 name="Home"  /></div>
                        </div>
                    </nav>
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                            <div className="level-item"><N2KActiveButton2x1 name="Breaker Lockout" /></div>
                            <div className="level-item"><N2KActiveButton2x1 name="Fresh Water Tank" /></div>
                            <div className="level-item"><N2KActiveButton2x1 name="Home"  /></div>

                            </div>
                        </div>
                        <div className="level-right">
                        </div>
                    </nav>

                    <nav className="level board">
                        <div className="level-left">
                            <div className="level-item">
                                <N2KWideBacklitPushButton2x1 name="Fuel Polish Pump" />
                            </div>
                        </div>
                        <div className="level-right">
                                                        <Icon
                                    title="Main Fuel Remaining"
                                    //value="00:00:00"
                                    value="14.7"
                                    name="gal(US)" 
                                    width="350" />

                        </div>
                    </nav>
                </div> 
            </section>
        </div>
    ) 
}

export default PortEngine;

// eof

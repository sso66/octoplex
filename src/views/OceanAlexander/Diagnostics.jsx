// File: src/views/OceanAlexander/Diagnostics.jsx
// Desc: react childern prototype and bulma layout for production
// Date: 8/9/2019
//...............................................................................   
console.log("Mounting Diagnostics.jsx... <Diagnostics />");

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OAImage from '../../assets/images/ocean-alexander.png';
import brand from '../../assets/images/ocean-alexander-logo.png';
import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';
import N2KActiveButton4x1 from '../../components/ActiveButton/N2KActiveButton4x1';

import Collection from '../../containers/Diagnostics/Collection';
import Selection from '../../containers/Diagnostics/Selection';
import Layout from '../../components/Site/Layout';

const Diagnostics = (props) => {
    const styles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "flex-start",
        backgroundColor: "orange"
    };        
    
    return (
        <div className="board">
            
            <section className="hero is-dark">
                <div className="container">
                    <img src={OAImage} alt='Ocean Alexander' className="oa-image" />
                    <h1 className="glow">Diagonastics</h1>
                    
                </div>
            </section>
            {/*
            <section className="section">
                <div className="container">
                    <div className="level level-item">
                        <N2KActiveButton2x1 name="Power Management" className=''/>
                        <Link to='/breaker-panels'><N2KActiveButton2x1 name="Breaker Panels" className=''/></Link>
                    </div>
                                            
                    <div className="level level-item">
                        <N2KActiveButton2x1 name="Operating Mode" className=''/>
                        <Link to='/breaker-panels'><N2KActiveButton2x1 name="Breakers Lockout" className=''/></Link>
                    </div>
                    
                    <div className="level level-item">
                        <N2KActiveButton2x1 name="Clean Screen" className=''/>
                        <N2KActiveButton2x1 name="System Status" className=''/>
                    </div>
                    
                    <div className="level level-item">
                        <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                    </div>
                </div>                        
            </section>
                              */}              
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <Collection  />
                        </div>            
                        <div className="column">
                            <Collection  />
                        </div>            
                            <div className="column">
                            <Selection />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h3>React Pattern: Slots</h3>      
                <Layout
                    top={ "" }
                    left={ <Selection /> } 
                    center={ <Collection />}
                    bottom={ <Selection /> }
                    right={ "" }
                />
            </section>

        </div>                
    ) 
}

export default Diagnostics;

// eof

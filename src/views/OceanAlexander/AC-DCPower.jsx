// File: src/views/OceanAlexander/ACDCPower.jsx
// Desc: Marine Digital Dashboard UI component
// Date: 8/14/2019
//...............................................................................   
console.log("Mounting ACDCPower.jsx... <ACDCPower />");

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OAImage from '../../assets/images/ocean-alexander.png';
import N2KActiveButton4x1 from '../../components/ActiveButton/N2KActiveButton4x1';
import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';


const ACDCPower = (props) => {
    
    return (
        <div className="board">
            <section className="hero is-black">
                <div className="container">
                    <img src={OAImage} alt='Ocean Alexander' className="oa-image glow"/>
                    <h2 className="glow">AC/DC Power</h2>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <div className="level level-item">
                        <Link to='/port-shore-power'><N2KActiveButton2x1 name="Port Shore Power" /></Link>
                        <N2KActiveButton2x1 name="Stbd Shore Power" className=''/>
                    </div>
                                            
                    <div className="level level-item">
                        <Link to='/port-genset'><N2KActiveButton2x1 name="Port Genset" className=''/></Link>
                        <N2KActiveButton2x1 name="Stbd Genset" className=''/>
                    </div>
                    
                    <div className="level level-item">
                        <N2KActiveButton2x1 name="DC Power (Batteries) Monitor" className=''/>
                    </div>
                    
                    <div className="level level-right">
                        <div><Link to='/'><N2KActiveButton2x1 name="Home" /></Link></div>
                    </div>
                </div>                        
            </section>
        </div>                
    ) 
}

export default ACDCPower;

// eof

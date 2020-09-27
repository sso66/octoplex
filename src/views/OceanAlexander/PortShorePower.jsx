// PortShorePower.jsx
console.log("Mounting PortShorePower.jsx... <PortShorePower />");

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OAImage from '../../assets/images/ocean-alexander.png';

import N2KActiveButton2x1  from '../../components/ActiveButton/N2KActiveButton2x1';

const PortShorePower = (props) => {
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
            <section className="hero is-dark">
                <div className="container">
                    <img src={OAImage} alt='Ocean Alexander' className="oa-image"/>
                    <h1 className="glow">Port Shore Power</h1>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                     
                </div>
            </section>
            
                                <section className="section">
            <div className="container">
                <div className='level level-item -level-right'>
                        <N2KActiveButton2x1 name="Stbd Shore Power" />
                        <Link to='/port-genset'><N2KActiveButton2x1 name="Port Genset" className=''/></Link>
                        <N2KActiveButton2x1 name="Stbd Genset" />
                        <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                </div>
            </div>
        </section>                        
                        
        </div>
    ) 
}

export default PortShorePower;

// eof

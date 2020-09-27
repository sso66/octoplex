// Lights.jsx
console.log("Mounting Lights.jsx... <Lights />");

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OAImage from '../../assets/images/ocean-alexander.png';

import N2KActiveButton4x1 from '../../components/ActiveButton/N2KActiveButton4x1';
import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';


const Lights = (props) => {
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
                    <h2 className="glow">Lights</h2>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <div className="level level-item">
                        <N2KActiveButton2x1 name="Upper Deck Lights" className=''/>
                        <N2KActiveButton2x1 name="Main Deck Lights" className=''/>
                        <N2KActiveButton2x1 name="Exterior Lights" className=''/>
                    </div>
                                            
                    <div className="level level-item">
                        <N2KActiveButton2x1 name="Msr/Guest Stm Lights" className=''/>
                        <N2KActiveButton2x1 name="E/R / Crew / Laz. Lights" className=''/>
                        <N2KActiveButton2x1 name="Underwater/Bilge Lights" className=''/>
                    </div>
                </div>
            </section>
            
            <section className="section">
                <div className="container">

                    <div className="level level-right">
                        <div><Link to='/'><N2KActiveButton2x1 name="Home" /></Link></div>
                    </div>
                </div>                        
            </section>
        </div>
    ) 
}

export default Lights;

// eof

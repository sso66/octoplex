// BilgeStatus.jsx
console.log("Mounting BilgeStatus.jsx... <BilgeStatus />");

import React, { Component } from 'react';
import OAImage from '../../assets/images/ocean-alexander.png';

const BilgeStatus = (props) => {
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
                    <h1 className="glow">Bilge Status</h1>
                    <h />
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                </div>
            </section>                        
        </div>
    ) 
}

export default BilgeStatus;

// eof

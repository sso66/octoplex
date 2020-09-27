// VesselStatus.jsx
console.log("Mounting VesselStatus.jsx... <VesselStatus />");

import React, { Component } from 'react';
import OAImage from '../../assets/images/ocean-alexander.png';

const VesselStatus = (props) => {
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
                    <h1 className="glow">Vessel Status</h1>
                
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                </div>
            </section>                        
        </div>
    ) 
}

export default VesselStatus;

// eof

// HeadSystem1.jsx
console.log("Mounting HeadSystem1.jsx... <HeadSystem1 />");

import React, { Component } from 'react';
import OAImage from '../../assets/images/ocean-alexander.png';

const HeadSystem1 = (props) => {
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
                    <h1 className="glow">Head System #1</h1>
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

export default HeadSystem1;

// eof

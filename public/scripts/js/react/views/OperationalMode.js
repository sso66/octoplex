// OperationalMode.js
console.log("Mounting OperationalMode.js... <OperationalMode />");

import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';

import Header from '../../components/Site/Header/Header'

class OperationalMode extends Component { 
    constructor(props) {
        super(props)
        // this.state = {
            // activities: []
        // }  
    }
    
    componentDidMount() {
    }
    
    componentDidUpdate() {
    }
     
    render() {
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
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">

                        </div>
                    </div>
                </section>
                
                <section className="section">
                    <div className="container">
                        <div className='columns'>
                            <div className='column'> 
                            </div>
                        </div>
                    </div>
            
                    {/*<div className='footer glow'>MOORED</div>*/}
                
                    <div className="board">
                        <h1 className="title">Operation Mode: Helm</h1>
                        <figure className="grid">
                            <div style={styles}>
                            </div>
                        </figure>
                        <figcaption>N2KView</figcaption>
                    </div>
                </section>                        
            </div>
        ) 
    };       
}

export default OperationalMode;

// eof
// JSGauge.jsx
console.log("Mounting N2KGauge.jsx... <JSGauge />");

import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';

import './gauge.sass'


class JSGauge extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentNumber: 0,
            min: 0,
            max: 52,
            step: 1
         }
    }
  
       
    componentDidMount() {
        this.timer = this.props.setInterval(() => 
            this.changeNumber(), 1000
        );
        
    }
  
    
    componentWillUnMount() {
        this.props.clearInterval(this.timer);
    }
  
    
    changeNumber(){       
        const randomNumber = Math.round(Math.random() * this.state.max);
        const degrees = Math.round((randomNumber / 100) * 180);
        //const root = document.querySelector(":root");
        //let title = document.querySelector(".loader__title");
        
        let nextNumber = this.state.currentNumber;
          
        this.props.setInterval(() => {
            if (nextNumber < randomNumber) {
                nextNumber++;
                this.setState({
                    currentNumber: nextNumber
                })
                
            } else if (nextNumber > randomNumber) {
                nextNumber--;
                this.setState({
                    currentNumber: nextNumber
                })
            }
        }, 3);
        
        root.style.setProperty("--rotation", `${degrees}deg`);
    };

    
    
    render() {
        return (
            <div className="container">
                <h1 className="loader__title">{this.state.currentNumber}</h1>
                <div className="loader"></div>  
            </div>
        )
    }
}

export default ReactTimeout(JSGauge);

// eof

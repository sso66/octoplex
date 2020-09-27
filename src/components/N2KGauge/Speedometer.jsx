// Speedometer.jsx: Consumer Module
console.log("Mounting Speedometer.jsx... <Speedometer />")

import React, {Component} from "react";
//import Gauge from 'react-radial-gauge'; // original
import Gauge from './N2KGauge' // modified version
import './n2k-gauge.sass'

class Speedometer extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            size: 150,
            progressWidth: '0',
            progressColor: '#ce4b99',
            currentValue: 0,
            minimumValue: -20,
            maximumValue: 20,
        } 
        this.handlePositiveClick = this.handlePositiveClick.bind(this);
        this.handleNegativeClick = this.handleNegativeClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
   }
    
    handlePositiveClick() {
        let nextValue = this.state.currentValue + 1;
        this.setState({currentValue: nextValue });
        //alert("generate random number: " + Math.round(Math.random() * 52))
        alert("generate random number: " + Math.round((Math.random() * 51)+ 1))
    }
    
    handleNegativeClick() {
        let prevValue = this.state.currentValue - 1;
        this.setState({currentValue: prevValue });
    }
    
    handleChange(event) {
        this.setState({currentValue: event.target.value});
    }
    
    render() {
          const svgContainer = {
            display: "flex",
            flexDirection: "column",
            flexWrap: "",
            justifyContent: "space-between",
            alignItems: "start",
            alignContent: "flex-start",
            svgContent: {
                //order: 0,
                //flex: 1,
                //alignSelf: "center",
                backgroundColor: "#ff",
                margin: "auto",
                border: "1px solid #fff",  
                borderRadius: "3px",
                padding: "5px",
                verticalAlign: "middle",
            }
        };
      
        
        let opts = {
            display: "none",
            
            // Gague 
            size: 250,
            //size: this.state.size,           
            
            // Dial                        
            dialWidth: 10,
            dialColor: '#eee',            
            
            // Tick
            tickLength: 10,
            tickWidth: 1,
            tickColor: '#cacaca',
            tickInterval: 10,            
            
            // Progress
            progressWidth: 10,
            //progressWidth: this.state.progressWidth,
            progressColor: 'red',
            //progressColor: this.state.progressColor,
            progressRoundedEdge: true,
            downProgressColor: 'white',
            progressFont: 'sans-serif',
            progressFontSize: '45',            
            
            // Needle
            needle: true,
            needleBaseSize: 15,
            needleBaseColor: '#f00',
            needleWidth: 2,
            needleSharp: false,
            needleColor: '#f00',
                       
            // Tick Label 
            //minimumValue: -50,           
            //maximumValue: 50,
            minimumValue: this.state.minimumValue,           
            maximumValue: this.state.maxmumValue,
            currentValue: this.state.currentValue,
        };
        
        return (
            <div style={svgContainer}>
                <h1>Speedometer - Consumer Module</h1>
                <Gauge 
                    {...opts}
                    style={svgContainer.svgContent}
                />
                
                <div className="">
                    <input 
                        type="button" 
                        defaultValue="Gauge-"
                        onClick={this.handleNegativeClick} 
                        className="button is-danger"
                    />
                    <span>&nbsp;</span>
                    <input
                        type="button" 
                        defaultValue="Gauge+"
                        onClick={this.handlePositiveClick} 
                        className="button is-success"
                    />
                    <hr />
                    <input 
                        type="number" 
                        value={this.state.minimumValue} 
                        onChange={this.handleChange} 
                        readOnly 
                    />
                    <input 
                        type="number" 
                        value={this.state.maximumValue} 
                        onChange={this.handleChange} 
                        readOnly 
                    />
                    <input 
                        type="color" 
                        value={this.state.progressColor} 
                        onChange={this.handleChange} 
                    />

                    <div className="slider-label">
                        <label>
                            &nbsp;{this.state.currentValue}&nbsp;
                        </label>
                    </div> 

                    <div className="slider-wrapper">
                        <input 
                            type="range" 
                            min="-50" 
                            max="50"
                            step="-1"
                            value={this.state.currentValue}
                            onChange={this.handleChange}
                        />
                    </div>  
                </div>
            </div>
        )
    }
}

export default Speedometer;
module.exports= Speedometer;
// eof

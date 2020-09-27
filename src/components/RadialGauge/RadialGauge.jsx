// RadialGauge.jsx
console.log("Mounting RadialGauge.jsx ... <RadialGauge />");

import React from "react";
import { PI, circumference } from './circle.es6'
import './radial-gauge.sass'

class RadialGauge extends React.Component {
    constructor(props) {
        super(props)
        this.handleClickAnimate = this.handleClickAnimate.bind(this);
        this.handleClickFormulate = this.handleClickFormulate.bind(this);
    }
    
    handleClickAnimate() { 
        let needleMove = document.querySelector('#needleMove')
        let animateBtn = document.querySelector('#animate')
        needleMove.beginElement() 
    }
    
    handleClickFormulate(e) {
        let radius = 54; // half of the diameter
        let diameter = 2 * radius;
        let progress = 59; // 0 - 100
        let range = 200; // positive: [0...100 ]/ negative: [-100...0]
        alert(
                "\nradius: " + radius 
                + "\ndiameter: " + diameter
                + "\nprogress: " + progress 
                + "\nrange: " + range 
                + "\nstroke-dasharray: " + circumference(radius)
                + "\nstroke-dashoffset: " + circumference(radius) * (1- (progress/range))); 
        e.preventDefault();       
    }
    
    render () {
        return (  
              <svg
                          x="1%"
            y="16%"
            width="98%"
            height="68%"

                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="radial-progress"
                //width="120"
                //height="120"
                viewBox="0 0 120 120"
                {...this.props}
              >
                <defs>
                    <line id="tick" x1="104" y1="60" x2="110" y2="60" strokeLinecap="round" />
                    
                    <radialGradient id="radialCenter" cx="50%" cy="50%" r="50%">
                        <stop stopColor="#dc3a79" offset="0" />
                        <stop stopColor="#241d3b" offset="1" />
                    </radialGradient>
                </defs>                
                <g id="ticks">
                    <use className="tick quarterTick" href="#tick" transform="rotate(0 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(10 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(20 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(30 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(40 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(50 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(60 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(70 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(80 60 60)" />
                    <use className="tick quarterTick" href="#tick" transform="rotate(90 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(100 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(110 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(120 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(130 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(140 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(150 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(160 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(170 60 60)" />
                    <use className="tick quarterTick" href="#tick" transform="rotate(180 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(190 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(200 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(210 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(220 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(230 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(240 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(250 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(260 60 60)" />
                    <use className="tick quarterTick" href="#tick" transform="rotate(270 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(280 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(290 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(300 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(310 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(320 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(330 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(340 60 60)" />
                    <use className="tick" href="#tick" transform="rotate(350 60 60)" />
                    <use className="tick quarterTick" href="#tick" transform="rotate(360 60 60)" />
                </g>
                <g id="tickLabels" className="tick-labels">
                    <text x={85} y={65} textAnchor="middle" transform="rotate(90 90,65)">
                        {'0'}
                    </text>
                    <text x={45} y={33} textAnchor="middle" transform="rotate(90 53,35)">
                        {'50'}
                    </text>
                    <text x={15} y={65} textAnchor="middle" transform="rotate(90 20,65)">
                        {'100'}
                    </text>
                    <text x={50} y={93} textAnchor="middle" transform="rotate(90 53,95)">
                        {'50'}
                    </text>
                </g>                
                <circle className="radial-track" cx={60} cy={60} r={54} fill="none"/>
                <circle
                    className="radial-progress-bar up"
                    cx={60}
                    cy={60}
                    r={54}
                    fill="none"
                    strokeDasharray={339.292}
                    strokeDashoffset={239.20081}                                 
                />
                <g className="needle">
                    <polygon
                        className="point"
                        points="60,50 60,70 120,60"
                        transform="rotate(106.2 60 60)"
                    >
                        <animateTransform
                            id="needleMove"
                            attributeName="transform"
                            type="rotate"
                            from="0 60 60"
                            to="106.2 60 60"
                            dur="1.5s"
                            fill="freeze"
                        />
                    </polygon>
                    <circle className="center" cx={60} cy={60} r={20} fill="url(#radialCenter)" />
                </g>
            </svg>
        )
    }
}
export default RadialGauge

// eof


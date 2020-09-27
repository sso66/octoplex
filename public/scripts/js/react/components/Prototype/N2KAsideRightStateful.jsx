// N2KAsideRightStateful.jsx
console.log("Mounting SVG... <SVG />");

import React, {Component } from 'react';

class N2KAsideRightStateful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: props.currentValue,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        let nextValue = this.state.currentValue + 1;
        this.setState({currentValue: nextValue})
    }
    
    render() {
        let opts = Object.assign({}, this.props);
        
        let {
            display,
            size,
            styles,
            className,
            strokeColor,
            fillColor,
        } = opts;
                   
        return (
            <svg
                display={display}
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                // bounding box: n2k-aside-right                       
                <rect
                    display=""
                    x="78%"
                    y="16%"
                    width="19%"
                    height="82%"
                    stroke={strokeColor}
                    fill={fillColor}
                />
                // viewport: n2k-aside-right
                <svg
                    x="78%"
                    y="16%"
                    width="19%"
                    height="82%"
                    viewBox={`0 0 ${size} ${size}`}
                    preserveAspectRatio={"xMinYMax meet"}
                >
                    <g 
                        display=""
                        className="display-button"
                        onClick={this.handleClick}
                    >
                        <text
                            display="" 
                            x="50%" 
                            y="5%" 
                            stroke="#fff"
                            fill="#fff" 
                            textAnchor="middle"
                            fontFamily="sans-serif"
                            fontSize="36"
                        >
                            {this.state.currentValue}
                        </text>
                        
                        // svg button                        
                        <rect
                            x="5%"
                            y="50%"
                            rx="5"
                            width="90%"
                            height="45%"
                            stroke="silver"
                            strokeWidth="2"
                            fill="#666"
                        />
                        <text
                            x="48%" 
                            y="80%" 
                            textAnchor="middle"
                            stroke=""
                            fill="#fff" 
                            fontFamily="sans-serif"
                            fontSize="24"
                        >
                            <tspan>Display</tspan>
                        </text>
                    </g>
                </svg>
            </svg>    
        )
    }
}

N2KAsideRightStateful.defaultProps = {
    display: "",
    className: "svg-button",
    strokeColor: '#ff0',
    fillColor: 'none', 
    
    size: 100,
    currentValue: 100,      
}

export default N2KAsideRightStateful;

// eof
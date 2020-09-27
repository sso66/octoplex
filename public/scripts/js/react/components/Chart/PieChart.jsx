// PieChart.jsx
console.log("Mounting PieChart.jsx... <PieChart />")
// currentSegmentOffset = (circumference - allPreceedingSegmentsTotalLength) + firstSegmentOffset

import React from 'react'
import { PropTypes } from 'prop-types';
import './pie-chart.sass';

const RADIUS = 15.91549430918954;

const PieChart = (props, {
    width="100%",
    height="100%",
    viewBox='0 0 400 400',
    preserveAspectRatio='xMidYMid meet',
    stroke="rgba(255, 255, 255, 0.3)",
    fill="rgba(255, 255, 255, 0)",
    style={ 
        //order: 0,
        //flex: 1,
        //alignSelf: "center",
        backgroundColor: "transparent",
        margin: "auto", 
        border: "1px dotted #00f",
        padding: "5px",
    },
    className=`svg-icon ${className || ""}`,
}) => {
    
    return (
        <svg 
            width={width} 
            height={height}
            viewBox={viewBox}
            preserveAspectRatio={preserveAspectRatio}
            style={style}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <title>N2KChart</title>
            <desc>Available Component Types</desc>
            // bounding box: n2k-main-content
            <rect
                display=""
                x="1%"
                y="16%"
                width="98%"
                height="68%"
                stroke={stroke}
                strokeWidth="1"
                fill={fill}
            />        
            // viewport: svg-main-content
            <svg 
                x="1%"
                y="16%"
                width="98%"
                height="68%"
                viewBox="0 0 42 42"
                preserveAspectRatio="xMidYMid meet"
                className="chart" 
            >
                <g  className=""
                    transform="rotate(180 21 21) translate(-3.5 -3.5) scale(1.17)"
                >
                    <circle
                        display=""
                        className="donut-hole"
                        cx={21}
                        cy={21}
                        //r={15.91549430918954}
                        r={RADIUS}
                        //fill="#fff"
                        fill="transparent"
                    />
            
                    <circle
                        display=""
                        className="donut-ring"
                        cx={21}
                        cy={21}
                        //r={15.91549430918954}
                        r={RADIUS}
                        fill="transparent"
                        strokeWidth={3}
                        stroke="#d2d3d4"
                    />
                
                    <circle
                        display=""
                        className="donut-segment"
                        cx={21}
                        cy={21}
                        //r={15.91549430918954}
                        r={RADIUS}
                        fill="transparent"
                        strokeWidth={3}
                        //stroke="#ce4b99"
                        stroke="green"
                        //strokeDasharray="85 15"
                        //strokeDashoffset={25}
                        //strokeDashoffset={0}
                        //strokeDasharray="40 60"
                        strokeDasharray="16.67 83.33"
                        strokeDashoffset={50}
                    />
                    
                    <circle
                        display=""
                        className="donut-segment"
                        cx={21}
                        cy={21}
                        //r={15.91549430918954}
                        r={RADIUS}
                        fill="transparent"
                        strokeWidth={3}
                        //stroke="#b1c94e"
                        stroke="yellow"
                        //strokeDasharray="15 85"
                        //strokeDashoffset={40}
                        //strokeDasharray="20 80"
                        strokeDasharray="20 80"
                        // (100 - 40) + 25 = 85
                        //strokeDashoffset={85}
                        strokeDasharray="16.67 83.33"
                        // (100 - 16.67) + 50 = 100
                        strokeDashoffset={133.33}
                    />
                    
                    <circle
                        display=""
                        className="donut-segment"
                        cx={21}
                        cy={21}
                        //r={15.91549430918954}
                        r={RADIUS}
                        fill="transparent"
                        //stroke="#377bbc"
                        stroke="red"
                        strokeWidth={3}
                        // (100 - (40 + 20)) + 25 = 65
                        //strokeDasharray="30 70"
                        //strokeDashoffset={65}
                        strokeDasharray="16.67 83.33"
                        // (100 - (16.67 + 16.67)) + 50 = 75
                        strokeDashoffset={116.67}
                    />
    
                    <circle
                        display="none"
                        className="donut-segment"
                        cx={21}
                        cy={21}
                        //r={15.91549430918954}
                        r={RADIUS}
                        fill="transparent"
                        stroke="#ff0"
                        strokeWidth={3}
                        // (100 - (40 + 20 + 30)) + 25 = 35
                        strokeDasharray="10 90"
                        strokeDashoffset={35}
                    />
                </g>                
                <g
                    display=""
                    className="chart-text"
                >
                    <text 
                        className="chart-number" 
                        x="50%" 
                        y="50%"
                    >
                        {props.value}
                    </text>
                    
                    <text 
                        className="chart-label"
                        x="50%" 
                        y="50%"
                    >
                        {props.name}
                   </text>
                </g>
            </svg>
        </svg>
    )
}

PieChart.propTypes = {
}

PieChart.defaultProps = {
    // circumference: 100,
    radius: 100 / (3.141592653589793 * 2), // => 15.91549430918954
    cx: 21,
    cy: 21,
    strokeWidth: 3,
}

export default PieChart

// eof
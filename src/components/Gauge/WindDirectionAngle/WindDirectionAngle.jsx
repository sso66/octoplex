// WindDirectionAngle.jsx
console.log("Mounting WindDirectionAngle.jsx... <WindDirectionAngle />")

import React from 'react'
import ColorMatrixFilter from '../ColorMatrixFilter';
import RadialGradient from '../RadialGradient'
import ResetActiveButton from '../ResetActiveButton';
import N2KAsideTop from '../N2KAsideTop';
import './wind-direction-angle.sass';


const WindDirectionAngle = (props, {
    width='100%',
    height='100%',
    viewBox='0 0 400 400',
    preserveAspectRatio='xMidYMid meet',
    stroke='rgba(255, 255, 255, 1',
    fill='rgba(255, 255, 255, 0)',
    style={ 
        //order: 0,
        //flex: 1,
        //alignSelf: "center",
        backgroundColor: "transparent",
        margin: "auto", 
        border: "1px dotted #00f",
        padding: "5px",
    },
    className=`svg-icon ${className || "wind-direction-angle-gauge"}`,
}) => (
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
        <title>Starter Battery</title>
        <desc>Gauge</desc>
        
        <RadialGradient />
        <ResetActiveButton title="Reset" />
        
        // bounding box: svg-header
        <rect
            display=""
            x="1%"
            y="1%" 
            width="98%" 
            height="14%" 
            stroke={stroke} 
            fill={fill}
        />

        // viewport: svg-header
        <svg
            x="1%"
            y="1%" 
            width="98%" 
            height="14%" 
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
        >
            <text
                display="" 
                x="50%" 
                y="65%"
                stroke="none"
                fill="#fff" 
                textAnchor="middle"
                fontFamily="Montserrat, Arial, sans-serif"
                //fontFamily="serif"
                //fontFamily="monospace"
                //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                fontSize={52}
                fontWeight="600"
            >
                <tspan>{props.title}</tspan>
            </text>
        </svg>  

        // bounding box: svg-main-content
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
            viewBox="0 0 36 36"
            preserveAspectRatio="xMidYMid meet"
        >
            <g 
                display=""
                className="gauge" 
                transform="rotate(0 18 18)"
            >
                <circle
                    display=""
                    className="donut-hole"
                    cx={18}
                    cy={18}
                    r={15.91549430918954}
                    //fill="rgba(255, 255, 255, 1)"
                />
        
                <circle
                    display=""
                    className="donut-ring"
                    cx={18}
                    cy={18}
                    r={15.91549430918954}
                    fill="transparent"
                    strokeWidth={2}
                    stroke="#000"
                />
                // currentOffset = circumference - totalDashLength + initialOffset
                <g 
                    display="none"
                    className="port"
                >   
                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        strokeWidth={2}
                        stroke="rgba(255, 0, 0, .85)"
                        strokeDasharray="10 90"
                        strokeDashoffset={60}
                        fill="transparent"
                    />
 
                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        strokeWidth={2}
                        stroke="rgba(255, 0, 0, 0.85)"
                        strokeDasharray="10 90"
                        // (100 - 10) + 65 = 155
                        strokeDashoffset={155}
                        fill="transparent"
                    />
                    // reserved for altenator voltage progress
                    <circle
                        display="none"
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        strokeWidth={2}
                        stroke="rgba(255, 0, 0, 0.85)"
                        strokeDasharray="10 90"
                        // (100 - (10 + 10) + 65 = 145
                        strokeDashoffset={145}
                        fill="transparent"
                    />
                    
                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        strokeWidth={2}
                        stroke="rgba(255, 255, 0, 0.85)"
                        strokeDasharray="10 90"
                        // (100 - (10 + 10) + 65 = 145
                        strokeDashoffset={145}
                        fill="transparent"
                    />
                    
                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        fill="transparent"
                        stroke="rgba(0, 255, 0, .85)"
                        strokeWidth={2}
                        strokeDasharray="10 90"
                        // (100 - (10 + 10 + 10)) + 64 = 135
                        strokeDashoffset={135}
                    />
                </g>
                <g 
                    display="none"
                    className="stbd"
                >                    
                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        fill="transparent"
                        stroke="rgba(0, 255, 0, .85)"
                        strokeWidth={2}
                        // (100 - (10 + 10 + 10)) + 65 = 125
                        strokeDasharray="10 90"
                        strokeDashoffset={125}
                    />
    
                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        fill="transparent"
                        stroke="rgba(255, 255, 0, .85)"
                        strokeWidth={2}
                        // (100 - (10 + 10 + 10 + 10)) + 65 = 115
                        strokeDasharray="10 90"
                        strokeDashoffset={115}
                    />
                    
                    // reserved for alternator voltage progress
                    <circle
                        display="none"
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        fill="transparent"
                        stroke="rgba(255, 0, 0, .85)"
                        strokeWidth={2}
                        // (100 - (10 + 10 +  10 + 10 + 10)) + 65 = 105
                        strokeDasharray="10 90"
                        strokeDashoffset={115}
                    />
                    
                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        fill="transparent"
                        stroke="rgba(255, 0, 0, .85)"
                        strokeWidth={2}
                        // (100 - (10 + 10 +  10 + 10 + 10)) + 65 = 105
                        strokeDasharray="10 90"
                        strokeDashoffset={105}
                    />
                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        fill="transparent"
                        stroke="rgba(255, 0, 0, .85)"
                        strokeWidth={2}
                        // (100 - (10 + 10 +  10 + 10 + 10 + 10)) + 65 = 95
                        strokeDasharray="10 90"
                        strokeDashoffset={100}
                    />
                </g>
               
                <g
                    display=""
                    className="wind-direction-angle"
                >
                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        fill="transparent"
                        strokeWidth={2}
                        stroke="rgba(255, 0, 0, 0.85)"
                        strokeDasharray="10 90"
                        // (100 - (10 + 10)) + 65 = 145
                        strokeDashoffset={145}
                    />

                    <circle
                        display=""
                        className="donut-segment"
                        cx={18}
                        cy={18}
                        r={15.91549430918954}
                        fill="transparent"
                        stroke="rgba(0, 255, 0, .85)"
                        strokeWidth={2}
                        // (100 - (10 + 10 + 10 + 10)) + 65 = 115
                        strokeDasharray="10 90"
                        strokeDashoffset={115}
                    />
                </g>
            </g>                    
            <g
                display=""
                className="gauge-text"
            >
                <text 
                    className="gauge-number" 
                    x="50%" 
                    y="50%"
                >
                    {props.value}
                </text>
                
                <text 
                    className="gauge-label"
                    x="50%" 
                    y="50%"
                >
                    {props.name}
               </text>
            </g>

            <defs>
                <line
                    display=""
                    id="tick"
                    x1={32.5}
                    y1={18}
                    x2={35}
                    y2={18}
                />
            </defs>

            <g className="ticks" display="">
                <use className="tick quarterTick" href="#tick" transform="rotate(0 18 18)" />
                <use className="tick" href="#tick" transform="rotate(10 18 18)" />
                <use className="tick" href="#tick" transform="rotate(20 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(30 18 18)" />
                <use className="tick" href="#tick" transform="rotate(40 18 18)" />
                <use className="tick" href="#tick" transform="rotate(50 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(60 18 18)" />
                <use className="tick" href="#tick" transform="rotate(70 18 18)" />
                <use className="tick" href="#tick" transform="rotate(80 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(90 18 18)" />
               
                <use className="tick" href="#tick" transform="rotate(100 18 18)" />
                <use className="tick" href="#tick" transform="rotate(110 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(120 18 18)" />
                <use className="tick" href="#tick" transform="rotate(130 18 18)" />
                <use className="tick" href="#tick" transform="rotate(140 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(150 18 18)" />
                <use className="tick" href="#tick" transform="rotate(160 18 18)" />
                <use className="tick" href="#tick" transform="rotate(170 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(180 18 18)" />
                
                <use className="tick" href="#tick" transform="rotate(190 18 18)" />
                <use className="tick" href="#tick" transform="rotate(200 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(210 18 18)" />
                <use className="tick" href="#tick" transform="rotate(220 18 18)" />
                <use className="tick" href="#tick" transform="rotate(230 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(240 18 18)" />
                <use className="tick" href="#tick" transform="rotate(250 18 18)" />
                <use className="tick" href="#tick" transform="rotate(260 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(270 18 18)" />
                
                <use className="tick" href="#tick" transform="rotate(280 18 18)" />
                <use className="tick" href="#tick" transform="rotate(290 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(300 18 18)" />
                <use className="tick" href="#tick" transform="rotate(310 18 18)" />
                <use className="tick" href="#tick" transform="rotate(320 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(330 18 18)" />
                <use className="tick" href="#tick" transform="rotate(340 18 18)" />
                <use className="tick" href="#tick" transform="rotate(350 18 18)" />
                <use className="tick quarterTick" href="#tick" transform="rotate(360 18 18)" />
            </g>          
            
            { renderBoatHull() }
                        
            <g className="needle">
                <g transform="rotate(100 18 18)">
                
                <circle
                    cx={18}
                    cy={18}
                    r={1.591549430918954}
                    fill="#f00"
                    stroke="silver"
                    strokeWidth={1.5}
                />       
                <line
                    x1={16}
                    y1={18}
                    x2={33}
                    y2={18}
                    fill="none"
                    stroke="#f00"
                    strokeWidth={0.5}
                />
                </g>
            </g>              

            <text
                display=""
                x={18}
                y={28}
                fontFamily="Montserrat, Arial, sans-serif"
                fontSize={4.5}
                fontWeight={800}
                textAnchor="middle"
                fill="#fff"
                className=""
                //style={{filter:"url(#glow)"}}                
            >
                {props.value}
            </text>      
            // Wind Direction / Angle
            <g 
                display=""
                className="tick-labels" 
                transform="rotate(0 18 18)">
                <text x="18" y="6">0</text>
                <text x="12" y="7.5">30</text>
                <text x="24" y="7.5">30</text>
                <text x="29" y="12">60</text>
                <text x="7"  y="12">60</text>
                <text x="31" y="19">90</text>
                <text x="5.5"  y="19">90</text>
                <text x="29" y="25">120</text>
                <text x="7"  y="25">120</text>
                <text x="24.5" y="30">150</text>
                <text x="11.5" y="30">150</text>
                <text x="18" y="32">180</text>
            </g>
        
        </svg>
        // bounding box: svg-footer
        <rect
            display=""
            x="1%"
            y="85%"
            width="98%"
            height="14%"
            stroke={stroke}
            fill={fill}
        />
        // viewport: svg-footer
        <svg
            x="1%"
            y="85%"
            width="98%"
            height="14%"
            viewBox="0 0 100 100"        
            preserveAspectRatio={"xMaxYMid meet"}           
        >
            <text
                display="" 
                x="60%" 
                y="60%" 
                textAnchor="end"
                stroke="none"
                fill="#fff"
                fontFamily="Montserrat, Arial, sans-serif"
                //fontFamily="serif"
                //fontFamily="monospace"
                //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                fontSize="40"
                fontWeight="600"
            >
                <tspan>{props.name}</tspan>
            </text>
        </svg>
        
        <N2KAsideTop />
        
        // border box
        <g display="none">   
            <rect
                display=""        
                x="2%"
                y="17%"
                rx="3"
                width="96%"
                height="66%"
                stroke="gray"
                strokeWidth={2}
                strokeOpacity="0.5"
                fill="#ff0"
                fillOpacity="0.3"
            />
            // content box 
            <rect
                display=""
                x="5%"
                y="30%"
                rx="2"
                width="90%"
                height="42%"
                stroke="#333"
                strokeWidth={1}
                strokeOpacity="0.5"
                fill="#999"
                fillOpacity="0.5"            
            />
        </g>
    
        <g display="">        
            // border ring 
            <circle
                display=""
                cx="50%"
                cy="50%"
                r="140"
                stroke="lightblue"
                strokeWidth={5}
                strokeOpacity="1"
                fill="#fff"
                fillOpacity="0.1"
            />
                        
            // content ring
            <circle
                display=""
                cx="50%"
                cy="50%"
                r="130"
                stroke="silver"
                strokeWidth={1}
                strokeOpacity="0.9"
                fill="rgba(75, 130, 280, 0.1)"
            />
        </g>  
        
    </svg>
)

const renderBoatHull = () => (
    <ellipse
        display="" 
        cx="18" 
        cy="18" 
        rx="2" 
        ry="7"
        //fill="transparent" 
        fill="url(#radialGradient)"
        //stroke="#666"
        strokeWidth="0.4"
        strokeOpacity="0.5"
        strokeLinecap="miter"
        transform="translate(0 -4)"
        className="boat-hull" 
    />          
);

WindDirectionAngle.propTypes = {
}

WindDirectionAngle.defaultProps = {
}

export default WindDirectionAngle

// eof

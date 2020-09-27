// N2KPrototype.jsx
console.log("Mounting N2KPrototype.jsx... <N2KPrototype />");

import React from 'react';
import RandomColor from 'randomcolor';

import N2KAsideRight from './N2KAsideRightStateful'
//import N2KAsideRight from './N2KAsideRight'
import N2KAsideLeft from './N2KAsideLeft'
import N2KAsideTop from './N2KAsideTop'
import N2KAsideBottom from './N2KAsideBottom'

import N2KActiveButton from '../../components/AvailableComponentTypes/ActiveButton/SVG-DOM/N2KActiveButton'
import N2KPushButton from '../../components/AvailableComponentTypes/PushButton/SVG-DOM/N2KPushButton'
//import N2KRangeButton from '../../components/AvailableComponentTypes/PushButton/SVG-DOM/N2KRangeButton'
import N2KRockerSwitchButton from '../../components/AvailableComponentTypes/CircuitBreakerSwitch/SVG-DOM/N2KRockerSwitchButton'

import N2KFilter from '../../components/AvailableComponentTypes/Filter/ColorMatrixFilter'
import N2KPicture from '../../components/AvailableComponentTypes/Picture/PictureIcon'
import ReactSVG from '../../components/AvailableComponentTypes/Misc/ReactSVG';

import N2KGauge from '../../components/AvailableComponentTypes/Gauge/N2KGauge';
import RadialGauge from '../../components/AvailableComponentTypes/Gauge/RadialGauge/RadialGauge';
import AbstractGauge from '../../components/AvailableComponentTypes/Gauge/AbstractGauge/AbstractGauge';

import './n2k-product.sass'

const SVGR = (props, {
    width='100%',
    height='100%',
    viewBox='0 0 400 400',
    preserveAspectRatio='xMidYMid meet',
    stroke='rgba(255, 255, 255, 0.3',
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
    className=`svg-icon ${className || ""}`,
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
            // place holder
            <text
                display="" 
                x="50%" 
                y="65%" 
                stroke="#fff"
                fill="#fff" 
                textAnchor="middle"
                fontFamily="Montserrat, Arial, sans-serif"
                //fontFamily="serif"
                //fontFamily="monospace"
                //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                fontSize="48"
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
            fill={fill}
        />  
        // viewport: svg-main-content
        <svg
            x="1%"
            y="16%"
            width="98%"
            height="68%"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
        >
            // placeholder
            <text
                display="" 
                x="50%" 
                y="60%" 
                textAnchor="middle"
                stroke="#fill"
                fill="#fff"
                fontFamily="Montserrat, Arial, sans-serif"
                //fontFamily="serif"
                //fontFamily="monospace"
                //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                fontSize="30"
                style={{filter:"url(#glow)"}}
            >
                <tspan>{props.value}</tspan>
            </text>

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
            // placeholder
            <text
                display="" 
                x="60%" 
                y="60%" 
                textAnchor="end"
                stroke="#fff"
                fill="#fff"
                fontFamily="Montserrat, Arial, sans-serif"
                //fontFamily="serif"
                //fontFamily="monospace"
                //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                fontSize="38"
            >
                <tspan>{props.name}</tspan>
            </text>
        </svg>

        <N2KFilter /> 

        //___ extra key frames ___
        <N2KAsideLeft display="none" />
        <N2KAsideRight display="none" />
        <N2KAsideTop display="none" />
        <N2KAsideBottom display="none" fill="yellow"/>

        //___ SVG buttons ___
        // active-button, push-button, and toggle-button (rocker-switch), range button
        <N2KActiveButton title="Reset" display="" />
        <N2KPushButton title="Reset" display="none" x="75%" />
        
        <g display="none">
            <g display="">
                <N2KRockerSwitchButton display="" x="19%" y="6%"/>
                <N2KRockerSwitchButton display="" x="19%" y="22%" />
                <N2KRockerSwitchButton display="" x="19%" y="39%"/>
                <N2KRockerSwitchButton display="" x="19%" y="56%"/>
                <N2KRockerSwitchButton display="" x="19%" y="73%"/>
            </g>
            <g display="">
                <N2KRockerSwitchButton display="" x="44%" y="6%" />
                <N2KRockerSwitchButton display="" x="44%" y="22%" />
                <N2KRockerSwitchButton display="" x="44%" y="39%" />
                <N2KRockerSwitchButton display="" x="44%" y="56%" />
                <N2KRockerSwitchButton display="" x="44%" y="73%" />
            </g>
        </g>
        
        <N2KPicture
            display="none" 
            stroke="skyblue" 
            strokeWidth="0.2"
            fill={RandomColor()}
            transform="scale(0.4) translate(30, 20) rotate(15, 5, 5)" 
        />
        {/*
        <RadialGauge/>
        <AbstractGauge />
        <ReactSVG />      
        */}
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
                strokeOpacity="0.3"
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
                strokeOpacity="0.3"
                fill="#999"
                fillOpacity="0.3"            
            />
        </g>
        
        <g display="none">        
            // border ring 
            <circle
                display=""
                cx="50%"
                cy="50%"
                r="150"
                stroke="gray"
                strokeWidth={3}
                strokeOpacity="0.5"
                fill="#fff"
                fillOpacity="0.5"
            />
                        
            // content ring
            <circle
                display=""
                cx="50%"
                cy="50%"
                r="130"
                stroke="silver"
                strokeWidth={1}
                strokeOpacity="0.5"
                fill="#ff0"
                fillOpacity="0.1"            
            />
        </g>  
    </svg>
)

export default SVGR;

// eof

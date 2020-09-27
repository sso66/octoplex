// N2KAnalogClock.jsx
console.log("Mounting N2KAnalogClock ... <N2KAnalogClock />");

import React from 'react';

const TICK_ID = "tick";

const renderClockDial = (opts) => {
    return (
        <circle
            display="none"
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#0f0"
            strokeWidth={10}
            fill="#fff"
            fillOpacity="0.5"
        />                                
    );
}

const renderBorderBox = (opts) => (
    <rect
        display=""        
        x="2%"
        y="17%"
        rx="3"
        width="96%"
        height="66%"
        stroke="gray"
        strokeWidth={1}
        strokeOpacity="0.5"
        fill="#999"
        fillOpacity="0.5"
    />
);

const renderContentBox = (opts) => (
    <rect
        display=""
        x="5%"
        y="30%"
        rx="2"
        width="90%"
        height="42%"
        stroke="silver"
        strokeWidth={1}
        strokeOpacity="0.1"
        fill="#999"
        fillOpacity="0.3"            
    />   
);

const renderBorderRing = (opts) => (
    <circle
        display=""
        cx="50%"
        cy="50%"
        r="150"
        stroke="gray"
        strokeWidth={3}
        strokeOpacity="0.5"
        fill="#fff"
        fillOpacity="0.1"
    />
);

const renderContentRing = (opts) => (
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
);

class N2KAnalogClock extends React.Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        let opts = Object.assign({}, this.props);

        let {
            display="",
            width="100%",
            height="100%",
            viewBox="0 0 400 400",
            preserveAspectRatio="xMidYMid meet",
            stroke='rgba(255,255,255, 0.5)',
            fill='rgba(255,255,255, 0',
            style={ 
                backgroundColor: "transparent",
                //margin: "auto",
                padding: "3px", 
                border: "1px solid blue"
            },
            className=`svg-icon ${className || ""}`,
            size,
        } = opts;

        let cX = size / 2;
        let cY = size / 2;
        let radius = 150;
        let diameter = 2 * radius;
        let circumference = 2 * Math.PI * radius;
        
        opts = Object.assign(opts, {
            size,
            cX,
            cY,
            radius,
            diameter,
            circumference,
        });
        
        //alert (
        console.log (
            "\n size: " + opts.size +
            "\n cX: " + opts.cX +
            "\n cY: " + opts.cY +
            "\n radius: " + opts.radius +
            "\n diameter: " + opts.diameter +    
            "\n circumference: " + Math.round(opts.circumference)
        );
               
        return (
            <svg
                display={display}
                width={width}
                height={height}
                viewBox={viewBox}
                preserveAspectRatio={preserveAspectRatio}
                style={style}
                className={className}
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
                        fontWeight="600"
                    >
                        <tspan>{this.props.title}</tspan>
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
                    viewBox="0 0 250 250"
                    preserveAspectRatio="xMidYMid meet"
                    className="clock"
                >
                    <title>N2K Analog Clock</title>
                    <desc>24-hour Clock</desc>
                    <g 
                        display=""
                        className="analog-clock"
                    >
                        <defs>
                            <path
                                id={TICK_ID}
                                d="M95,0 L100,-5 L100,5 Z"
                                fill="#ccc"
                                stroke="transparent" 
                            />
                        </defs>
                        
                        { renderClockDial (opts) }
                        
                        <circle
                            display=""
                            className='clock-face'
                            cx="125"
                            cy="125"
                            r="100"
                            //cx="50%"
                            //cy="50%"
                            //r="40%"
                            style={{
                                fill: 'white',
                                stroke: 'black',
                            }}
                        />      
                        
                        <g 
                            display=""
                            className="ticks" 
                            transform="translate(125, 125)"
                        >
                            <use href="#tick" transform="rotate(30)" />
                            <use href="#tick" transform="rotate(60)" />
                            <use href="#tick" transform="rotate(90)" />
                            <use href="#tick" transform="rotate(120)" />
                            <use href="#tick" transform="rotate(150)" />
                            <use href="#tick" transform="rotate(180)" />
                            <use href="#tick" transform="rotate(210)" />
                            <use href="#tick" transform="rotate(240)" />
                            <use href="#tick" transform="rotate(270)" />
                            <use href="#tick" transform="rotate(300)" />
                            <use href="#tick" transform="rotate(330)" />
                            <use href="#tick" transform="rotate(360)" />
                        </g>    
                        <g 
                            display=""
                            style={{
                                fontFamily:"Montserrat, Arial, sans-serif",
                                fontSize: 20,
                                fontWeight:"600",
                                //fill:"#fff"
                            }}
                            transform="rotate(359 125 125)"
                        >
                            <text x="160" y="60">1</text>
                            <text x="190" y="90">2</text>
                            <text x="200" y="130">3</text>
                            <text x="190" y="170">4</text>
                            <text x="160" y="200">5</text>
                            <text x="118" y="215">6</text>
                            <text x="80"  y="200">7</text>
                            <text x="50"  y="170">8</text>
                            <text x="40"  y="130">9</text>
                            <text x="50"  y="90">10</text>
                            <text x="80"  y="60">11</text>
                            <text x="118" y="50">12</text>

                        </g>                            
                        <g 
                            display=""
                            className="needles"
                            style={{
                                stroke: 'black',
                                strokeWidth: 5,
                                strokeLinecap: 'round',
                            }}
                        >
                            <path 
                                className="hour" 
                                d="M125,125 L125,75" 
                                transform="rotate(10, 125, 125)" 
                            />
                            <path
                                className="minute"
                                d="M125,125 L125,45"
                                transform="rotate(20, 125, 125)"
                                strokeWidth={3}
                            />
                            <path
                                className="second"
                                d="M125,125 L125,30"
                                transform="rotate(30, 125, 125)"
                                style={{
                                    stroke: 'red',
                                    strokeWidth: 2,
                                }}
                            />
                        </g>

                        <circle 
                            display=""
                            className="knob"
                            cx="125"
                            cy="125"
                            r="6"
                            r={6}
                            style={{
                                fill: '#333',
                            }}
                        />
                    </g>                        
                </svg>
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
                        stroke="#fff"
                        fill="#fff"
                        fontFamily="Montserrat, Arial, sans-serif"
                        //fontFamily="serif"
                        //fontFamily="monospace"
                        //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                        fontSize="38"
                        fontWeight="600"
                    >
                        <tspan>{this.props.name}</tspan>
                    </text>
                </svg>
                <g display="none">
                    {renderBorderBox(opts)}
                    {renderContentBox(opts)}
                    {renderBorderRing(opts)}
                    {renderContentRing(opts)}
                </g>
            </svg>  
       );
   } 
}

N2KAnalogClock.defaultProps = {
    size: 250,
    //dialColor: "red"
}

export default N2KAnalogClock;

// eof

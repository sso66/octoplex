// Meter.jsx
console.log("Mounting Meter.jsx ... <Meter />");

import React from 'react';
import './meter.sass';

const renderMeterOutline = (opts) => {
    return (
        <circle
            display="" 
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            strokeDasharray= {`${opts.circumference/2}`}
            className="circle outline"
        />
    );        
}

const renderRangeZoneA = (opts) => {
    return (
        <circle 
            display=""
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            stroke={opts.progressColor[2]}
            // 50% dash / 100% gap
            //strokeDasharray="471 942"
            strokeDasharray= {`${opts.rangeZoneA} ${opts.circumference}`} 
            className="circle range"
        />
    );        
}

const renderRangeZoneB = (opts) => {
    return (
        <circle 
            display=""
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            stroke={opts.progressColor[1]}
            // 33.33% dash / 100% gap
            //strokeDasharray="314 942"
            strokeDasharray= {`${opts.rangeZoneB} ${opts.circumference}`}
            className="circle range"
        />
    );        
}

const renderRangeZoneC = (opts) => {
    return (
        <circle
            display=""
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            stroke={opts.progressColor[0]}
            // 16.67% dash / 100% gap
            //strokeDasharray="157 942"
            strokeDasharray= {`${opts.rangeZoneC} ${opts.circumference}`}
            className="circle range"
        />
    );        
}

const renderMask = (opts) => {
    return (
        <circle
            display="none" 
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            className="circle outline"
            id="mask"
        />
    );        
}

const renderOutlineEnds = (opts) => {
    return (
        <circle
            display="" 
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            stroke="#000"
            strokeWidth="35"
            strokeOpacity="1"
            //strokeDasharray="2 469"
            strokeDasharray= {`${opts.gap} ${opts.outlineEnds}`}
            className="circle"
        />
    );        
}

class Meter extends React.Component {
    render() {
        let opts = Object.assign({}, this.props);    
        
        let {
            display="",
            size,
            width="100%",
            height="100%",
            stroke='rgba(255,255,255, 0.5)',
            fill='rgba(255,255,255, 0',
            style={ 
                backgroundColor: "transparent",
                padding: "3px", 
                border: "1px dotted blue"
            },
            className=`svg-icon ${className || ""}`,
        } = opts;
     
        let cX = size / 2;
        let cY = size / 2;
        let radius = 150;
        let diameter = 2 * radius;
        let circumference = 2 * Math.PI * radius;
        //let rangeZoneA = 50 / 100 * 942; 
        let rangeZoneA = 50 / 100 * circumference;
        //let rangeZoneB = 33.33 / 100 * 942;
        let rangeZoneB = 33.33 / 100 * circumference;
        //let rangeZoneC = 16.67 / 100 * 942;
        let rangeZoneC = 16.67 / 100 * circumference;
        let gap = 2;
        //let outlineEnds = (942 / 2) - 2;
        let outlineEnds = (circumference / 2) - gap;

        opts = Object.assign(opts, {
            size,
            display,
            cX,
            cY,
            radius,
            diameter,
            circumference,
            rangeZoneA,
            rangeZoneB,
            rangeZoneC,
            gap,
            outlineEnds,      
        });
        
        //alert (
        console.log (
            "\n size: " + opts.size +
            "\n cX: " + opts.cX +
            "\n cY: " + opts.cY +
            "\n radius: " + opts.radius +
            "\n diameter: " + opts.diameter +    
            "\n circumference: " + Math.round(opts.circumference) +
            "\n rangeZoneA: " + Math.round(opts.rangeZoneA) +
            "\n rangeZoneB: " + Math.round(opts.rangeZoneB) +
            "\n rangeZoneC: " + Math.round(opts.rangeZoneC) +
            "\n gap: " + Math.round(opts.gap) +
            "\n outlineEnds: " + Math.round(opts.outlineEnds)
        );
      
        return (
            <svg
                display={display}
                width={width}
                height={height}
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
                        fontSize="52"
                        fontWeight="600"
                    >
                        <tspan>{this.props.title}</tspan>
                    </text>
                </svg>  
            
                // bounding box: n2k-main-content
                <rect
                    display=""
                    x="1%"
                    y="16%"
                    width="98%"
                    height="68%"
                    stroke={stroke}
                    fill={fill}
                />
                // view: n2k-main-content
                <svg
                    x="1%"
                    y="16%"
                    width="98%"
                    height="68%"
                    viewBox={`0 0 ${size} ${size}`}
                    preserveAspectRatio="xMidYMid meet"

                    >
                    <defs>
                       
                    </defs>
                    
                    <g 
                        display=""
                        transform="rotate(180 175 175)"
                    >
                        { renderMeterOutline(opts)}
                        { renderRangeZoneA(opts)}
                        { renderRangeZoneB(opts)}
                        { renderRangeZoneC(opts) }
                        { renderMask(opts) }
                        { renderOutlineEnds(opts) }
                    </g>
                </svg>
                // bounding box: n2k-footer
                <rect
                    display=""
                    x="1%"
                    y="85%"
                    width="98%"
                    height="14%"
                    stroke={stroke}
                    fill={fill}
                />
                // viewport: n2k-footer
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
                        fontSize="40"
                        fontWeight="600"
                    >
                        <tspan>{this.props.name}</tspan>
                    </text>
                </svg>
        
                // border box
                <g display="none">   
                    <rect
                        display="none"        
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
            
                <g display="none">        
                    // border ring 
                    <circle
                        display=""
                        cx="50%"
                        cy="50%"
                        r="140"
                        stroke="gray"
                        strokeWidth={3}
                        strokeOpacity="1"
                        fill="#ff0"
                        fillOpacity="0.3"
                    />
                                
                    // content ring
                    <circle
                        display=""
                        cx="50%"
                        cy="50%"
                        r="130"
                        stroke="#333"
                        strokeWidth={1}
                        strokeOpacity="0.5"
                        fill="#999"
                        fillOpacity="0.5"            
                    />
                </g>  
                
            </svg>
        )
    }
}

Meter.defaultProps = {   
    // Gauge 
    size: 350,
    display: "none",
    className: 'circle',
    
    // Dial
    dialWidth: 3,
    dialColor: "#d2d3d4",   
    
    // Progress
    progressWidth: 3,
    progressColor: ['#ce4b99', '#b1c94e', '#377bbc'],   
    //progressColor: ['tomato', 'lightgreen', 'lightblue'], 
    progressRoundEdge: true,
    
    dash: [85, 15, 30],
    gap: [15, 85, 70],
    offset: [25, 40, 65],
    
    //dash: [40, 20, 30],
    //gap: [60, 80, 70],
    //offset: [25, 85, 65], 
};

export default Meter;

// eof

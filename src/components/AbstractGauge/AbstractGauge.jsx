// AbstractGauge.jsx
console.log("Mounting AbstractGauge.jsx ... <AbstractGauge />");
// Animated SVG chart with 3 segments (40%, 30% and 20% respectively) with 10% unused.

import React from 'react';
import './abstract-gauge.sass';

const renderGauge = (opts) => {
    return (
        <circle
            display=""
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            fill='white'          
        />
    );
}

const renderDial = (opts) => {
    return (
        <circle
            display=""
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            stroke={opts.dialColor}
            strokeWidth={opts.dialWidth}
            fill='transparent'   
        />
    );
}

const renderProgressA = (opts) => {
    return (
        <circle
            display=""
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            strokeWidth={opts.progressWidth}
            stroke={opts.progressColor[0]}
            strokeDasharray={`${opts.dash[0]} ${opts.gap[0]}`} 
            strokeDashoffset={opts.offset[0]}
            strokeLinecap={opts.progressRoundEdge ? 'round' : 'butt'}
            fill="transparent"
            className={opts.className}
        />
    );
}

const renderProgressB = (opts) => {
    return (
        <circle
            display=""
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            strokeWidth={opts.progressWidth}
            stroke={opts.progressColor[1]}
            strokeDasharray={`${opts.dash[1]} ${opts.gap[1]}`} 
            strokeDashoffset={opts.offset[1]}
            strokeLinecap={opts.progressRoundEdge ? 'round' : 'butt'}
            fill="transparent"
            className={opts.className}
        />
    );
}

const renderProgressC = (opts) => {
    return (
        <circle
            display=""
            cx={opts.cX}
            cy={opts.cY}
            r={opts.radius}
            strokeWidth={opts.progressWidth}
            stroke={opts.progressColor[2]}
            strokeDasharray={`${opts.dash[2]} ${opts.gap[2]}`} 
            strokeDashoffset={opts.offset[2]}
            strokeLinecap={opts.progressRoundEdge ? 'round' : 'butt'}
            fill="transparent"
            className={opts.className}
        />
    );
}

class AbstractGauge extends React.Component {
    render() {
        let opts = Object.assign({}, this.props);
        
        let {
            size,
            dialWidth,
        } = opts;
      
        let cX = size / 2;
        let cY = size / 2;
        //let circumference = 2 * Math.PI * radius;
        //let radius = (size - (2 * dialWidth)) / 2;
        let circumference = 100; 
        let radius= (circumference /(Math.PI * 2));
        let diameter = 2 * radius;

        console.log(
        //alert(
            "size: " + size + 
            "\ncX: " + cX + 
            "\ncY: " + cY + 
            "\nradius: " + radius +
            "\ncircumference: " + circumference +
            "\ndiameter: " + diameter
        );

        opts = Object.assign(opts, {
            cY,
            cX,
            radius,
            circumference,
            diameter,
        });
      
        return (
            <svg
                x="1%"
                y="16%"
                width="98%"
                height="68%"
                //width={size}
                //height={size}
                viewBox={`0 0 ${size} ${size}`}
                preserveAspectRatio="xMidYMid meet"  
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <defs>
                </defs>
            
                <g>
                    { renderGauge(opts) }
                    { renderDial(opts) }
                    { renderProgressA(opts) }
                    { renderProgressB(opts) }        
                    { renderProgressC(opts) }  
                </g>                
            </svg>
        )
    }
}

AbstractGauge.defaultProps = {   
    // Gauge ... 
    size: 36,
    className: 'circle',
    
    // Dial ...
    dialWidth: 3,
    dialColor: "#d2d3d4",   
    
    // Progress ...
    progressWidth: 3,
    progressColor: ['#ce4b99', '#b1c94e', '#377bbc'],   
    //progressColor: ['red', 'green', 'blue'], 
    progressRoundEdge: true,
    //dash: [85, 15, 30],
    //gap: [15, 85, 70],
    //offset: [25, 40, 65],
    dash: [40, 20, 30],
    gap: [60, 80, 70],
    offset: [25, 85, 65], 
};

export default AbstractGauge;

// eof

// N2KProduct.jsx
console.log("Mounting N2KProduct.jsx ... <N2KProduct />");

import React from 'react';

class N2KProduct extends React.Component {
    render() {
        let opts = Object.assign({}, this.props);    
        
        let {
            display="",
            width="100%",
            height="100%",
            viewBox="0 0 400 400",
            preserveAspectRatio="xMidYMid meet",
            //stroke='rgba(255, 255, 255, 0.3)',
            stroke="url(#linearGradient)",
            fill='rgba(255, 255, 255, 0)',
            //fill="url(#linearGradient)",
            style={ 
                backgroundColor: "transparent",
                margin: "auto",
                border: "1px dotted #00f",
                padding: "5px", 
                
            },
            className=`svg-icon ${className || ""}`,
            size,
        } = opts;
     
        let cX = size / 2;
        let cY = size / 2;
        let radius = size / 2;
        let diameter = 2 * radius;
        let circumference = 2 * Math.PI * radius;
        
        let C = 100;
        let r = C / (2 * Math.PI);
        let d= 2 * r;
        
        let A = Math.PI * r * r;
        
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

            "\n ___ accepted props: values ___"  +
            "\n title: " + opts.title +
            "\n value: " + opts.value +
            "\n name: " + opts.name +
            "\n width: " + opts.width +
            "\n height: " + opts.height +
            "\n color: " + opts.color +
            "\n style: background-color:" + opts.style.backgroundColor +
            "\n style margin: " + opts.style.margin +
            "\n style border: " + opts.style.border +
            "\n style border-radius: " + opts.style.borderRadius +
            "\n style padding: " + opts.style.padding +
            "\n style vertical-align: " + opts.style.verticalAlign +
            
            "\n\n ___ defaulted props: values ___"  +
            "\n size: " + opts.size +
            "\n dialWidth: " + opts.dialWidth + 
            "\n processRoundEdge: " + opts.progressRoundEdge +

            "\n\n ___ computed props: values ___"  +
            "\n cX: " + opts.cX +
            "\n cY: " + opts.cY +
            "\n radius: " + opts.radius +
            "\n diameter: " + opts.diameter +    
            "\n circumference: " + Math.round(opts.circumference) +
            "\n r: " + r +
            "\n d: " + d +
            "\n A: " + A 
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
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                { renderBorderBox() }
                { renderContentBox() }
                
                
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
                    //viewBox="0 0 100 100"
                    viewBox={`0 0 ${size} ${size}`}
                    preserveAspectRatio="xMidYMid meet"
                >
                    <text
                        display="" 
                        x="50%" 
                        y="60%" 
                        textAnchor="middle"
                        stroke="#fff"
                        fill="#fff"
                        fontFamily="Montserrat, Arial, sans-serif"
                        //fontFamily="serif"
                        //fontFamily="monospace"
                        //fontFamily="Brush Script MT, Brush Script, Segoe Script, cursive"
                        fontSize={30}
                        //style={{filter:"url(#glow)"}}
                    >
                        <tspan>{this.props.value}</tspan>
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
                        fontSize="38"
                        fontWeight="600"
                    >
                        <tspan>{this.props.name}</tspan>
                    </text>
                </svg>
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
                        //fill="url(#linearGradient)"
                        fillOpacity="0.5"
                    />
                    // content box 
                    <rect
                        display=""
                        x="5%"
                        y="29%"
                        rx="2"
                        width="90%"
                        height="42%"
                        stroke="#333"
                        strokeWidth={1}
                        strokeOpacity="0.5"
                        fill="url(#linearGradient)"
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
                        strokeWidth={5}
                        strokeOpacity="1"
                        fill="url('#radialGradient')"
                        fillOpacity="1"
                    />
                    // content ring
                    <circle
                        display=""
                        cx="50%"
                        cy="50%"
                        r="120"
                        stroke="#333"
                        strokeWidth={1}
                        strokeOpacity="0.5"
                        fill="url('#radialGradient')"
                        fillOpacity="0.3"            
                    />
                </g>  
            </svg>
        )
    }
}

const renderBorderBox = () => (
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
        fill="url(#linearGradient)"
        fillOpacity="0.75"
        className="border-box"
    />
);

const renderContentBox = () => (
    <rect
        display=""
        x="5%"
        y="29%"
        rx="2"
        width="90%"
        height="42%"
        stroke="#333"
        strokeWidth={1}
        strokeOpacity="0.5"
        fill="url(#linearGradient)"
        fillOpacity="0.5"
        className="content-box"            
    />
);

N2KProduct.defaultProps = {   
    // Gauge 
    size: 100,
    
    // Dial
    dialWidth: 3,
    dialColor: "#d2d3d4",   
    
    // Progress
    progressWidth: 3,
    progressColor: ['#ce4b99', '#b1c94e', '#377bbc'],   
    //progressColor: ['tomato', 'lightgreen', 'darkblue'], 
    progressRoundEdge: true,
        
    dash: [85, 15, 30],
    gap: [15, 85, 70],
    offset: [25, 40, 65],
    
    //dash: [40, 20, 30],
    //gap: [60, 80, 70],
    //offset: [25, 85, 65],
    
    // Ticks
    
    // Needles
    
    // Labels
};

export default N2KProduct;

// eof

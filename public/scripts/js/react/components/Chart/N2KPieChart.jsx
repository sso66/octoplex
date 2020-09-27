// N2KPieChart.jsx
console.log("Mounting N2KPieChart... <N2KPieChart />");
// currentSegmentOffset = (circumference - allPreceedingSegmentsTotalLength) + firstSegementOffset

import React from 'react';
import './pie-chart.sass'

const RADIUS = 15.91549430918954;

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
        strokeOpacity="0.5"
        fill="#999"
        fillOpacity="0.5"            
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
        fill="#fff"
        fillOpacity="0.1"            
    />
);

const renderDonutHole = (opts) => (
    <circle
        display=""
        className="donut-hole"
        cx={21}
        cy={21}
        //r={15.91549430918954}
        r={RADIUS}
        fill="#fff"
    />
);

const renderDonutRing = (opts) => (
    <circle
        display=""
        className="donut-ring"
        cx={21}
        cy={21}
        //r={15.91549430918954}
        r={RADIUS}
        strokeWidth={3}
        stroke="#d2d3d4"
        fill="transparent"
    />
);

const renderDonutSegmentA = (opts) => (
    <circle
        display=""
        className="donut-segment"
        cx={21}
        cy={21}
        //r={15.91549430918954}
        r={RADIUS}
        strokeWidth={3}
        stroke="#ce4b99"
        //strokeDasharray="85 15"
        //strokeDashoffset={25}
        strokeDasharray="40 60"
        strokeDashoffset={25}
        fill="transparent"
    />
);

const renderDonutSegmentB = (opts) => (
    <circle
        display=""
        className="donut-segment"
        cx={21}
        cy={21}
        //r={15.91549430918954}
        r={RADIUS}
        strokeWidth={3}
        stroke="#b1c94e"
        //strokeDasharray="15 85"
        //strokeDashoffset={40}
        strokeDasharray="20 80"
        strokeDashoffset={85}
        fill="transparent"
    />
);

const renderDonutSegmentC = (opts) => (
    <circle
        display=""
        className="donut-segment"
        cx={21}
        cy={21}
        //r={15.91549430918954}
        r={RADIUS}
        strokeWidth={3}
        stroke="#377bbc"
        strokeDasharray="30 70"
        strokeDashoffset={65}
        fill="transparent"
    />
);    
       
class N2KPieChart extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentValue: 0,
        }
        
        this.handleClick = this.handleClick.bind(this);
    }   
    
    handleClick(evt) {
        // todo
    }  
    
    render() {
        let opts = Object.assign({}, this.props);
        
        let {
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
        } = opts;

        let cX = 1;
        let cY = 1;
        let radius = 0.5;
        let diameter = 2 * radius;
        let circumference = 2 * Math.PI * radius;
        
        opts = Object.assign(opts, {
            cX,
            cY,
            radius,
            diameter,
            circumference    
        });
        
        console.log (
            "\n cX: " + opts.cX +
            "\n cY: " + opts.cY +
            "\n radius: " + opts.radius +
            "\n diameter: " + opts.diameter +    
            "\n circumference: " + opts.circumference
        );
                
        return (
            <svg
                width={width} 
                height={height}
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={style}
                className={className}
                {...this.props}
            >
                <defs>
                </defs>
                <g display="">
                    {renderBorderBox(opts)}
                    {renderContentBox(opts)}
                    {renderBorderRing(opts)}
                    {renderContentRing(opts)}
                </g>
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
                
                // Reserved Header Content Area
                
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
                    viewBox="0 0 42 42"
                    preserveAspectRatio="xMidYMid meet"
                >
                    // Reserved Main Content Area
                    <g 
                        display="" 
                        className='chart'
                    >                        
                        { renderDonutHole(opts) }
                        { renderDonutRing(opts) }
                        { renderDonutSegmentA(opts) }
                        { renderDonutSegmentB(opts) }
                        { renderDonutSegmentC(opts) }
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
                            {this.props.value}
                        </text>
                        <text 
                            className="chart-label"
                            x="50%" 
                            y="50%"
                        >
                            {this.props.name}
                        </text>
                    </g>

                </svg>
                // bounding box: svgk-footer
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
                    // Reserved Footer Content Area
                </svg>
            </svg> 
        )
    }
}

N2KPieChart.propsTypes = {
}

N2KPieChart.defaultProps = {
    size: 42,
}

export default N2KPieChart;

// eof

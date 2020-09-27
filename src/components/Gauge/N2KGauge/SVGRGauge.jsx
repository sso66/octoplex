// File: src/components/Gauge/N2kGauge/SVGRGauge.jsx
// Desc: SVG-DOM -> HTML-DOM -> ReactDOM: Starter Kit
// Date: 10/11/2019
//..............................................................................
console.log("Mounting NestedSVG.jsx... <SVGRGauge />")
 
import React from 'react'


const renderDial = () => {
    return (
        <circle
            display=""
            r="25"
            cx="30"
            cy="50"
            className="dial" />
    )
}

const renderProgressTrack = () => {
    return (
        <circle 
            display=""
            r="25" 
            cx="50" 
            cy="50" 
            className="progress-track" />    
    )
}

const renderProgressLabel = () => {
    return (
        <text 
            display=""
            x="5" 
            y="50"
            className="progress-label"
        >
            SVGR Gauge
        </text>
    )  
}


class SVGRGauge extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        
        let opts = Object.assign({}, this.props);

        return (
            <div className="n2k-gauge">
                {/* parent SVG */}
                <svg 
                    width="300" 
                    height="300"                   
                    style={{ fill: '#fff', stroke: 'none', strokeWidth: 1}}
                > 
                    {/* child SVG */}
                    <svg 
                       viewBox="0 0 100 100" 
                       preserveAspectRatio="xMinYMin meet"
                    >
                        { renderDial() }
                        { renderProgressTrack() }
                        { renderProgressLabel() }>                    
                    </svg>
                </svg>
            </div>                        
        )
    }
}
    
export default SVGRGauge;

// eof



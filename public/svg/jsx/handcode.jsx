// Handcode.jsx
console.log("Mounting Handcode.jsx... <Handcode />");

import React from 'react';

const Handcode = (props) => {
    return (
        <div className="grid">
            <svg width="600" height="300">
                <defs>
                     <g>
                        <title>Handcodeor</title>
                        
                        <g id="leftalign">
                            {/* Left align icon made with lines */}
                            <line id="svg_1" x1="3" x2="48" y1="3" y2="3"/>
                            <line id="svg_2" x1="3" x2="65" y1="19" y2="19"/>
                            <line id="svg_3" x1="3" x2="48" y1="35" y2="35"/>
                            <line id="svg_4" x1="3" x2="65" y1="51" y2="51"/>
                        </g>
                        
                        <g id="rightcaret">
                            {/* Right caret icon made with a polyline */}
                            <polygon points="35 23, 60 43, 35 63"/>  
                        </g>
                        
                        <g id="browser">
                            {/* Browser icon made with rectangle and lines */}
                            <rect height="60" id="svg_6" width="80" x="3" y="3"/>
                            <line id="svg_7" x1="3" x2="83" y1="19" y2="19"/>
                            <line id="svg_8" x1="20" x2="20" y1="3" y2="17"/>
                        </g>
                        
                        <symbol id="alert" viewBox="0 0 86 86">
                            {/* Alert icon made with ellipses and a line */}
                            <ellipse cx="43" cy="43" id="svg_9" rx="40" ry="40" fill="green"/>
                            <ellipse cx="43" cy="65" fill="red" id="svg_10" rx="5" ry="5"/>
                            <line id="svg_11" strokeWidth="8" x1="43" x2="43" y1="19" y2="48"/>
                        </symbol>
                        
                        <symbol id="play" viewBox="0 0 86 86">
                            {/* Play icon made with ellipse and polygon */}
                            <ellipse cx="43" cy="43" id="svg_12" rx="40" ry="40"/>
                            <polygon id="svg_13" points="35 23, 60 43, 35 63"/>
                        </symbol>
                        
                        <symbol id="download" viewBox="0 0 64 71">
                            {/* Download icon made with path */}
                            <path d="m18,3l28,0l0,37l15,0l-29,28l-29,-28l15,0l0,-37z" id="svg_14"/>
                        </symbol>
                     
                        <path d="m17.9025,134.08463l66.5,-116.375l66.5,116.375l-133,0z" fill="#FF0000" id="triangle" stroke="#000000" strokeWidth="5"/>
                     </g>
                </defs>
 
                <use href="#leftalign" x="100" y="100"></use>
                <use href="#rightcaret" x="300" y="100"></use>
                <use href="#browser" x="500" y="100"></use>
                <use href="#alert" x="100" y="200" width="100" height="100"></use>
                <use href="#play" x="300" y="200" width="100" height="100"></use>
                <use href="#download" x="500" y="200" width="100" height="100"></use>
                <use href="#triangle" x="470" y="300" width="100" height="100"></use>
            </svg>
        </div>
    )
}

export default Handcode;

// eof

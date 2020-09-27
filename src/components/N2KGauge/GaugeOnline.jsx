import React from 'react'

const SvgComponent = props  => (
        <svg
            className="gauge"
            //height="200"
            //width="200"
            viewBox="0 0 100 100"
            {...props}
        >
        <defs>
            <line
                id="tick"
                x1={92}
                y1={50}
                x2={96}
                y2={50}
                stroke="#fff"
                strokeWidth={1}
            />
        </defs>
        <g 
            transform="rotate(-90 50 50)"
        >
            <circle
                display=""
                cx={50}
                cy={50}
                r={45}
                fill="none"
                stroke="gray"
                strokeWidth={5}
            />

            <g className="ticks">
                <use href="#tick" transform="rotate(0 50 50)" />
                <use href="#tick" transform="rotate(10 50 50)" />
                <use href="#tick" transform="rotate(20 50 50)" />
                <use href="#tick" transform="rotate(30 50 50)" />
                <use href="#tick" transform="rotate(40 50 50)" />
                <use href="#tick" transform="rotate(50 50 50)" />
                <use href="#tick" transform="rotate(60 50 50)" />
                <use href="#tick" transform="rotate(70 50 50)" />
                <use href="#tick" transform="rotate(80 50 50)" />
                <use href="#tick" transform="rotate(90 50 50)" />
                <use href="#tick" transform="rotate(50 50 50)" />
                <use href="#tick" transform="rotate(110 50 50)" />
                <use href="#tick" transform="rotate(120 50 50)" />
                <use href="#tick" transform="rotate(130 50 50)" />
                <use href="#tick" transform="rotate(140 50 50)" />
                <use href="#tick" transform="rotate(150 50 50)" />
                <use href="#tick" transform="rotate(160 50 50)" />
                <use href="#tick" transform="rotate(170 50 50)" />
                <use href="#tick" transform="rotate(180 50 50)" />
                <use href="#tick" transform="rotate(190 50 50)" />
                <use href="#tick" transform="rotate(200 50 50)" />
                <use href="#tick" transform="rotate(210 50 50)" />
                <use href="#tick" transform="rotate(220 50 50)" />
                <use href="#tick" transform="rotate(230 50 50)" />
                <use href="#tick" transform="rotate(240 50 50)" />
                <use href="#tick" transform="rotate(250 50 50)" />
                <use href="#tick" transform="rotate(260 50 50)" />
                <use href="#tick" transform="rotate(270 50 50)" />
                <use href="#tick" transform="rotate(280 50 50)" />
                <use href="#tick" transform="rotate(290 50 50)" />
                <use href="#tick" transform="rotate(300 50 50)" />
                <use href="#tick" transform="rotate(310 50 50)" />
                <use href="#tick" transform="rotate(320 50 50)" />
                <use href="#tick" transform="rotate(330 50 50)" />
                <use href="#tick" transform="rotate(340 50 50)" />
                <use href="#tick" transform="rotate(350 50 50)" />
                <use href="#tick" transform="rotate(360 50 50)" />
            </g>
            <circle
                cx={50}
                cy={50}
                r={45}
                fill="none"
                stroke="#ff9"
                strokeWidth={5}
                strokeDasharray="565.4866776461628"
                strokeDashoffset={424.1150082346221}
                strokeLinecap="round"
                className="progress"
            />
          
            <g className="needle">
                <g 
                    transform="rotate(90 50 50)"
                >
                    <line
                        x1={50}
                        y1={50}
                        x2={90}
                        y2={50}
                        fill="none"
                        strokeWidth={1}
                        stroke="#f00"
                    />
                </g>
                
                <circle 
                    cx={50} 
                    cy={50} 
                    r={3} 
                    fill="#ff9" />
            </g>
            <text
                transform="rotate(90 100 100)"
                x={50}
                y={175}
                fontFamily="sans-serif"
                fontSize={8}
                textAnchor="middle"
                fill="#fff"
                stroke="#fff"
                
            >
                <tspan>{25}</tspan>
            </text>
            </g>
        </svg>
)

export default SvgComponent



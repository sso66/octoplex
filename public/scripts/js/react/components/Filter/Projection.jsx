import React from 'react'

const SvgComponent = props => (
  <svg baseProfile="tiny" viewBox="0 0 200 170" {...props}>
    <defs>
      <radialGradient
        id="prefix__a"
        gradientUnits="objectBoundingBox"
        cx={0.5}
        cy={0}
        r={1}
      >
        <stop offset={0} stopColor="#555" />
        <stop offset={1} />
      </radialGradient>
      <path
        id="prefix__b"
        fill="url(#prefix__a)"
        stroke="#000"
        d="M0 0h100v100H0z"
      />
    </defs>
    <g fontFamily="Arial Black" fontSize={100} textAnchor="middle" fill="#DDD">
      <g transform="matrix(.5 0 0 .5 45 10)">
        <use xlinkHref="#prefix__b" />
        <text x={45} y={80}>
          {'1'}
        </text>
      </g>
      <g transform="matrix(.75 0 0 .75 10 30)">
        <use xlinkHref="#prefix__b" />
        <text x={45} y={80}>
          {'2'}
        </text>
      </g>
      <g transform="matrix(.5 0 0 .5 105 10)">
        <use xlinkHref="#prefix__b" />
        <text x={45} y={80}>
          {'5'}
        </text>
      </g>
      <g transform="matrix(.75 0 0 .75 115 30)">
        <use xlinkHref="#prefix__b" />
        <text x={45} y={80}>
          {'4'}
        </text>
      </g>
      <g transform="translate(50 55)">
        <use xlinkHref="#prefix__b" />
        <text x={45} y={80}>
          {'3'}
        </text>
      </g>
    </g>
  </svg>
)

export default SvgComponent

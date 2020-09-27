import React from 'react'

const DryDropShadowSvgComponent = props => (
    <svg 
        width={150} 
        height={200} 
        viewBox="0 0 150 200" 
        {...props}>

        <defs>
          <filter id="drop-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation={2} result="blur" />
            <feOffset in="blur" dx={4} dy={4} result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <title>{'DropShadow Flower SVG File'}</title>
        
        <defs>
          <g id="petal">
            <path d="M 10 0 Q 27 -15 40 0 27 15 10 0" />
          </g>
          <g id="flower">
            <path
              d="M 50 50 Q 40 70, 70 100 T 70 150"
              style={{
                stroke: 'green',
                fill: 'none',
                strokeWidth: 3,
              }}
            />
            <path
              d="M 70 100 Q 80 70, 120 80, 90 75, 75 105"
              style={{
                stroke: 'none',
                fill: 'green',
              }}
            />
            <circle
              cx={40}
              cy={50}
              r={10}
              style={{
                fill: 'gray',
              }}
            />
            <g
              style={{
                stroke: 'black',
                fill: 'yellow',
              }}
            >
              <use xlinkHref="#petal" transform="translate(40,50)" />
              <use xlinkHref="#petal" transform="translate(40,50) rotate(40)" />
              <use xlinkHref="#petal" transform="translate(40,50) rotate(80)" />
              <use xlinkHref="#petal" transform="translate(40,50) rotate(120)" />
              <use xlinkHref="#petal" transform="translate(40,50) rotate(160)" />
              <use xlinkHref="#petal" transform="translate(40,50) rotate(200)" />
              <use xlinkHref="#petal" transform="translate(40,50) rotate(240)" />
              <use xlinkHref="#petal" transform="translate(40,50) rotate(280)" />
              <use xlinkHref="#petal" transform="translate(40,50) rotate(320)" />
            </g>
          </g>
        </defs>
      
        <use xlinkHref="#flower" />  
        <use
          xlinkHref="#flower"
          filter="url(#drop-shadow)"
          //transform="translate(4, 4)"
        />
    </svg>
)

export default DryDropShadowSvgComponent

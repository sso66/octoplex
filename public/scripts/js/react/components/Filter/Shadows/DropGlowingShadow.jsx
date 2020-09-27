// DropGlowingShadow.jsx
console.log( "Mounting DropGlowingShadow.jsx... <DropGlowingShadow />" );

import React from 'react'
import '../../../../assets/images/sky.jpg';
import '../../../../assets/images/cloth.jpg';

const DropGlowingShadow = props => (
    <svg 
        width={300} height={200} 
        viewBox="0 0 250 200" 
        {...props}
    >
        <defs>
            <filter id="flood-filter" x="0" y="0" width="100%" height="100%">
                <feFlood floodColor="#993300" floodOpacity="0.8" result="tint"/>
                <feComposite in="tint" in2="SourceGraphic" operator="in"/>
            </filter>
            
            <filter id="tile-filter" x="0" y="0" width="100%" height="100%">
                <feImage xlinkHref="cloth.jpg" width="32" height="32" result="cloth"/>
                <feTile in="cloth" result="cloth"/>
                <feComposite in="cloth" in2="SourceGraphic" operator="in"/>
            </filter>
            
            <filter id="sky-in" filterUnits="objectBoundingBox">
                <feImage xlinkHref="sky.jpg" result="sky" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none"/>
                <feComposite in="sky" in2="SourceGraphic" operator="in"/>
            </filter>
            
            <filter id="sky-out" filterUnits="objectBoundingBox">
                <feImage xlinkHref="sky.jpg" result="sky" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none"/>
                <feComposite in="sky" in2="SourceGraphic" operator="out"/>
            </filter>      
        
            <filter id="brightness-shadow" filterUnits="objectBoundingBox">
                <feImage xlinkHref="sky.jpg" result="sky" />
                
                <feComponentTransfer in="sky" result="sky">
                {/*
                    <feFuncB type="linear" slope={3} intercept={0} />
                    <feFuncR type="linear" slope={1.5} intercept={0.2} />
                    <feFuncG type="linear" slope={1.5} intercept={0.2} />
                */}
                    <feFuncB type="gamma" amplitude="1" exponent="0.2" offset="0"/>
                    <feFuncR type="gamma" amplitude="1" exponent="0.707" offset="0"/>
                    <feFuncG type="gamma" amplitude="1" exponent="0.707" offset="0"/>
                </feComponentTransfer>
                <feGaussianBlur in="SourceAlpha" stdDeviation={2} result="blur" />
                <feOffset in="blur" dx={4} dy={4} result="offsetBlur" />
                <feMerge>
                    <feMergeNode in="sky" />
                    <feMergeNode in="offsetBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>

            </filter>
        
            <filter 
                id="sky-shadow" 
                filterUnits="objectBoundingBox"
            >
                <feImage
                    xlinkHref="sky.jpg"
                    result="sky"
                    x={0}
                    y={0}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                />
                
                <feGaussianBlur in="SourceAlpha" stdDeviation={2} result="blur" />
                <feOffset in="blur" dx={4} dy={4} result="offsetBlur" />
                <feMerge>
                    <feMergeNode in="sky" />
                    <feMergeNode in="offsetBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        
            <filter id="glow">
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0.9 0 0 0 0 0.9 0 0 0 0 1 0"
                />
                <feGaussianBlur stdDeviation={2.5} result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        
            <filter id="drop-shadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation={2} />
            </filter>
        </defs>
        
        // shape Object content
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
        {/*    
        <image xlinkHref="sky.jpg" x={170} y={10} width={122} height={104} />

        <use
          xlinkHref="#flower"
          filter="url(#sky-shadow)"
          //filter="url(#brightness-shadow)"
          transform="translate(80,60)"
        />

        <use xlinkHref="#flower" filter="url(#sky-shadow)" />
        <use xlinkHref="#flower" />


        <use xlinkHref="#flower" transform="translate(10,10)" style={{ filter: "url(#sky-in)" }} />
        <use xlinkHref="#flower" transform="translate(170,10)" style={{ filter: "url(#sky-out)" }} />
        
        */}

        <use xlinkHref="#flower" transform="translate(0, 0)" style={{ filter: "url(#flood-filter)" }} />
        <use xlinkHref="#flower" transform="translate(110,0)" style={{ filter: "url(#tile-filter)"}} />
        <image xlinkHref="cloth.jpg" x="220" y="10" width="32" height="32"/>*/}      
        {/*        
        <text
          x={85}
          y={45}
          stroke="darkgreen"
          style={{
            filter: 'url(#glow)',
            fill: '#003333',
            stroke: 'lightgreen font-size:58',
          }}
        >
          {'Spring'}
          <tspan x={85} y={65}>
            {'Flower'}
          </tspan>
        </text>
        */}
    </svg>
)

export default DropGlowingShadow;

// eof

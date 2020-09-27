import React from 'react'

const DiffuseLighting = props => (
  <svg width={300} height={200} viewBox="0 0 300 200" {...props}>
    <defs>
      <path
        id="curve"
        d=" M 0 0  Q 5 20 10 10  T 20 20"
        style={{
          stroke: 'black',
          fill: 'none',
        }}
      />
      <filter
        id="diff-light"
        colorInterpolationFilters="sRGB"
        x={0}
        y={0}
        width="100%"
        height="100%"
      >
        <feImage xlinkHref="#curve" result="tile" width={20} height={20} />
        <feTile in="tile" result="tile" />
        <feDiffuseLighting
          in="tile"
          lightingColor="#ffffcc"
          surfaceScale={1}
          diffuseConstant={0.5}
          result="diffuseOutput"
        >
          <fePointLight x={0} y={50} z={50} />
        </feDiffuseLighting>
        <feComposite
          in="diffuseOutput"
          in2="SourceGraphic"
          operator="in"
          result="diffuseOutput"
        />
        <feBlend in="diffuseOutput" in2="SourceGraphic" mode="screen" />
      </filter>
    </defs>
    <circle
      id="green-light"
      cx={50}
      cy={50}
      r={50}
      style={{
        fill: '#060',
        filter: 'url(#diff-light)',
      }}
    />
  </svg>
)

export default DiffuseLighting

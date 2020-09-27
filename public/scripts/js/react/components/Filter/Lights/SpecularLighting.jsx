import React from 'react'

const SpecularLighting = props => (
  <svg width={300} height={200} viewBox="0 0 300 200" {...props}>
    <defs>
      <path
        id="curve"
        d="M 0 0 Q 5 20 10 10 T 20 20"
        style={{
          stroke: 'black',
          fill: 'none',
        }}
      />
      <filter
        id="spec-light"
        colorInterpolationFilters="sRGB"
        x={0}
        y={0}
        width="100%"
        height="100%"
      >
        <feImage xlinkHref="#curve" result="tile" width={20} height={20} />
        <feTile in="tile" result="tile" />
        <feSpecularLighting
          in="tile"
          lightingColor="#ffffcc"
          surfaceScale={1}
          specularConstant={1}
          specularExponent={4}
          result="specularOutput"
        >
          <feDistantLight elevation={25} azimuth={0} />
        </feSpecularLighting>
        <feComposite
          in="specularOutput"
          in2="SourceGraphic"
          operator="in"
          result="specularOutput"
        />
        <feComposite
          in="specularOutput"
          in2="SourceGraphic"
          operator="arithmetic"
          k1={0}
          k2={1}
          k3={1}
          k4={0}
        />
      </filter>
    </defs>
    <circle
      id="green-light"
      cx={50}
      cy={50}
      r={50}
      style={{
        fill: '#060',
        filter: 'url(#spec-light)',
      }}
    />
  </svg>
)

export default SpecularLighting

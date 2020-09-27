import React from 'react'

const SvgComponent = props => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    {...props}
  >
    <defs>
      <linearGradient
        id="button_surface"
        gradientUnits="objectBoundingBox"
        x1={1}
        x2={1}
        y1={0}
        y2={1}
      >
        <stop stopColor="#434343" offset={0} />
        <stop stopColor="#000000" offset={0.67} />
      </linearGradient>
      <filter
        id="virtual_light"
        filterUnits="objectBoundingBox"
        x={-0.1}
        y={-0.1}
        width={1.2}
        height={1.2}
      >
        <feGaussianBlur in="SourceAlpha" stdDeviation={1} result="alpha_blur" />
        <feSpecularLighting
          in="alpha_blur"
          surfaceScale={5}
          specularConstant={1}
          specularExponent={15}
          lightingColor="#FFFFFF"
          result="spec_light"
        >
          <fePointLight x={75} y={-400} z={250} />
        </feSpecularLighting>
        <feComposite in="SourceGraphic" in2="spec_light" operator="out" />
      </filter>
    </defs>
    <rect
      x={10}
      y={10}
      rx={15}
      ry={15}
      width={150}
      height={80}
      fill="url(#button_surface)"
      stroke="#363636"
      filter="url(#virtual_light)"
    />
    <text
      x={30}
      y={55}
      fill="white"
      fontFamily="Tahoma"
      fontSize={20}
      fontWeight={500}
    >
      {'\n    SVG Button\n  '}
    </text>
  </svg>
)

export default SvgComponent

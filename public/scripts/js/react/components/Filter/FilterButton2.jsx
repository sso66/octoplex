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
        <stop stopColor="#990000" offset={0} />
        <stop stopColor="#770000" offset={0.67} />
      </linearGradient>
      <filter
        id="virtual_light"
        filterUnits="objectBoundingBox"
        x={-0.1}
        y={-0.1}
        width={1.2}
        height={1.2}
      >
        <feGaussianBlur in="SourceAlpha" stdDeviation={2} result="alpha_blur" />
        <feOffset in="alpha_blur" dx={4} dy={4} result="offset_alpha_blur" />
        <feSpecularLighting
          in="alpha_blur"
          surfaceScale={5}
          specularConstant={1}
          specularExponent={20}
          lightingColor="#FFFFFF"
          result="spec_light"
        >
          <fePointLight x={-5000} y={-10000} z={10000} />
        </feSpecularLighting>
        <feComposite
          in="spec_light"
          in2="SourceAlpha"
          operator="in"
          result="spec_light"
        />
        <feComposite
          in="SourceGraphic"
          in2="spec_light"
          operator="out"
          result="spec_light_fill"
        />
        <feMerge>
          <feMergeNode in="offset_alpha_blur" />
          <feMergeNode in="spec_light_fill" />
        </feMerge>
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
      stroke="#360000"
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

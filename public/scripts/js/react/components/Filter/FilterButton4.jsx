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
      <linearGradient
        id="virtual_light"
        gradientUnits="objectBoundingBox"
        x1={0}
        x2={0}
        y1={0}
        y2={1}
      >
        <stop stopColor="#EEEEEE" offset={0} stopOpacity={1} />
        <stop stopColor="#EEEEEE" offset={0.4} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="reflection_fill"
        gradientUnits="objectBoundingBox"
        x1={0}
        y1={0}
        x2={0}
        y2={1}
      >
        <stop stopColor="#000000" offset={0.8} />
        <stop stopColor="#555555" offset={1} />
      </linearGradient>
      <mask id="reflection_mask" maskUnits="userSpaceOnUse">
        <rect
          x={0}
          y={0}
          width={220}
          height={100}
          fill="url(#reflection_fill)"
        />
      </mask>
    </defs>
    <g id="svg_button">
      <rect
        x={10}
        y={10}
        rx={15}
        ry={15}
        width={150}
        height={80}
        fill="url(#button_surface)"
        stroke="#363636"
      />
      <text
        x={30}
        y={55}
        fill="white"
        fontFamily="Tahoma"
        fontSize={20}
        fontWeight={500}
      >
        {'\n      SVG Button\n    '}
      </text>
      <rect
        x={12}
        y={12}
        rx={15}
        ry={15}
        width={146}
        height={76}
        fill="url(#virtual_light)"
        stroke="#FFFFFF"
        strokeOpacity={0.4}
      />
    </g>
    <use
      xlinkHref="#svg_button"
      mask="url(#reflection_mask)"
      transform="matrix(1,0,0,-1,0,182)"
    />
  </svg>
)

export default SvgComponent

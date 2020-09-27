// PictureIcon.jsx
console.log("Mounting SVG... <SVG />");

import React from "react";

const SVG = ({
    width = "100%",
    height = "100%",
    viewBox = "0 0 32 32",
    fill="white",
    stroke="black",
    strokeWidth="",
    display="",
    style={ 
        backgroundColor: "transparent", 
        padding: "3px", 
        border: "1px dotted blue"
    },
    className = "svg-icon",
    transform="",
}) => {
    // config parameters from the containers
    console.log({ width, height, fill, className, style })
    
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-icon ${className || ""}`}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>Picture Icon</title>
            <desc>N2K Picture</desc>
            <path
                display={display}
                stroke={stroke}
                strokeWidth={strokeWidth}
                fill={fill}
                transform={transform}
                d="
                    M 2.56635 12.9241C 0.708307 9.55549 0 6.83983 0 5.00558
                    C 0 3.17134 0.450658 2.64526 0.907953 2.22025
                    C 1.36525 1.79524 3.42732 0.523908 3.77867 0.286808
                    C 4.13002 0.0497085 5.47099 -0.41107 6.31193 0.798636
                    C 7.15287 2.00834 8.73646 4.43718 9.82825 6.05069
                    C 11.5415 8.33611 10.1766 9.33937 9.73572 9.94069
                    C 8.92447 11.0472 8.45734 11.3201 8.45734 12.6788
                    C 8.45734 14.0375 12.2545 17.8976 13.1625 18.8487
                    C 14.0635 19.7926 17.8471 23.1094 19.0195 23.2868
                    C 20.2002 23.4654 21.7807 22.2154 22.1168 21.8985
                    C 23.8263 20.586 24.7912 21.581 25.5787 22.0136
                    C 26.3661 22.4461 29.9239 24.663 31.0264 25.4103
                    C 32.0641 26.1576 31.9992 27.3125 31.9992 27.3125
                    C 31.9992 27.3125 29.859 30.7092 29.5996 31.1168
                    C 29.2753 31.5924 28.4971 32 26.746 32
                    C 24.995 32 23.1241 31.6802 18.6777 29.2349
                    C 15.0396 27.234 11.5714 24.1009 9.75551 22.2666
                    C 7.87475 20.4324 4.68876 16.772 2.56635 12.9241
                    Z"
            />
        </svg>
    )
} 
  
export default SVG;

// eof
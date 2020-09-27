// File: src/components/Gauge/N2KGauge/SimpleSVG.jsx
// Desc: Understanding SVG element and its attributes
// Date: 11/6/2019
//..............................................................................
console.log("Mounting SimpleSVG.jsx... <SimpleSVG />")

////////////////////////////////////////////////////////////////////////////////////////////////
// Use Cases:
//
// Viewport - width, height, depth 
// Perspective - x-axis, y-axis, z-axis
// Camera -  viewBox
// Projection - preserveAspectRatio
//
// 1. <svg width='240' height='240'>
// 2. <svg>
// 3. <svg width='240' height='240' viewBox='0 0 120 120'>
// 4. <svg viewBox='0 0 120 120'>
// 5. <svg width='240' height='240' viewBox='0 0 120 120' preserveAspectRatio='xMinYMin meet'>
// 6. <svg viewBox='0 0 120 120' preserveAspectRatio='xMinYMin meet'>

import React from 'react';


const SimpleSVG = () => {
 
    return (
        <div className="">
            <svg 
                width="240"
                height="240"
                viewBox="0 0 120 120"
            >
                <circle 
                    display=""
                    r="50" 
                    cx="50" 
                    cy="50" 
                    stroke="black"
                    fill= "red"
                     
                />
                
                <circle 
                    display=""
                    r="50" 
                    cx="55" 
                    cy="55" 
                    stroke="black"
                    fill= "yellow" 
                />
            </svg>
        </div>
    )
}

export default SimpleSVG;

// eof 

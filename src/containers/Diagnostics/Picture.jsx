// File: src/components/Diagnostics/Picture.jsx
// Desc: react childern prototype
// Date: 8/8/2019
//...............................................................................   
console.log( "Mounting Picture.jsx... <Picture />" );

import React, { Component } from 'react'


const Picture = ( props ) => {
    return (
        <div className="children">
            <img src={ props.src } className="picture" />
            { props.children }
        </div>            
    )
}

export default Picture;

// eof

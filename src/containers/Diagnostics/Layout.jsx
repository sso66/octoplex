// File: src/containers/Diagnostics/Layout.jsx
// Desc: pass multi childen to a react component with slots
// Date: 8/8/2019
//...............................................................................   
console.log( "Mounting Layout.jsx... <Layout />" );

import React, { Component } from 'react';


export default function Layout( props ) {
    return (
            <div className="layout">
                <div className="top">{ props.top }</div>
                <div className="left">{ props.left }</div>
                <div className="center">{ props.center }</div>
                <div className="bottom">{ props.bottom }</div>
                <div className="right">{ props.right }</div>
                <div className="middle">{ props.middle }</div>
            </div>
    )
}

// eof


// File: src/components/Site//Layout.jsx
// Desc: React Pattern: "slots" props at work
// Date: 8/11/2019
//..............................................................
 console.log( "Mounting Layout.jsx... <Layout />" );

 import React from "react";

 const Layout = ( props ) => {
     return (
         <div className="container">
             <div className="layout">
                 <div className="top">{ props.top }</div>
                 <div className="left">{ props.left }</div>
                 <div className="center">{ props.center }</div>   
                 <div className="bottom">{ props.bottom }</div>
                 <div className="right">{ props.right }</div>
             </div>
         </div>
     )
 }

 export default Layout;

 // eof
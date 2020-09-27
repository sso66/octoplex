// File: src/containers/Index.jsx
// Desc: apply React Children API
// Date: 8/24/2019 
//.............................................................................   
console.log( "Mounting Index.jsx... <Index />" );

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from "../components/Site/Nav/Navbar";

export class Index extends React.Component {
    render() {
        
        const { store } = this.props;
                          
        return (
             <div className="children">
                 <Navbar store={ store } /> 
                 
                 <div className="children">
                     { this.props.children }
                 </div>
             </div>
        )
    }
}

export default connect( state => ({
    
}))(Index);

// eof

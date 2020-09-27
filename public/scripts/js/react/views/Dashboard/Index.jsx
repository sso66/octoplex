// File: src/containers/Index.jsx
// Desc: react children api
// Date: 8/8/2019 
//...............................................................................   
console.log( "Mounting Index.jsx... <Index />" );

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from "../components/Site/Nav/Navbar";


export class Index extends React.Component {
    render() {
        
        const { actions } = this.props;
            
        console.log( "Testing ReduxAPI bindActionCreators(DateTime.actionCreators, dispatch) actions.currentTime.fetchNewTime />: " 
                    + actions.currentTime.fetchNewTime );
              
        return (
             <div className="app">
                 <Navbar actions={ actions } /> 
                 
                 <div className="children">
                     { this.props.children }
                 </div>
             </div>
        )
    }
}


export default connect( state => ({
    currentUser: state.currentUser 
}))(Index);

// eof

// File: src/views/OceanAlexander/Home.jsx
// Desc: marine digital dashboard ui
// Date: 8/16/2019
//...............................................................................
console.log( "Mounting OceanAlexander/Home.jsx... <Home />" );

import React from 'react';
import { connect } from 'react-redux';
//import { actionCreators } from '../../redux/modules/DateTime/DateTimeState';
import { actionCreators } from '../../redux/actionCreators';

import ShowTabGroupA  from '../../containers/ShowTabs/ShowTabGroupA';
import ShowTabGroupB  from '../../containers/ShowTabs/ShowTabGroupB';
import StatusIndicators  from '../../containers/SIUMonitor/StatusIndicators';
import logo from '../../assets/images/ocean-alexander-logo.png';
import brand from '../../assets/images/ocean-alexander-pix.png';


export const Home = ( props ) => {
    
    return (
        <div>
            <ShowTabGroupA />  
            <ShowTabGroupB />
            <StatusIndicators />    

            <div className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                        <div className="board">
                            <embed 
                                src={ brand } 
                                alt='Ocean Alexander' 
                                className="brand animated heartBeat slow" 
                            />
                            <img 
                                src={ logo } 
                                alt='Ocean Alexander' 
                                className="logo" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="section">
                <span className="register">N2KView &reg; - Vessel Monitoring and Control System</span>
                
                <span className="current-time">   
                    <button className="button is-dark" onClick={ props.updateTime }>
                            Now:&nbsp;&nbsp;{ props.currentTime.toLocaleString() }
                    </button>
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return {
        //currentTime: state.currentTime            // as module stand-alone option
        currentTime: state.timeSIU.currentTime      // as combineReducers option
    }
}

const mapDispatchToProps = ( dispatch ) => ({
   updateTime: () => dispatch( actionCreators.fetchNewTime() )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( Home );

// eof


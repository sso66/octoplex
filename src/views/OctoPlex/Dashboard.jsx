// File: src/views/OctoPlex/Dashboard.jsx
// Desc: Marine Digital Dashboard UI: RWD-SPA Mobile
// Date: 8/24/2019
//...............................................................................
console.log( "Mounting Dashboard.jsx... <Dashboard />" );

import React from 'react';
import { connect } from 'react-redux';

//import { actionCreators } from '../../redux/modules/DateTime/DateTimeState';
import { actionCreators } from '../../redux/actionCreators';
import logo from '../../assets/images/octoplex-logo-primary-black.png';

import N2KGauge from '../../components/N2KGauge/Speedometer'
//import N2KGauge from '../../components/N2KGauge/N2KGauge'
//import N2KGauge from '../../components/RadialGauge/RadialGauge'
//import N2KGauge from '../../components/AbstractGauge/AbstractGauge'

function SVGTimer( opts ) {
    
    return (
        <svg>
            <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="xMinYMin"
            >
                <text
                    display=""
                    x="1%"
                    y="15%"
                    className="trademark"
                >
                    <tspan>N2KView &reg; - Vessel Monitoring and Control System</tspan>
                </text>
        
                <text
                    display=""
                    x="1%"
                    y="35%"
                    stroke="none"
                    fill="#666"
                    style={{
                        fontSize: 0.9 + 'em', 
                        fontFamily: 'impact, sans-serif',
                        fontWeight: 300,
                        letterSpacing: 0.3
                    }}
                >
                    <tspan>Now: {opts.currentTime}</tspan>
               </text>
            </svg>
        </svg>
    );
}

// design ~> develop ~> deploy
export const Dashboard = ( props ) => {

    return (
        <div className="board">

            <div className="hero is-black">
                <h2 className="">Marine Digital Dashboard UI</h2>
            </div>   
            <div>
              <h3>N2K Gauge</h3>
             <N2KGauge />             
            </div>
            <div className="section">
                <div className="container">
                    <figure className="level is-mobile">
                        <img src={logo} alt='N2KView Brand' className="" width="400px" />
                    </figure>
                    <div className="box">
                        <p className="title is-6">N2KView &reg; - Vessel Monitoring and Control System</p>
                        <p className="subtitle is-6">                        
                            Now: { props.currentTime.toString() }
                        </p>
                    </div>
    
                    <div className="box">
                        <SVGTimer currentTime={ props.currentTime.toLocaleString( 'en-GB', { timeZone: 'UTC' } ) } />
                        <SVGTimer currentTime={ props.currentTime.toLocaleString( 'ko-KR', { timeZone: 'UTC' } ) } />
                    </div>                        
                    <div className="box">
                        <a href="#" className="button is-medium is-black" onClick={ props.updateTime }>Update Time</a>
                        <a href="#" className="css-button" onClick={ props.updateTime }>Update Time</a>
                    </div> 
                 
                 
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return {
        //currentTime: state.currentTime            // as module stand-alone option
        currentTime: state.timeSIU.currentTime      // as combineReducers option
     };
}

const mapDispatchToProps = ( dispatch ) => ({
    updateTime: () => dispatch( actionCreators.fetchNewTime()),   
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard); 

// eof

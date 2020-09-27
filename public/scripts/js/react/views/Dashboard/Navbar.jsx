// File: src/components/Site/Nav/Navbar.jsx
// Desc: Marine Digital Dashboard UI
// Date: 8/12/2019
//...............................................................................   
console.log( "Mounting Navbar.jsx... <Navbar />" );

import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export const Navbar = ( { actions } ) => {
    
    console.log( "Testing ReduxAPI bindActionCreators(DateTime.actionCreators, dispatch) actions.currentTime.fetchNewTime />: " 
                    + actions.currentTime.fetchNewTime );
   
    return ( 
        <div className="">
            <nav>       
                {/*
                <Link to='/about'>About</Link>
                <Link to='/fresh-water-tank-level'>Fresh Water Tank Level</Link>
                <Link to='/head-system-1'>Head System 1</Link>
                <Link to='/vessel-status'>Vessel Status</Link>
                <Link to='/environment'>Environment</Link>
                <Link to='/bilge-status'>Bilge Status</Link>
                
                */}
                {/* If we have a logged in user, show the login 
                { 
                    currentUser.isLoggedIn ? 
                    <Link to='/logout'>Logout</Link> :  
                    <Link to='/login'>Login</Link>
                <Link to='/port-engine'>Port Engine</Link>
                <Link to='/fuel-tank-level'>Fuel Tank Level</Link>
                <Link to='/github-view-controller'>GitHub</Link>
                <Link to='/prototype'>Prototype</Link>

                <Link to='/aircheap'>Air Cheap</Link>
                <Link to='/startup-disclaimer'>Startup Disclaimer</Link>
                <Link to='/operational-mode'>Operational Mode</Link>
                <Link to='/three-container'>Three 3D Scene</Link>
                <Link to='/flux-view-controller'>Flux View</Link>
                <Link to='/n2k-active-button-view-controller'>Active Buttons</Link>        
                <Link to='/n2k-analog-clock'>Analog Clock</Link>
                <Link to='/n2k-anchor-watch-view-controller'>Anchor Watch</Link>
                <Link to='/n2k-attitude-indicator'>Attitude Indicator</Link>
                <Link to='/n2k-bargraph'>Bar Graph</Link>
                <Link to='/n2k-borderless-bar-view-controller'>Borderless Bar</Link>
                <Link to='/n2k-cardinal'>Cardinal</Link>
                <Link to='/n2k-circuit-breaker-switch-view-controller'>Circuit Breaker / Switch</Link>
                <Link to='/n2k-course-up-rose-view-controller'>Course Up Rose</Link>
                <Link to='/n2k-digital'>Digital</Link>
                <Link to='/n2k-digital-counter'>Digital Counter</Link>
                <Link to='/n2k-dometic-air-conditioner-heater-controller'>Dometic Air Conditioning / Heater</Link>
                <Link to='/n2k-dometic-ice-maker-controller'>Dometic Ice Maker</Link>
                <Link to='/n2k-gauge'>Gauge</Link>          
                <br /><br />
                <Link to='/n2k-gps-status-view-controller'>GPS Status</Link>
                <Link to='/n2k-graphs-view-controller'>Graphs</Link>
                <Link to='/n2k-inclinometer-view-controller'>Inclinometer</Link>     
                <Link to='/n2k-indicators-view-controller'>Indicators</Link>  
                <Link to='/n2k-indicator-bean-view-controller'>Indicator Bean</Link>                 
                <Link to='/n2k-moon-phase-view-controller'>Moon Phase</Link>
                <Link to='/n2k-north-up-rose-view-controller'>North Up Rose</Link>
                <Link to='/picture-icon'>Picture</Link>
                <Link to='/n2k-push-button-view-controller'>Push Buttons</Link>
                <Link to='/n2k-rate-of-turn-view-controller'>Rate of Turn</Link>
                <Link to='/n2k-rudder-angle-order-view-controller'>Rudder Angle / Order</Link>
                <Link to='/n2k-signal-strength-view-controller'>Signal Strength</Link>
                <Link to='/n2k-tank-view-controller'>Tank</Link>                        
                <Link to='/n2k-text'>Text</Link>
                <Link to='/n2k-timer'>Timer</Link>
                <Link to='/n2k-vacuum-gauge-view-controller'>Vacuum Gauge</Link>
                <Link to='/n2k-video-icon'>Video</Link>
                <Link to='/n2k-wind-angle-view-controller'>Wind Angle</Link>
                <Link to='/n2k-watermaker-view-controller'>Watermaker</Link>
                <br /><br />
                <Link to='/speedometer'>Speedometer</Link>
                <Link to='/svg-meter'>SVG Meter</Link>
                <Link to='/svg-filter'>SVG Filter</Link>
                <Link to='/handcodedsvg'>Handcoded SVG</Link>
                <Link to='/symbol'>SVG Defs & Symbol</Link>
                <Link to='/chart'>SVG Pie Chart</Link>
            */}
            </nav>
            
            {/* React Router DOM v4 */} 
            <nav className="">
                <div className="links"> 
                    <span><Link to='/'>Home</Link></span>
                    
                    <span><NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink></span>
                    <span><NavLink to="/admin-app" className="link">Application Admin</NavLink></span>
                    <span><NavLink to="/login-app" className="link">Application Login</NavLink></span>
                                       
                    <span><Link to="/category">Category</Link></span>
                    <span><Link to="/products">Products</Link></span>
                    <span><Link to="/admin-sys">System Admin</Link></span>

                    <span><NavLink to='/login' className="link">Login</NavLink></span>                 
                    <span><NavLink to='/dashboard' className="link">Dashboard</NavLink></span>
                    
                </div>
            </nav>


        </div>
    );
}

export default Navbar;

// eof

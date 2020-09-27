// File: src/components/Site/Main.jsx
// Desc:  Marine Digital Dashboard UI 
// Date: 8/15/2019
//...............................................................................   
console.log( "Mounting Main.jsx... <Main />" );

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// __________ Ocean Alexander Pages __________
import Home from '../../views/OceanAlexander/Home';

import Login from '../../views/OceanAlexander/Login';
import PortGenset from '../../views/OceanAlexander/PortGenset';
import NavigationLights from '../../views/OceanAlexander/NavigationLights';
import ACMainBreakers from '../../views/OceanAlexander/ACMainBreakers';
import ACPowerSelect from '../../views/OceanAlexander/ACPowerSelect';
import BreakerPanels from '../../views/OceanAlexander/BreakerPanels';
import DCPanel1 from '../../views/OceanAlexander/DCPanel1';
import ACDCPower from '../../views/OceanAlexander/AC-DCPower';
import PortShorePower from '../../views/OceanAlexander/PortShorePower';
import Lights from '../../views/OceanAlexander/Lights';
import Diagnostics from '../../views/OceanAlexander/Diagnostics';
import QuickStart from '../../views/OceanAlexander/QuickStart';

//import About from '../../views/OceanAlexander/About';
//import PortEngine from '../../views/OceanAlexander/PortEngine';
//import FuelTankLevel from '../../views/OceanAlexander/FuelTankLevel';
//import FreshWaterTankLevel from '../../views/OceanAlexander/FreshWaterTankLevel';
//import HeadSystem1 from '../../views/OceanAlexander/HeadSystem1';
//import VesselStatus from '../../views/OceanAlexander/VesselStatus';
//import Environment from '../../views/OceanAlexander/Environment';
//import BilgeStatus from '../../views/OceanAlexander/BilgeStatus';


// __________ Octoplex Prototypes: 9/5/18 - 12/10/18 __________
import Dashboard from '../../views/OctoPlex/Dashboard';
//import StartupDisclaimer from '../../views/StartupDisclaimer/StartupDisclaimer';
//import OperationalMode from '../../views/OperationalMode/OperationalMode';
//import iframeSVGEdit from '../../views/iframeSVGEdit';

//import GitHubViewController from '../../views/GitHub/GitHubViewController';
//import ThreeContainer from '../../three/ThreeContainer';
//import FluxViewController from '../../flux/components/FluxCartApp';
//import MeterIcon from '../../containers/AvailableComponentTypes/Meter/MeterIcon';
//import Filter from '../../containers/AvailableComponentTypes/Filter/FilterEffect';
//import HandcodedSvg from '../../containers/AvailableComponentTypes/Handcoded/HandcodedSvg'
//import Icons from '../../containers/AvailableComponentTypes/Symbol/Icons'
//import PieChart from '../../containers/AvailableComponentTypes/Chart/PieChart'
//import Prototype from '../../containers/Prototype/N2KPrototype'
//import AirCheap from '../../views/OctoPlex/AirCheap';

{/* React Router demos */} 
import Roster from '../../views/Router/Roster';
import AdminSys from "../../views/Router/AdminSys";
import LoginSys, {fakeAuth} from "../../views/Router/LoginSys";
import PrivateRoute from "../../views/Router/PrivateRoute";
import Category from "../../views/Router/Category";
import Products from "../../views/Router/Products";
import AdminApp from "../../views/Router/AdminApp";
import LoginApp from "../../views/Router/LoginApp";
import Contact from "../../views/Router/Contact";


const Main = ( props ) => (
    <div className="main">
        <main>
            <Switch>      
                // __________ Ocean Alexander Pages 7/12/2019 __________              
                <Route path='/home' component={Home}  />
                <Route path='/ac-power-select' component={ACPowerSelect} />
                <Route path='/ac-main-breakers' component={ACMainBreakers} />
                <Route path='/breaker-panels' component={BreakerPanels} />
                <Route path='/ac-dc-power' component={ACDCPower} />
                <Route path='/diagnostics' component={Diagnostics} />
                <Route path='/login' component={Login}/>
                <Route path='/port-genset' component={PortGenset} />
                <Route path='/quick-start' component={QuickStart} /> 
                <Route path='/lights' component={Lights} />
                <Route path='/navigation-lights' component={NavigationLights} />
                <Route path='/dc-panel-1' component={DCPanel1} />
                <Route path='/port-shore-power' component={PortShorePower} />
                {/*
                <Route path='/about' component={About}/>
                <Route path='/port-engine' component={PortEngine} />            
                <Route path='/fuel-tank-level' component={FuelTankLevel} />
                <Route path='/port-genset' component={PortGenset} />
                <Route path='/fresh-water-tank-level' component={FreshWaterTankLevel} />
                <Route path='/head-system-1' component={HeadSystem1} />
                <Route path='/vessel-status' component={VesselStatus} />
                <Route path='/environment' component={Environment} />
                <Route path='/bilge-status' component={BilgeStatus} />
                <Route path='/startup-disclaimer' component={StartupDisclaimer} />
                <Route path='/operational-mode' component={OperationalMode} />
                <Route path='/n2k-buttons' component={N2KButtons} />           
                <Route path='/three-container' component={ThreeContainer} />
                <Route path='/flux-view-controller' component={FluxViewController} />
                <Route path='/svg-meter' component={MeterIcon} />
                <Route path='/svg-filter' component={Filter} />
                <Route path='/handcodedsvg' component={HandcodedSvg} />
                <Route path='/symbol' component={Icons} />
                <Route path='/chart' component={PieChart} />
                */}
                // __________ Octoplex Prototypes: 9/5/18 - 12/10/18 __________
                
                {/* <Route path='/github-view-controller' component={GitHubViewController} />
                <Route path='/prototype' component={Prototype} />
     
                */}
                <Route exact path='/' component={Dashboard} />
                <Route path='/roster' component={Roster} />
                            
                {/*<Route path='/aircheap' component={AirCheap} />*/}
                
                // __________ N2K Available Component Types: 1/28/19 - 7/12/19 __________
                {/*
                <Route path='/n2k-analog-clock' component={AnalogClock} />
                <Route path='/n2k-attitude-indicator' component={AttitudeIndicator} />
                <Route path='/n2k-bargraph' component={BarGraph} />
                <Route path='/n2k-digital' component={N2KDigital} />   
                <Route path='/n2k-digital-counter' component={DigitalCounter} />
                <Route path='/n2k-gauge' component={N2KGauge} />
                <Route path='/picture-icon' component={PictureIcon} />           
                <Route path='/n2k-text' component={N2KText} />
                <Route path='/n2k-timer' component={Timer} />
                <Route path='/n2k-video-icon' component={VideoIcon} />
                <Route path='/n2k-cardinal' component={N2KCardinal} />
                <Route path='/speedometer' component={Speedometer} />
                */}
            </Switch>     

            {/* React Router demos */} 
            <Switch>
                <Route path="/category" component={Category} />
                <Route path="/products" component={Products} />
                <Route path="/login-sys" component={LoginSys} />
                <PrivateRoute authed={ fakeAuth.isAuthenticated } path="/admin-sys" component={AdminSys} />
                
                <Route path="/contact" component={Contact} />
                <Route path="/login-app" component={LoginApp} />
                <Route path="/admin-app" component={AdminApp} />
                <Route path="/login-app" component={LoginApp} />
            {/*<Route render={ () => <h1>404 Error  </h1> } />*/}
            </Switch>

        </main>
    </div>        
)

export default Main;

//eof

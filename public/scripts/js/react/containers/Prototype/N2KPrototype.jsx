// N2KPrototype.jsx
console.log("Mounting N2KPrototype.jsx... <N2KPrototype />")

import React, {Component} from 'react';

// Prototype code
//import Icon from '../../components/Prototype/N2KPrototype';
//import Icon from '../../components/Prototype/LEDIndicator';
//import Icon from '../../components/Prototype/N2KAsideMiddle';

//import Icon from '../../components/AvailableComponentTypes/Meter/Meter';
//import Icon from '../../components/AvailableComponentTypes/Chart/N2KPieChart';
//import Icon from '../../components/AvailableComponentTypes/Chart/PieChart';
//import Icon from '../../components/AvailableComponentTypes/AnalogClock/N2KAnalogClock';
//import Icon from '../../components/AvailableComponentTypes/Misc/N2KEventList';

//import Icon from '../../components/AvailableComponentTypes/Gauge/RadialGauge/RadialGaugeView';

//import Icon from '../../components/AvailableComponentTypes/Filter/Gradients/GradientButton';
//import Icon from '../../components/AvailableComponentTypes/Filter/FilterButton1';
//import Icon from '../../components/AvailableComponentTypes/Filter/FilterButton2';
//import Icon from '../../components/AvailableComponentTypes/Filter/FilterButton3';
//import Icon from '../../components/AvailableComponentTypes/Filter/FilterButton4';


// Production code
import Item from '../../components/Text/N2KItem';
import Product from '../../components/Text/N2KProduct';
//import N2KActiveButton from '../../components/AvailableComponentTypes/ActiveButton/SVG-DOM/N2KActiveButton'
//import N2KPushButton from '../../components/AvailableComponentTypes/PushButton/SVG-DOM/N2KPushButton'

//import Icon from '../../components/Cardinal/N2KCardinal';
//import Icon from '../../components/Digital/N2KDigital';
//import Icon from '../../components/DigitalCounter/N2KDigitalCounter';
//import Icon from '../../components/Timer/N2KTimer';



import StarterBattery from '../../components/Gauge/StarterBattery/StarterBattery';
import AlternatorVoltage from '../../components/Gauge/AlternatorVoltage/AlternatorVoltage';
import CoolantTemperature from '../../components/Gauge/CoolantTemperature/CoolantTemperature';
import EngineLoad from '../../components/Gauge/EngineLoad/EngineLoad';
import EngineVoltage from '../../components/Gauge/EngineVoltage/EngineVoltage';
import OilPressure from '../../components/Gauge/OilPressure/OilPressure';
import Tachometer from '../../components/Gauge/Tachometer/Tachometer';
import WindDirectionAngle from '../../components/Gauge/WindDirectionAngle/WindDirectionAngle';

import BarGraphDatasource from '../../containers/BarGraph/BarGraphDatasource';

class N2KPrototype extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        } 
        
        this.handleClick = this.handleClick.bind(this);       
    }
    
    componentDidMount() {
    }
    
    componentDidUpdate(nextProps) {
    }
    
    componentWillUnmount() {
    }
    
    handleClick() {
        
    }

    render() {
        const svgContainer = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "no-wrap",
            justifyContent: "space-between",
            alignItems: "start",
            alignContent: "flex-start",
            svgContent: {
                //order: 0,
                //flex: 1,
                //alignSelf: "center",
                backgroundColor: "black",
                margin: "auto",
                border: "1px solid #fff",  
                borderRadius: "3px",
                padding: "5px",
                verticalAlign: "middle",
            }
        };
                
        return (
            <div className="board">
                <h1 className="title is-3">Available Component Types</h1>
                <h2 className="subtitle is-4">N2KGauge Prototype</h2>
                <figure className="gri">
                    <div style={svgContainer}>
                        <Item 
                            display=""
                            title="N2K Item"
                            value="00:00:00"
                            name="Units"
                            width={400}
                            height={400}
                            style={svgContainer.svgContent}
                        />
                        <Product 
                            display=""
                            title="N2K Product"
                            value="00:00:00"
                            name="Units"
                            width={400}
                            height={400}
                            style={svgContainer.svgContent}
                        />
                        <BarGraphDatasource
                            display=""
                            title="Stbd Fuel Tank"
                            value="58.1"
                            //name="%"
                            name="Volts"
                            width={400}
                            height={400}
                            fill="rgba(255,255,0, 0.9)"
                            style={svgContainer.svgContent}
                            //className="svg-icon"
                            //className="animated slideInLeft delay-2s slower"                            
                        /> 
                                               
                        <StarterBattery
                            display=""
                            title="Starter Battery"
                            value="14.4"
                            name="Volts"
                            width={400}
                            height={400}
                            style={svgContainer.svgContent}
                       />
                        <AlternatorVoltage
                            display=""
                            title="Alternator Voltage"
                            //value="00:00:00"
                            value="19.0"
                            //name="hh:mm:ss"
                            //name="RPM"
                            //name="gal(US)"
                            name="Volts"
                            //name="%"
                            //name="&deg;F"
                            //name="psi"
                            //name="knots"
                            width={400}
                            height={400}
                            color="yellow"
                            style={svgContainer.svgContent}
                        />
                        <CoolantTemperature
                            display=""
                            title="Coolant Temperature"
                            //title="Oil Pressure"
                            //title="Wind Direction / Angle"
                            value="220&deg;"
                            //value="00:00:00"
                            //name="%"
                            name="&deg;F"
                            width={400}
                            height={400}
                            style={svgContainer.svgContent}
                       />
                        <EngineLoad
                            display=""
                            title="Engine Load"
                            //value="SSW"
                            //value="00:00:00"
                            value="25&deg;"
                            //name="-87 dBm"
                            name="&deg;F"
                            width={400}
                            height={400}
                            style={svgContainer.svgContent}
                        />
                        <EngineVoltage
                            display=""
                            title="Engine Voltage"
                            value="24.0"
                            //value="00:00:00"
                            //name="%"
                            name="Volts"
                            width={400}
                            height={400}
                            style={svgContainer.svgContent}
                       />
                        <OilPressure
                            display=""
                            title="Oil Pressure"
                            //value="SSW"
                            //value="00:00:00"
                            value="11.0"
                            //name="-87 dBm"
                            name="psi"
                            width={400}
                            height={400}
                            style={svgContainer.svgContent}
                        />

                        <Tachometer
                            display=""
                            title="Tachometer"
                            //value="SSW"
                            //value="14.0"
                            //value="00:00:00"
                            value="2000"
                            //name="-87 dBm"
                            name="RPM"
                            width={400}
                            height={400}
                            style={svgContainer.svgContent}
                        />
                        <WindDirectionAngle
                            display=""
                            title="Wind Direction / Angle"
                            //value="SSW"
                            //value="00:00:00"
                            value="90"
                            //name="-87 dBm"
                            name="knots"
                            width={400}
                            height={400}
                            style={svgContainer.svgContent}
                        />
                    </div>
                </figure>
                <figcaption>Figure: N2K Prototype</figcaption>
                <div className="box" >
                    <div>
                        <div className="card">
                            <label htmlFor="volume">Meter&nbsp;
                                <input 
                                    type="range"
                                    name="meter" 
                                    min="0" 
                                    max="100"
                                />
                            </label>
                        </div>
                        <hr />
                        <div className="card">
                            <button className="glass">Submit</button>
                            <button className="glass">Clear</button>
                            <button className="glass">Play</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

N2KPrototype.propTypes = {
    // ...
}

N2KPrototype.defaultTypes = {
    // ...
}

export default N2KPrototype;

// eof

// PortGenset.jsx
console.log("Mounting PortGenset.jsx... <PortGenset />")

import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import OAImage from '../../assets/images/ocean-alexander.png';
import N2KActiveButton2x1  from '../../components/ActiveButton/N2KActiveButton2x1';

// Production code
import AlternatorVoltage from '../../components/Gauge/AlternatorVoltage/AlternatorVoltage';
import CoolantTemperature from '../../components/Gauge/CoolantTemperature/CoolantTemperature';
import OilPressure from '../../components/Gauge/OilPressure/OilPressure';

//import Digital from '../../components/Digital/N2KDigital';
//import Digital from '../../components/Text/N2KItem';
import Digital from '../../components/Text/N2KProduct';
import StarterBattery from '../../components/Gauge/StarterBattery/StarterBattery';

//import BankAccount from '../../containers/BankAccount/BankAccount';

const PortGenset = () => {
    const svgContainer = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "",
        justifyContent: "space-between",
        alignItems: "start",
        alignContent: "flex-start",
        svgContent: {
            //order: 1,
            //flex: 1,
            alignSelf: "center",
            backgroundColor: "black",
            margin: "auto",
        }
    };
            
    return (
        <div className="board">
            <section className="hero has-background-black-bis">
                <div className="container">
                    <img src={OAImage} alt='Ocean Alexander' className="oa-image"/>
                    <h2 className="glow">Port Genset</h2>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <figure className="gri">
                        <div style={svgContainer}>
                            <AlternatorVoltage
                                display=""
                                title="Alternator Voltage"
                                value="19.0"
                                name="Volts"
                                width={250}
                                height={250}
                                color="yellow"
                                style={svgContainer.svgContent}
                            />
                            <CoolantTemperature
                                display=""
                                title="Coolant Temperature"
                                value="220&deg;"
                                name="&deg;F"
                                width={300}
                                height={300}
                                style={svgContainer.svgContent}
                           />
                            <OilPressure
                                display=""
                                title="Oil Pressure"
                                value="11.0"
                                name="psi"
                                width={400}
                                height={400}
                                style={svgContainer.svgContent}
                            />
                            <Digital
                                display=""
                                title="Port Fuel Tank Remaining"
                                value="100"
                                name="gal(US)"
                                width={400}
                                height={400}
                                style={svgContainer.svgContent}                            
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
                        
                        </div>
                    </figure>
                </div>
            </section>   
                    <section className="section">
            <div className="container">
                <div className='level level-item -level-right'>
                        <N2KActiveButton2x1 name="Stbd Genset" />
                        <Link to='/port-shore-power'><N2KActiveButton2x1 name="Port Shore Power" /></Link>
                        <N2KActiveButton2x1 name="Stbd Shore Power" />
                        <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                </div>
            </div>
        </section>                        
                     
        </div>
    )
}

export default PortGenset;

// eof

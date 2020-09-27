// FuelTankLevel.jsx
console.log("Mounting FuelTankLevel.jsx... <FuelTankLevel />");

import React, { Component } from 'react';
import OAImage from '../../assets/images/ocean-alexander.png';
import Digital from '../../components/Digital/N2KDigital';
import BarGraphDatasource from '../../containers/BarGraph/BarGraphDatasource';
import StarterBattery from '../../components/Gauge/StarterBattery/StarterBattery';
import AlternatorVoltage from '../../components/Gauge/AlternatorVoltage/AlternatorVoltage';
import CoolantTemperature from '../../components/Gauge/CoolantTemperature/CoolantTemperature';

const FuelTankLevel = (props) => {
    const styles = {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "flex-start",
    };        
    
   return (
        <div>
            <section className="hero has-background-black-bis">
                <div className="container">
                    <img src={OAImage} alt='Ocean Alexander' className="oa-image"/>
                    <h1 className="glow">Fuel Tank Level</h1>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <div className="tile is-ancestor">
                    
                      <div className="tile is-parent is-vertical">
                        <card className="tile is-child pink post">
                            
                            <Digital
                                display=""
                                title="Port Fuel Tank Remaining"
                                value="100"
                                name="gal(US)"
                                width={250}
                                fill="green"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                                //className="svg-icon prototype"
                                //className="animated slideInLeft delay-2s slower"                            
                            />
                            <Digital
                                display=""
                                title="Stbd Fuel Tank Remaining"
                                value="25.4"
                                name="gal(US)"
                                width={250}
                                fill="green"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                                className="svg-icon"
                                //className="animated slideInLeft delay-2s slower"                            
                            />
                        </card>
                      </div>
                      <div className="tile is-vertical is-parent">
                        <card className="tile is-child pink post">
                            <BarGraphDatasource
                                display=""
                                title="Port Fuel Tank"
                                value="32.5"
                                name="gals(US)"
                                width={300}
                                height={350}
                                fill="green"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                                //className="svg-icon"
                                //className="animated slideInLeft delay-2s slower"                            
                            />
                            <BarGraphDatasource
                                display=""
                                title="Stbd Fuel Tank"
                                value="58.1"
                                name="%"
                                width={250}
                                height={250}
                                fill="yellow"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                                //className="svg-icon"
                                //className="animated slideInLeft delay-2s slower"                            
                            />
                        </card>
                      </div>
                      <div className="tile is-parent is-vertical">
                        <card className="tile is-child pink post">
                            <Digital
                                display=""
                                title="Main Fuel Tank Remaining"
                                value="50.9"
                                name="gal(US)"
                                width={250}
                                height={250}
                                fill="yellow"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                                //className="svg-icon"
                                //className="animated swing infinite delay-2s fast"                            
                            />
                        </card>
                        <card className="tile is-child black post">
                            <CoolantTemperature                                 
                                title="Coolant Temperature"
                                //value="00:00:00"
                                value="200&deg;"
                                name="&deg;F"
                                width={350}
                                height={350}
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }} 
                                />
                        </card>

                      
                        <card className="tile is-child black post">
                            <StarterBattery                                 
                                title="Main Fuel Remaining"
                                //value="00:00:00"
                                value="14.7"
                                name="gal(US)"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }} 
                                />
                        </card>

                      </div>

                      <div className="tile is-vertical is-parent">
                        <card className="tile is-child pink post">
                            <BarGraphDatasource
                                display=""
                                title="Main Fuel Tank"
                                value="135.2"
                                name="%"
                                width={250}
                                height={250}
                                fill="red"
                                //style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                            />
                            <Digital
                                display=""
                                title="Total Fuel Remaining"
                                value="00:00:00"
                                name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gal(US)"
                                width={250}
                                fill="red"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                                //className="svg-icon"
                                //className="animated swing infinite delay-2s slower
                                //className="animated slideInLeft infinite delay-1s slower"                            
                            />
                            <Digital
                                display=""
                                title="Total Fuel Remaining"
                                value="00:00"
                                name="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gal(US)"
                                width={250}
                                fill="red"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                                //className="svg-icon"
                                //className="animated swing infinite delay-2s slower"                            
                            />
                        </card>
                      </div>
                      
                    <div className="tile is-vertical is-parent">
                        <card className="tile is-child pink post">
                            <Digital
                                display=""
                                title="Total Fuel Remaining"
                                value="00:00:00"
                                name="gal(US)"
                                width={250}
                                fill="red"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                                //className="svg-icon"
                                //className="animated swing infinite delay-2s slower"                            
                            />
                        </card>
                        <card className="tile is-child dark post">
                            <StarterBattery                                 
                                title="Total Fuel Remaining"
                                //value="00:00:00"
                                value="14.7"
                                name="gal(US)"
                                width="200" 
                                //height="350"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                            />
                        </card>

                        <card className="tile is-child gold post">
                            <AlternatorVoltage                                
                                title="Alternator Voltage"
                                //value="00:00:00"
                                value="19.0"
                                name="volts"
                                width="400" 
                                //height="350"
                                style= {{ backgroundColor: "black", padding: "5px", border: "5px double black",  borderRadius: "5px" }}
                            />
                        
                        </card>
                      </div>
                    </div>
                </div>
            </section>                        

        </div>
    ) 
}

export default FuelTankLevel;

// eof

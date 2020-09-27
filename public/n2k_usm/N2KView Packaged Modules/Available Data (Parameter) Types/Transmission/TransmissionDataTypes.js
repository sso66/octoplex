// TransmissionDataTypes.js
console.log( "Mounting TransmissionDataTypes.js..." );

import { BarGraph, Digital, Gauge } from "./AvailableComponentTypes";

const TransmissionDataTypes = [
    
    Gear = {
        objectId: "DT-01",
        objectTypes: "Transmission",
        desc: "Displays the current gear of the transmission (forward, neutral, or reverse).",
        componentTypes: [ Digital ],
        instances: 253
    },
    TransmissionOilPressure = {
        objectId: "DT-02",
        objectTypes: "Transmission",
        desc: "Displays the pressure of the oil in the transmission.",
        componentTypes: [ Digital, Gauge ],
        instances: 253,
        units: ['kilopascals', 'bars', 'pounds/square inch']
    },
    TransmissionOilTemperature = {
        objectId: "DT-03",
        objectTypes: "Transmission",
        desc: "Monitors the temperature of the oil in the transmission",
        componentTypes: [ BarGraph, Digital, Gauge ],
        instances: 253
    },
];

export default TransmissionDataTypes;

// eof

// TransmissionAlerts.js
console.log( "Mounting TransmissionAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const TransmissionAlerts = [
    
    TransmissionOilPressure = {
        objectId: "AA-01",
        objectTypes: "Transmission",
        desc: "Monitors the pressure of the oil in the transmission.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    TransmissionOilTemperature = {
        objectId: "AA-01",
        objectTypes: "Transmission",
        desc: "Monitors the temperature of the oil in the transmission",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
];

export default TransmissionAlerts;

// eof

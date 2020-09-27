// HumidityAlerts.js
console.log( "Mounting HumidityAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const HumidityAlerts = [

    InsideHumidity = {
        objectId: "AA-01",
        objectTypes: "Humidity",
        desc: "Monitors the relative humidity from a humidity sensor set up with a source of 'Inside'",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    OutsideHumidity = {
        objectId: "AA-02",
        objectTypes: "Humidity",
        desc: "Monitors the relative humidity from a humidity sensor set up with a source of 'Outside'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    UserDefinednnnHumidity = {
        objectId: "AA-03",
        objectTypes: "Humidity",
        desc: "Monitors the relative humidity from a humidity sensor set up with a source of"
                + "'User Defined nnn', where nnn is a number from 128 to 144",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
];

export default HumidityAlerts;

// eof

// HeadingAlerts.js
console.log( "Mounting HeadingAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const HeadingAlerts = [

    Heading = {
        objectId: "AA-01",
        objectTypes: "Heading",
        desc: "Monitors the current heading of the vessel (the direction the vessel is pointing) relative"
                +" to true or magnetic north depending on the unit setting of the heading parameter.",
        alertClasses: [ CLASS_DIRECTION, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    RateOfTurn = {
        objectId: "AA-02",
        objectTypes: "Heading",
        desc: "Monitors the change in Heading of the vessel.",
        alertClasses: [ CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    Variation = {
        objectId: "AA-03",
        objectTypes: "Heading",
        desc: "Monitors the compass variation (Angle between True North and Magnetic North).",
        alertClasses: [ CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
];

export default HeadingAlerts;

// eof

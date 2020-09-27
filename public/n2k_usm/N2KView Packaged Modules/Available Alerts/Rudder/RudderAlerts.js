// RudderAlerts.js
console.log( "Mounting RudderAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const RudderAlerts = [
    
    RudderAngle = {
        objectId: "AA-01",
        objectTypes: "Anchor",
        desc: "Monitors the angle of the vessel’s rudder as indicated by the rudder sensor.",
        alertClasses: [ CLASS_ANCHOR_WATCH ],
        instances: 4,
        units: "degrees"
    }
];

export default RudderAlerts;

// eof

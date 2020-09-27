// AnchorWatchAlerts.js
console.log( "Mounting AnchorWatchAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const AnchorWatchAlerts = [
    
    Watch = {
        objectId: "AA-01",
        objectTypes: "Anchor",
        desc: "Monitors the vessel position relative to preset Latitude and Longitude",
        alertClasses: [ CLASS_DATA_UNAVAILABLE ],
        instances: 253
    }
];

export default AnchorWatchAlerts;

// eof

// VesselAlerts.js
console.log( "Mounting VesselAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const VesselAlerts = [

    Pitch = {
        objectId: "AA-01",
        objectTypes: "Vessel",
        desc: "Monitors the pitch of the vessel (rotation about the horizontal axis perpendicular to the ship’s keel).",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    PortTrimTab = {
        objectId: "AA-02",
        objectTypes: "Vessel",
        desc: "Monitors the position of the vessel’s Port Trim Tab.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ]
       },
    Roll = {
        objectId: "AA-03",
        objectTypes: "Vessel",
        desc: "Monitors the roll of the vessel (rotation about the horizontal axis parallel to the ship’s keel).",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      StarboardTrimTab = {
        objectId: "AA-04",
        objectTypes: "Vessel",
        desc: "Monitors the position of the vessel’s Starboard Trim Tab.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ]
      } 
];

export default VesselAlerts;

// eof

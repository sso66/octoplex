// SpeedDistanceAlerts.js
console.log( "Mounting SpeedDistanceAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const SpeedDistanceAlerts = [

      SpeedOverGround = {
        objectId: "AA-01",
        objectTypes: "SpeedDistance",
        desc: "Monitors the speed over ground of the vessel (relative to the earth, not the water).",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
  },
      SpeedThroughWater = {
        objectId: "AA-02",
        objectTypes: "SpeedDistance",
        desc: "Monitors the speed of the boat relative to the water.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TotalLog = {
        objectId: "AA-03",
        objectTypes: "SpeedDistance",
        desc: "Monitors the total distance traveled by the vessel since the log indicator was installed.",
         alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TripLog = {
        objectId: "AA-04",
        objectTypes: "SpeedDistance",
        desc: "Monitors the distance traveled by the vessel since the trip indication of the log indicator was last reset.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
  
];

export default SpeedDistanceAlerts;

// eof

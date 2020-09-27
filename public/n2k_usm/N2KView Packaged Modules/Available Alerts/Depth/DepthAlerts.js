// DepthAlerts.js
console.log( "Mounting DepthAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const DepthAlerts = [

      WaterBelowTransducer = {
        objectId: "AA-01",
        objectTypes: "Depth",
        desc: "Monitors the current reading from a depth transducer.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      WaterDepthIncludesOffset = {
        objectId: "AA-02",
        objectTypes: "Depth",
        desc: "Monitors the current reading from a depth transducer, plus the offset of the depth transducer..",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
];

export default DepthAlerts;

// eof

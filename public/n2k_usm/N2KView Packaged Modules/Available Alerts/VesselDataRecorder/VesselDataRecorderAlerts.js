// VesselDataRecorderAlerts.js
console.log( "Mounting VesselDataRecorderAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const VesselDataRecorderAlerts = [

    MemoryAvailable = {
        objectId: "AA-01",
        objectTypes: "VesselDataRecorder",
        desc: "Memory Available",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    MemoryUsed = {
        objectId: "AA-02",
        objectTypes: "VesselDataRecorder",
        desc: "Memory Used",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ]
       },
    PercentAvailable = {
        objectId: "AA-03",
        objectTypes: "VesselDataRecorder",
        desc: "Percent Available",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    PercentUsed = {
        objectId: "AA-04",
        objectTypes: "VesselDataRecorder",
        desc: "Percent Used ",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253    
     }, 
     Status = {
        objectId: "AA-04",
        objectTypes: "VesselDataRecorder",
        desc: "VDR Status",
        alertClasses: [ CLASS_NOT_RECORDING, CLASS_DATA_UNAVAILABLE ]
      } 
 ];

export default VesselDataRecorderAlerts;

// eof

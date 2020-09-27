// GPSAlerts.js
console.log( "Mounting GPSAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const GPSAlerts = [

    CourseOverGround = {
        objectId: "AA-01",
        objectTypes: "GPS",
        desc: "Monitors the current course over ground.",
        alertClasses: [ CLASS_DIRECTION, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    GPSStatus = {
        objectId: "AA-02",
        objectTypes: "GPS",
        desc: "Monitors the current operating mode and status of the currently selected GPS received.",
        alertClasses: [ CLASS_GPS_QUALITY, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    LatLon = {
        objectId: "AA-03",
        objectTypes: "GPS",
        desc: "Monitors the current speed over ground.",
        alertClasses: [ CLASS_INSIDE_RADIUS, CLASS_OUTSIDE_RADIUS, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    SpeedOverGround = {
        objectId: "AA-04",
        objectTypes: "GPS",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Engine Room'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
];

export default GPSAlerts;

// eof

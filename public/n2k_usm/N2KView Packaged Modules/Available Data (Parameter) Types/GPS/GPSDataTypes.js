// GPSDataTypes.js
console.log( "Mounting GPSDataTypes.js..." );

import { NorthUpRose, CourseUpRose, Cardinal, Digital, GPSStatus, Gauge } from "./AvailableComponentTypes";

const GPSDataTypes = [

    CourseOverGround = {
        objectId: "DT-01",
        objectTypes: "GPS",
        desc: "Displays the current course over ground.",
        componentTypes: [ NorthUpRose, CourseUpRose, Cardinal, Digital ],
        instances: 253,
        units: [ 'Degrees True', 'Degrees Magnetic' ] // (depends on Global Settings in Units Setup tab)
    },
    GPSStatus = {
        objectId: "DT-02",
        objectTypes: "GPS",
        desc: "Displays the current operating mode and status of the currently selected GPS received.",
        componentTypes: [ GPSStatus ],
        instances: 253
    },
    LatLon = {
        objectId: "DT-03",
        objectTypes: "GPS",
        desc: "Displays the current speed over ground.",
        componentTypes: [ Digital ],
        instances: 253,
        units: [ 'Latitude and Longitude in Degrees', 'Minutes and fractions of a minute' ]
    },
    SpeedOverGround = {
        objectId: "DT-04",
        objectTypes: "GPS",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Engine Room'.",
        componentTypes: [ Gauge, Digital ],
        instances: 253,
        units: [ 'kilometers/hour', 'knots', 'miles/hour' ]
    },
];
'';
export default GPSDataTypes;

// eof

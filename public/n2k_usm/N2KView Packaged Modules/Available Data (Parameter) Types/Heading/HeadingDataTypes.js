// HeadingDataTypes.js
console.log( "Mounting HeadingDataTypes.js..." );

import { NorthUpRose, CourseUpRose, Cardinal, Digital, } from "./AvailableComponentTypes";

const HeadingDataTypes = [

    Heading = {
        objectId: "DT-01",
        objectTypes: "Heading",
        desc: "Displays the current heading of the vessel (the direction the vessel is pointing) relative" +
                " to true or magnetic north depending on the unit setting of the heading parameter.",
        componentTypes: [ NorthUpRose, CourseUpRose, Cardinal, Digital ],
        instances: 253,
        units: [ 'Degrees True', 'Degrees Magnetic' ] // (depends on Global Settings in Units Setup tab)
    },
    RateOfTurn = {
        objectId: "DT-02",
        objectTypes: "Heading",
        desc: "Displays the change in Heading of the vessel.",
        componentTypes: [ Digital, Gauge, LineGraph ],
        instances: 253,
        units: [ 'Degrees / Minute', 'Degrees / Second' ]
    },
    Variation = {
        objectId: "DT-03",
        objectTypes: "Heading",
        desc: "Displays the compass variation (Angle between True North and Magnetic North).",
        componentTypes: [ Digital ],
        instances: 253,
        units: 'degrees'
        // When displayed, the units will be appended with the method
        // by which the variation was obtained. (e.g. Manually,
        // Calculated, from WMM 2010 tables)
    },
];

export default HeadingDataTypes;

// eof

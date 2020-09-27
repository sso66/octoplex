// WindAlerts.js
console.log( "Mounting WindAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const WindAlerts = [

    Direction = {
        Apparent: {
            objectId: "AA-01",
            objectTypes: "Wind",
            desc: "Memory Available",
            alertClasses: [ CLASS_DIRECTION, CLASS_DATA_UNAVAILABLE ]
        },
        Ground: {
            objectId: "AA-02",
            objectTypes: "Wind",
            desc: "Memory Available",
            alertClasses: [ CLASS_DIRECTION, CLASS_DATA_UNAVAILABLE ]
        },
        True: {
            objectId: "AA-03",
            objectTypes: "Wind",
            desc: "Memory Available",
            alertClasses: [ CLASS_DIRECTION,, CLASS_DATA_UNAVAILABLE ]
        }
    },
    Speed = {
        Apparent: {
            objectId: "AA-04",
            objectTypes: "Wind",
            desc: "Memory Used",
            alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ]
        },
        Ground: {
            objectId: "AA-05",
            objectTypes: "Wind",
            desc: "Memory Used",
            alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ]
        },
        True: {
            objectId: "AA-06",
            objectTypes: "Wind",
            desc: "Memory Used",
            alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ]
        }
    }

];

export default WindAlerts;

// eof

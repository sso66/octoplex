// WindDataTypes.js
console.log( "Mounting WindDataTypes.js..." );

import { WindAngle, CloseWindAngle, Digital, Cardinal, NorthUpRose, LineGraph } from "./AvailableDataTypes";

const WindDataTypes = [

    Direction = {
        Apparent: {
            objectId: "DT-01",
            objectTypes: "Wind",
            desc: "Displays the angle and speed of the wind relative to the vessel center line" +
                    " as it appears to an observer on the deck of a moving vessel (does not subtract" +
                    " out the speed of the vessel).",
            componentTypes: [ WindAngle, CloseWindAngle ],
            units: [ 'Beaufort', 'kilometers/hour', 'nautical miles/hour', 'miles/hour' ]
        },
        Ground: {
            objectId: "DT-02",
            objectTypes: "Wind",
            desc: "Displays the angle and speed of the wind relative to true or magnetic north" +
                    " (depending on the unit setting of the 'heading' parameter).",
            componentTypes: [ Digital, Cardinal, NorthUpRose ],
            units: [ 'Beaufort', 'kilometers/hour', 'nautical miles/hour', 'miles/hour' ]
        },
        True: {
            objectId: "DT-03",
            objectTypes: "Wind",
            desc: "Displays the angle and speed of the wind relative to the vessel centerline" +
                    " (vessel’s speed is subtracted from apparent wind direction), calculated using speed" +
                    " through water (STW) or speed over ground (SOG) depending on the unit setting of the" +
                    " 'Wind True Vessel Referenced' parameter under “Global Settings” on the 'Units' screen.",
            componentTypes: [ WindAngle ],
            units: [ 'Beaufort', 'kilometers/hour', 'nautical miles/hour', 'miles/hour' ]
        }
    },
    Speed = {
        Apparent: {
            objectId: "DT-04",
            objectTypes: "Wind",
            desc: "Memory Used",
            componentTypes: [ Digital, WindAngle, LineGraph ],
            units: [ 'Beaufort', 'kilometers/hour', 'nautical miles/hour', 'miles/hour' ]
        },
        Ground: {
            objectId: "DT-05",
            objectTypes: "Wind",
            desc: "Memory Used",
            componentTypes: [ Digital ],
            units: [ 'Beaufort', 'kilometers/hour', 'nautical miles/hour', 'miles/hour' ]
        },
        True: {
            objectId: "DT-06",
            objectTypes: "Wind",
            desc: "Memory Used",
            componentTypes: [ Digital, WindAngle ],
            units: [ 'Beaufort', 'kilometers/hour', 'nautical miles/hour', 'miles/hour' ]
        },
    }

];

export default WindDataTypes;

// eof

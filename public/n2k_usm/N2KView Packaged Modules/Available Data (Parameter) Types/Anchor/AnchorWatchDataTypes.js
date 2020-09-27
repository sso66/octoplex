// AnchorWatchDataTypes.js
console.log( "Mounting AnchorWatchDataTypes.js..." );

import { AnchorWatch, Digital } from './AvailableComponentTypes';

const AnchorWatchAlerts = [
    
    AnchorWatch = {
        objectId: "DT-01",
        objectTypes: "Anchor",
        desc: "The Anchor Watch Parameter is a view into the Anchor Watch Alert.",
        componentTypes: [ AnchorWatch ],
        instances: null,
        units: null
    },
    AnchorPosition = {
        objectId: "DT-02",
        objectTypes: "Anchor",
        desc: "The Anchor Position Parameter displays the Latitude and Longitude"
                + " where the anchor was dropped when an Anchor Watch Alert has been set",
        componentTypes: [ Digital ],
        instances: null,
        units: ['Latitude', 'Longitude']
    },
    AnchorDistance = {
        objectId: "DT-01",
        objectTypes: "Anchor",
        desc: "The Anchor Distance Parameter is the distance between the ship’s position"
                 + " and the anchor position when an Anchor Watch Alert has been set",
        componentTypes: [ Digital ],
        instances: null,
        units: ['Feet', 'Meters']
    },
    
];

export default AnchorWatchDataTypes;

// eof

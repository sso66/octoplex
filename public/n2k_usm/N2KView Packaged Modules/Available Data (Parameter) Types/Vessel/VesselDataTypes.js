// VesselDataTypes.js
console.log( "Mounting VesselDataTypes.js..." );

import { AttitudeIndicator, Digital, LineGraph, TrimBarGraph, Inclinometer } from "./AlertModuleDefs";

const VesselDataTypes = [

    Attitude = {
        objectId: "DT-01",
        objectTypes: "Vessel",
        desc: "Displays the pitch of the vessel (rotation about the horizontal axis" +
                " perpendicular to the ship’s keel) and the roll (rotation about the horizontal axis" +
                " parallel to the ship’s keel).",
        componentTypes: [ AttitudeIndicator ],
        instances: 253,
        units: [ 'Degrees' ]
    },
    Pitch = {
        objectId: "DT-02",
        objectTypes: "Vessel",
        desc: "Displays the pitch of the vessel (rotation about the horizontal axis perpendicular" +
                " to the ship’s keel).",
        componentTypes: [ Digital, LineGraph ],
        instances: 253,
        units: [ 'Degrees' ]
    },
    PortTrimTab = {
        objectId: "DT-03",
        objectTypes: "Vessel",
        desc: "Displays the position of the vessel’s Port Trim Tab.",
        componentTypes: [ TrimBarGraph ],
        instances: 253
    },
    Roll = {
        objectId: "DT-04",
        objectTypes: "Vessel",
        desc: "Monitors the roll of the vessel (rotation about the horizontal axis parallel to the ship’s" +
                " keel).",
        componentTypes: [ Digital, Inclinometer, LineGraph ],
        instances: 253,
        units: 'Degrees'
    },
    StarboardTrimTab = {
        objectId: "DT-05",
        objectTypes: "Vessel",
        desc: "Monitors the position of the vessel’s Starboard Trim Tab.",
        componentTypes: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ]
    }
];

export default VesselDataTypes;

// eof

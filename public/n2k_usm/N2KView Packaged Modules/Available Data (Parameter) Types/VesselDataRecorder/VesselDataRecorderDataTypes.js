// VesselDataRecorderDataTypes.js
console.log( "Mounting VesselDataRecorderDataTypes.js..." );

import { Digital } from "./AvailableComponentTypes";

const VesselDataRecorderDataTypes = [

    Capacity = {
        objectId: "DT-02",
        objectTypes: "VesselDataRecorder",
        desc: "Display the capacity of the USB Flash Drive connected to the VDR.",
        componentTypes: [ Digital ],
        units: 'GBytes'
    },
    MemoryAvailable = {
        objectId: "DT-04",
        objectTypes: "VesselDataRecorder",
        desc: "Display the amount of memory of the USB Flash Drive connected to the VDR that has" +
                " not been used.",
        componentTypes: [ Digital ],
        instances: 253
    },
    MemoryUsed = {
        objectId: "DT-03",
        objectTypes: "VesselDataRecorder",
        desc: "Display the amount of memory of the USB Flash Drive connected to the VDR that has" +
                " been used.",
        componentTypes: [ Digital ],
        instances: 253,
        units: 'GBytes'
    },
    PercentAvailable = {
        objectId: "DT-04",
        objectTypes: "VesselDataRecorder",
        desc: "Display the percentage of memory of the USB Flash Drive connected to the VDR that has" +
                " not been used.",
        componentTypes: [ Digital ],
        instances: 253
    },
    PercentUsed = {
        objectId: "DT-04",
        objectTypes: "VesselDataRecorder",
        desc: "Display the amount of memory of the USB Flash Drive connected to the VDR that has" +
                " been used.",
        componentTypes: [ Digital ],
        instances: 253
    },
    Status = {
        objectId: "DT-01",
        objectTypes: "VesselDataRecorder",
        desc: "Displays the Status of the Vessel Data Recorder.",
        componentTypes: [ Digital ],
        instances: 253,
        values: [ 'Recording', 'Formatting', 'Erasing', 'No USB Flash Drive', 'Initializing' ]
    },
];

export default VesselDataRecorderDataTypes;

// eof

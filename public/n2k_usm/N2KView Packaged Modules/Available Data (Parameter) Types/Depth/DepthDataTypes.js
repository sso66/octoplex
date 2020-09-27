// DepthDataTypes.js
console.log( "Mounting DepthDataTypes.js..." );

import { Digital, LineGraph } from './AvailableComponentTypes';

const DepthDataTypes = [
 
    TransducerOffset = {
        objectId: "DT-01",
        objectTypes: "Depth",
        desc: "Displays the offset being used by a depth transducer."
                + " Positive values represent distance from transducer to water line"
                + " and negative values represent distance from the transducer to the keel.",
        componentTypes: [ Digital ],
        instances: 253,
        units: [ 'feet', 'fathoms', 'meters']
    },   
    WaterBelowTransducer = {
        objectId: "DT-02",
        objectTypes: "Depth",
        desc: "Monitors the current reading from a depth transducer.",
        componentTypes: [ Digital, LineGraph ],
        instances: 253,
        units: [ 'feet', 'fathoms', 'meters']
    },
    WaterDepthIncludesOffset = {
        objectId: "DT-03",
        objectTypes: "Depth",
        desc: "Monitors the current reading from a depth transducer, plus the offset of the depth transducer..",
        componentTypes: [ Digital, LineGraph ],
        instances: 253,
        units: [ 'feet', 'fathoms', 'meters']
    },
];

export default DepthDataTypes;

// eof

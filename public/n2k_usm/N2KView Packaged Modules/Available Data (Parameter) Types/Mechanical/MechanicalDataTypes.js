// MechanicalDataTypes.js
console.log( "Mounting MechanicalDataTypes.js..." );

import { BarGraph, Digital, Gauge, LineGraph } from './AvailableComponentTypes';

const MechanicalDataTypes = [

    Decibel = {
        objectId: "DT-01",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop decibel transducer may be connected to Maretron’s CLM100 to" +
                " measure decibel levels.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: 'Decibels'
    },
    Force = {
        objectId: "DT-02",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop force transducer (such as a Clevis pin) may be connected to" +
                " Maretron’s CLM100 to measure forces.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: [ 'Kilogram-force', 'Newtons', 'kiloNewtons', 'Pound-force', 'metric-ton-force' ]
    },
    Strain = {
        objectId: "DT-03",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop strain transducer may be connected to Maretron’s CLM100 to" +
                " measure strain.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: 'Microstrain'
    },
];

export default MechanicalDataTypes;

// eof

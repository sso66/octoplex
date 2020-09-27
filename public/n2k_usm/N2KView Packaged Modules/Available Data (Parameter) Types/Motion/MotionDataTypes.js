// MechanicalDataTypes.js
console.log( "Mounting MechanicalDataTypes.js..." );

import { BarGraph, Digital, Gauge, LineGraph } from './AvailableComponentTypes';

const MechanicalDataTypes = [

    Acceleration = {
        objectId: "DT-01",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop decibel transducer may be connected to Maretron’s CLM100 to" +
                " measure acceleration.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: [ 'm/s^2', 'ft/s^2', 'g' ]
    },
    Angle = {
        objectId: "DT-02",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop strain transducer may be connected to Maretron’s CLM100 to" +
                " Maretron’s CLM100 to measure angle.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: "Degrees"
    },
    AngularAcceleration = {
        objectId: "DT-03",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop strain transducer may be connected to Maretron’s CLM100 to" +
                " measure addeleration.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: [ 'Degrees/min^2', 'degrees/sec^2' ]
    },
    AngularVelocity = {
        objectId: "DT-04",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop strain transducer may be connected to Maretron’s CLM100 to" +
                " measure velocity.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: [ 'Degrees/min', 'degrees/sec' ]
    },
    Distance = {
        objectId: "DT-05",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop strain transducer may be connected to Maretron’s CLM100 to" +
                " Maretron’s CLM100 to measure distance.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: [ 'mm', 'cm', 'm', 'in', 'ft' ]
    },
    RotationRate = {
        objectId: "DT-06",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop strain transducer may be connected to Maretron’s CLM100 to" +
                " measure rotation rate.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: "RPM"
    },
    Velocity = {
        objectId: "DT-07",
        objectTypes: "Mechanical",
        desc: "A 4-20mA current loop decibel transducer may be connected to Maretron’s CLM100 to" +
                " measure velocity.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: [ 'm/s', 'ft/s', 'inch/s', 'mph', 'km/h', 'NM/h' ]
    },
];

export default MechanicalDataTypes;

// eof

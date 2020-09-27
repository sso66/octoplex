// DCDataTypes.js
console.log( "Mounting DCDataTypes.js..." );

import { Gauge, BarGraph, Digital, LineGraph } from './AvailableComponentTypes';

const DCDataTypes = [

    BatteryStateOfCharge = {
        objectId: "DT-01",
        objectTypes: "DC",
        desc: "Displays the current energy in the battery as percentage of its total capacity.",
        componentTypes: [ Gague, BarGraph, Digital, LineGraph ],
        instances: 253
    },
    BatteryTemperature = {
        objectId: "DT-02",
        objectTypes: "DC",
        desc: "Displays the battery case temperature.",
        componentTypes: [ Gague, BarGraph, Digital, LineGraph ],
        instances: 253
    },
    BatteryTimeRemaining = {
        objectId: "DT-03",
        objectTypes: "DC",
        title: "Displays the time remaining that the battery can continue to operate at its current load.",
        componentTypes: [ Gague, BarGraph, Digital, LineGraph ],
        instances: 253
    },
    Current = {
        objectId: "DT-04",
        objectTypes: "DC",
        title: "Displays the electrical current being sourced to/from the battery.",
        componentTypes: [ Gague, BarGraph, Digital, LineGraph ],
    },
    Power = {
        objectId: "DT-05",
        objectTypes: "DC",
        title: "Displays the DC power being provided by the battery.",
        componentTypes: [ Gague, BarGraph, Digital, LineGraph ],
        instances: 253
    },
    Voltage = {
        objectId: "DT-06",
        objectTypes: "DC",
        title: "Displays the voltage measured at the battery.",
        componentTypes: [ Gague, BarGraph, Digital ],
        instances: 253
    },
    RippleVoltage = {
        objectId: "DT-07",
        objectTypes: "DC",
        title: "Displays the ripple voltage at the battery.",
        componentTypes: [ Gague, BarGraph, Digital ],
        instances: 253
    },
];

export default DCDataTypes;

// eof

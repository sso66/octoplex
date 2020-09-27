// ElectricalDataTypes.js
console.log( "Mounting ElectricalDataTypes.js..." );

import { BarGraph, Digital, Gauge, LineGraph } from './AvailableComponentTypes';

const ElectricalDataTypes = [

    Resistance = {
        objectId: "DT-01",
        objectTypes: "Electrical",
        desc: "A 4-20mA current loop strain transducer may be connected to Maretron’s CLM10" +
                " to measure resistance.",
        componentTypes: [ AirConditioner ],
        instances: 253,
        units: [ 'Ohms', 'kiloOhms' ]
    },
];

export default ElectricalDataTypes;

// eof

// AirConditioning-HeatingDataTypes.js
console.log( "Mounting AirConditioning-HeatingDataTypes.js..." );

import { AirConditioner } from './AvailableComponentTypes';

const AirConditioning_HeatingDataTypes = [

    EliteAirConditioner = {
        objectId: "DT-01",
        objectTypes: "AirConditioning_Heating",
        desc: "This displays the parameters from a MarineAir Systems Elite Air Conditioner." +
                " With the licensing of the Control Module, the Air Conditioner may be controlled remotely.",
        // This would be the instance of the J2K100 bridge to
        // which the Air Controller is connected.
        componentTypes: [ AirConditioner ],
        instances: 253,
        units: 'Not Applicable'
    },
    Q_LogicConditioner = {
        objectId: "DT-02",
        objectTypes: "AirConditioning_Heating",
        desc: "This displays the parameters from a CruisAir Systems Q-Logic Air Conditioner." +
                " With the licensing of the Control Module, the Air Conditioner may be controlled remotely.",
        componentTypes: [ AirConditioner ],
        instances: 253,
        units: 'Not Applicable'
    }
];

export default AirConditioning_HeatingDatatypes;

// eof

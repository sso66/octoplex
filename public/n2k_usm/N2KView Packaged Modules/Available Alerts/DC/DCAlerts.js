// DCAlerts.js
console.log( "Mounting DCAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const DCAlerts = [
    
      BatteryStateOfCharge = {
        objectId: "AA-01",
        objectTypes: "DC",
        desc: "Monitors the current energy in the battery as percentage of its total capacity.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      BatteryTemperature = {
        objectId: "AA-02",
        objectTypes: "DC",
        desc: "Monitors the battery case temperature.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      BatteryTimeRemaining = {
        objectId: "AA-03",
        objectTypes: "DC",
        title: "Monitors the time remaining that the battery can continue to operate at its current load.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      Current = {
        objectId: "AA-04",
        objectTypes: "DC",
        title: "Monitors the electrical current being sourced to/from the battery.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      Power = {
        objectId: "AA-05",
        objectTypes: "DC",
        title: "Monitors the DC power being provided by the battery.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      Voltage = {
        objectId: "AA-06",
        objectTypes: "DC",
        title: "Monitors the voltage measured at the battery.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      RippleVoltage = {
        objectId: "AA-07",
        objectTypes: "DC",
        title: "Monitors the ripple voltage at the battery.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
];

export default DCAlerts;

// eof

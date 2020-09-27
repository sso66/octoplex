// ACBusAlerts.js
console.log( "Mounting ACBusAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const ACBusAlerts = [
    
    AverageFrequency = {
        objectId: "AA-01",
        objectTypes: "AC Bus",
        desc: "Monitors the average frequency of an AC bus across all phases",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Hertz"
    },
    AverageLineLineVoltage = {
        objectId: "AA-02",
        objectTypes: "AC Bus",
        desc: "Monitors the average line to netural RMS voltage of an AC bus",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
    },
    AverageLineNeutralVoltage = {
        objectId: "AA-03",
        objectTypes: "AC Bus",
        title: "Monitors the average line to netural RMS voltage of an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
    },
    PhaseAFrequency = {
        objectId: "AA-04",
        objectTypes: "AC Bus",
        title: "Monitors the frequency of phase A on an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Hertz"
    },
      PhaseALineNeutralVoltage = {
        objectId: "AA-05",
        objectTypes: "AC Bus",
        title: "Monitors the RMS voltage between phase A and netural of an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
      },
      PhaseABLineLineVoltage = {
        objectId: "AA-06",
        objectTypes: "AC Bus",
        title: "Monitors the RMS voltage between phase A and phase B of an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
      },
      PhaseBFrequency = {
        objectId: "AA-07",
        objectTypes: "AC Bus",
        title: "Monitors the frequency of phase B on an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
      },
      PhaseBLineNeutralVoltage = {
        objectId: "AA-08",
        objectTypes: "AC Bus",
        title: "Monitors the RMS voltage between phase B and neural of an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
      },
      PhaseBCLineLineVoltage = {
        objectId: "AA-09",
        objectTypes: "AC Bus",
        title: "Monitors the RMS voltage between phase B and phase C of an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
      },
      PhaseCFrequency = {
        objectId: "AA-10",
        objectTypes: "AC Bus",
        title: "Monitors the frequency on phase C on an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
      },
      PhaseCLineNeutralVoltage = {
        objectId: "AA-11",
        objectTypes: "AC Bus",
        title: "Monitors the RMS voltage between phase C of an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
      },
      PhaseCALineLineVoltage = {
        objectId: "AA-12",
        objectTypes: "AC Bus",
        title: "Monitors the RMS voltage between phase C and phase A of an AC bus.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: "Volts RMS"
      },
];

export default ACBusAlerts;

// eof

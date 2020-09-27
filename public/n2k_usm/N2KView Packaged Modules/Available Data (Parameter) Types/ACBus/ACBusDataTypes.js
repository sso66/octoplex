// ACBusDataTypes.js
console.log( "Mounting ACBusDataTypes.js..." );

import { Gauge, Digital, LineGraph } from './AvailableComponentTypes';

const ACBusDataTypes = [

    AverageFrequency = {
        objectId: "DT-01",
        objectTypes: "AC Bus",
        desc: "Displays the average frequency of all phases on an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    AverageLineLineVoltage = {
        objectId: "DT-02",
        objectTypes: "AC Bus",
        desc: "Displays the average line to line RMS voltage of an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
    AverageLineNeutralVoltage = {
        objectId: "DT-03",
        objectTypes: "AC Bus",
        desc: "Displays the average line to netural RMS voltage of an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
    PhaseAFrequency = {
        objectId: "DT-04",
        objectTypes: "AC Bus",
        desc: "Displays the frequency of phase A on an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseALineNeutralVoltage = {
        objectId: "DT-05",
        objectTypes: "AC Bus",
        desc: "Displays the RMS voltage between phase A and netural of an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
    PhaseABLineLineVoltage = {
        objectId: "DT-06",
        objectTypes: "AC Bus",
        desc: "Displays the RMS voltage between phase A and phase B of an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
    PhaseBFrequency = {
        objectId: "DT-07",
        objectTypes: "AC Bus",
        desc: "Displays the frequency of phase B on an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
    PhaseBLineNeutralVoltage = {
        objectId: "DT-08",
        objectTypes: "AC Bus",
        desc: "Displays the RMS voltage between phase B and neural of an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
    PhaseBCLineLineVoltage = {
        objectId: "DT-09",
        objectTypes: "AC Bus",
        desc: "Displays the RMS voltage between phase B and phase C of an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
    PhaseCFrequency = {
        objectId: "DT-10",
        objectTypes: "AC Bus",
        desc: "Displays the frequency on phase C on an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
    PhaseCLineNeutralVoltage = {
        objectId: "DT-11",
        objectTypes: "AC Bus",
        desc: "Displays the RMS voltage between phase C of an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
    PhaseCALineLineVoltage = {
        objectId: "DT-12",
        objectTypes: "AC Bus",
        desc: "Displays the RMS voltage between phase C and phase A of an AC bus.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Volts RMS"
    },
];

export default ACBusDataTypes;

// eof
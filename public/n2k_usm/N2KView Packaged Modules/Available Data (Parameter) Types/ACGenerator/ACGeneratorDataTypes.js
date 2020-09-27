// ACGeneratorDataTypes.js
console.log( "Mounting ACGeneratorDataTypes.js..." );

import { Gauge, Digital, LineGraph } from './AvailableComponentTypes';

const ACGeneratorDataTypes = {

    AverageCurrent: [
        objectId: "DT-01",
        objectTypes: "AC Generator",
        desc: "Displays the average AC RMS electrical current being sourced from a generator on all phases.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Amperes"
    },
    AverageFrequency: {
        objectId: "DT-02",
        objectTypes: "AC Generator",
        desc: "Displays the average frequency of all AC power from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    AverageLineLineVoltage: {
        objectId: "DT-03",
        objectTypes: "AC Generator",
        desc: "Displays the average line to line RMS voltage of the AC power from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    AverageLineNeutralVoltage: {
        objectId: "DT-04",
        objectTypes: "AC Generator",
        desc: "Displays the average line to netural RMS of the AC power from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseAApparentPower: {
        objectId: "DT-05",
        objectTypes: "AC Generator",
        desc: "Displays the apprent power being drawn on phase A from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VA"
    },
    PhaseACurrent: {
        objectId: "DT-06",
        objectTypes: "AC Generator",
        desc: "Displays the AC RMS electical current between phase A and netural of an AC Generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Amperes"
    },
    PhaseAFrequency: {
        objectId: "DT-07",
        objectTypes: "AC Generator",
        desc: "Displays the frequency of the AC power from a generator on phase A.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
      },
      PhaseBLineNeutralVoltage: {
        objectId: "DT-08",
        objectTypes: "AC Generator",
        desc: "Displays the phase A to neutral RMS voltage of the AC power from generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
      },
      PhaseAPowerFactor: {
        objectId: "DT-09",
        objectTypes: "AC Generator",
        desc: "Displays the power factor of phase A of the AC power from the generator.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "%"
      },
      PhaseAReactivePower: {
        objectId: "DT-10",
        objectTypes: "AC Generator",
        desc: "Displays the reactive being drawn on phase A from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VAr"
      },
      PhaseARealPower: {
        objectId: "DT-11",
        objectTypes: "AC Generator",
        desc: "Displays the real power being drawn on phase A from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Watts / killowatts"
      },
      PhaseABLineLineVoltage: {
        objectId: "DT-12",
        objectTypes: "AC Generator",
        desc: "Displays the voltage between phase A and phase B of the AC power from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
      },
      PhaseBApparentPower: {
        objectId: "DT-13",
        objectTypes: "AC Generator",
        desc: "Displays the apprent power being drawn on phase B from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VA"
      },
      PhaseBCurrent: {
        objectId: "DT-14",
        objectTypes: "AC Generator",
        desc: "Displays the AC RMS electrical current being sourced on phase B from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Amperes"
      },
      PhaseBFrequency: {
        objectId: "DT-15",
        objectTypes: "AC Generator",
        desc: "Displays the frequency of the AC power from a generator on phase B.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
      },
      PhaseBLineNeutralVoltage: {
        objectId: "DT-16",
        objectTypes: "AC Generator",
        desc: "Displays the phase B to neutral RMS voltage of the AC power from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
      },
      PhaseBPowerFactor: {
        objectId: "DT-17",
        objectTypes: "AC Generator",
        desc: "Displays the Power Factor of phase B of the AC power from a generator.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "%"
      },
      PhaseBReactivePower: {
        objectId: "DT-18",
        objectTypes: "AC Generator",
        desc: "Displays the Reactive Power being drawn on Phase B from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VAr"
      },
      PhaseBRealPower: {
        objectId: "DT-19",
        objectTypes: "AC Generator",
        desc: "Displays the Real Power being drawn on Phase B from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Watts / killowatts"
      },
      PhaseBCLineLineVoltage: {
        objectId: "DT-20",
        objectTypes: "AC Generator",
        desc: "Displays the voltage between Phase B and Phase C of the AC power from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
      },
      PhaseCApparantPower: {
        objectId: "DT-21",
        objectTypes: "AC Generator",
        desc: "Displays the Apparent Power being drawn on Phase C from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VA"
      },
      PhaseCCurrent: {
        objectId: "DT-22",
        objectTypes: "AC Generator",
        desc: "Displays the AC RMS electrical current being sourced from a generator on phase C.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Amperes"
      },
      PhaseCFrequency: {
        objectId: "DT-23",
        objectTypes: "AC Generator",
        desc: "Displays the frequency of the AC power from a generator on phase C.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
      },
      PhaseCLineNeutralVoltage: {
        objectId: "DT-24",
        objectTypes: "AC Generator",
        desc: "Displays the phase C to neutral RMS voltage of the AC power from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
      },
      PhaseCPowerFactor: {
        objectId: "DT-25",
        objectTypes: "AC Generator",
        desc: "Displays the Power Factor of phase C of the AC power from a generator.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "%"
      },
      PhaseCReactivePower: {
        objectId: "DT-26",
        objectTypes: "AC Generator",
        desc: "Displays the Reactive Power being drawn on Phase C from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VAr"
      },
      PhaseCRealPower: {
        objectId: "DT-27",
        objectTypes: "AC Generator",
        desc: "Displays the Real Power being drawn on Phase C from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Watts / kilowatts"
      },
      PhaseCALineLineVoltage: {
        objectId: "DT-28",
        objectTypes: "AC Generator",
        desc: "Displays the voltage between Phase C and Phase A of the AC power from a generator.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
      },
];

export default ACGeneratorDataTypes;

// eof

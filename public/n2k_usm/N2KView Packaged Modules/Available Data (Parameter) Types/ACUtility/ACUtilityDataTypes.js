// ACUtilityDataTypes.js
console.log( "Mounting ACUtilityDataTypes.js..." );

import { Gauge, Digital, LineGraph } from './AvailableComponentTypes';

const ACUtilityDataTypes = {

    AverageCurrent: [
        objectId: "DT-01",
        objectTypes: "AC Utility",
        desc: "Displays the average AC RMS electrical current being sourced from a AC Utility on all phases.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    AverageFrequency: {
        objectId: "DT-02",
        objectTypes: "AC Utility",
        desc: "Displays the average frequency of all AC power from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    AverageLineLineVoltage: {
        objectId: "DT-03",
        objectTypes: "AC Utility",
        desc: "Displays the average line to line RMS voltage of the AC power from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    AverageLineNeutralVoltage: {
        objectId: "DT-04",
        objectTypes: "AC Utility",
        desc: "Displays the average line to netural RMS of the AC power from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseAApparentPower: {
        objectId: "DT-05",
        objectTypes: "AC Utility",
        desc: "Displays the apprent power being drawn on phase A from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VA"
    },
    PhaseACurrent: {
        objectId: "DT-06",
        objectTypes: "AC Utility",
        desc: "Displays the AC RMS electical current between phase A and netural of an AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Amperes"
    },
    PhaseAFrequency: {
        objectId: "DT-07",
        objectTypes: "AC Utility",
        desc: "Displays the frequency of the AC power from a AC Utility on phase A.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseBLineNeutralVoltage: {
        objectId: "DT-08",
        objectTypes: "AC Utility",
        desc: "Displays the phase A to neutral RMS voltage of the AC power from AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseAPowerFactor: {
        objectId: "DT-09",
        objectTypes: "AC Utility",
        desc: "Displays the power factor of phase A of the AC power from the AC Utility.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "%"
    },
    PhaseAReactivePower: {
        objectId: "DT-10",
        objectTypes: "AC Utility",
        desc: "Displays the reactive being drawn on phase A from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VAr"
      },
    PhaseARealPower: {
        objectId: "DT-11",
        objectTypes: "AC Utility",
        desc: "Displays the real power being drawn on phase A from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Watts / killowatts"
    },
    PhaseABLineLineVoltage: {
        objectId: "DT-12",
        objectTypes: "AC Utility",
        desc: "Displays the voltage between phase A and phase B of the AC power from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },  
    PhaseBApparentPower: {
        objectId: "DT-13",
        objectTypes: "AC Utility",
        desc: "Displays the apprent power being drawn on phase B from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VA"
    },
    PhaseBCurrent: {
        objectId: "DT-14",
        objectTypes: "AC Utility",
        desc: "Displays the AC RMS electrical current being sourced on phase B from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Amperes"
    },
    PhaseBFrequency: {
        objectId: "DT-15",
        objectTypes: "AC Utility",
        desc: "Displays the frequency of the AC power from a AC Utility on phase B.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseBLineNeutralVoltage: {
        objectId: "DT-16",
        objectTypes: "AC Utility",
        desc: "Displays the phase B to neutral RMS voltage of the AC power from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseBPowerFactor: {
        objectId: "DT-17",
        objectTypes: "AC Utility",
        desc: "Displays the Power Factor of phase B of the AC power from a AC Utility.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "%"
    },
    PhaseBReactivePower: {
        objectId: "DT-18",
        objectTypes: "AC Utility",
        desc: "Displays the Reactive Power being drawn on Phase B from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VAr"
    },
    PhaseBRealPower: {
        objectId: "DT-19",
        objectTypes: "AC Utility",
        desc: "Displays the Real Power being drawn on Phase B from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Watts / killowatts"
    },
    PhaseBCLineLineVoltage: {
        objectId: "DT-20",
        objectTypes: "AC Utility",
        desc: "Displays the voltage between Phase B and Phase C of the AC power from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseCApparantPower: {
        objectId: "DT-21",
        objectTypes: "AC Utility",
        desc: "Displays the Apparent Power being drawn on Phase C from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VA"
    },
    PhaseCCurrent: {
        objectId: "DT-22",
        objectTypes: "AC Utility",
        desc: "Displays the AC RMS electrical current being sourced from a AC Utility on phase C.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Amperes"
    },
    PhaseCFrequency: {
        objectId: "DT-23",
        objectTypes: "AC Utility",
        desc: "Displays the frequency of the AC power from a AC Utility on phase C.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseCLineNeutralVoltage: {
        objectId: "DT-24",
        objectTypes: "AC Utility",
        desc: "Displays the phase C to neutral RMS voltage of the AC power from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    PhaseCPowerFactor: {
        objectId: "DT-25",
        objectTypes: "AC Utility",
        desc: "Displays the Power Factor of phase C of the AC power from a AC Utility.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "%"
    },
    PhaseCReactivePower: {
        objectId: "DT-26",
        objectTypes: "AC Utility",
        desc: "Displays the Reactive Power being drawn on Phase C from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VAr"
    },
    PhaseCRealPower: {
        objectId: "DT-27",
        objectTypes: "AC Utility",
        desc: "Displays the Real Power being drawn on Phase C from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Watts / kilowatts"
    },
    PhaseCALineLineVoltage: {
        objectId: "DT-28",
        objectTypes: "AC Utility",
        desc: "Displays the voltage between Phase C and Phase A of the AC power from a AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Hertz"
    },
    TotalApparentPower: {
        objectId: "DT-29",
        objectTypes: "AC Utility",
        desc: "Displays the Total Apparent Power being drawn on all phases from an AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VA"
    },
    TotalPowerFactor: {
        objectId: "DT-30",
        objectTypes: "AC Utility",
        desc: "Displays the Total Apparent Power being drawn on all phases from an AC Utility.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "%"
    },
    TotalReactivePower: {
        objectId: "DT-31",
        objectTypes: "AC Utility",
        desc: "Displays the Total Reactive Power being drawn on all phases from an AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "VAr"
    },
    TotalRealPower: {
        objectId: "DT-32",
        objectTypes: "AC Utility",
        desc: "Displays the Total Real Power being drawn on all phases from an AC Utility.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: "Watts / kilowatts"
    },
    TotalkWhExport: {
        objectId: "DT-33",
        objectTypes: "AC Utility",
        desc: "Displays the Total kilowatt-Hours exported to an AC Utility.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "kilowatts-hours"
    },
    TotalkWhImport: {
        objectId: "DT-34",
        objectTypes: "AC Utility",
        desc: "Displays the Total kilowatt-Hours imported to an AC Utility.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "kilowatts-hours"
    }                
];

export default ACUtilityDataTypes;

// eof

// ACUtilityAlerts.js
console.log( "Mounting ACUtilityAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const ACUtilityAlerts = [

      AverageCurrent = {
        objectId: "AA-01",
        objectTypes: "AC Utility",
        desc: "Monitors the average AC RMS current from Utility across all phases",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      AverageFrequency = {
        objectId: "AA-02",
        objectTypes: "AC Utility",
        desc: "Monitors the average frequency of the AC power from a Utility across all phases.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      AverageLineLineVoltage = {
        objectId: "AA-03",
        objectTypes: "AC Utility",
        title: "Monitors the average line to line RMS voltage of the AC power from a Utility across all phases.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      AvarageLineNeutrlVoltage = {
        objectId: "AA-04",
        objectTypes: "AC Utility",
        title: "Monitors the average line to neutral RMS voltage of the AC power from a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseAApparentPower = {
        objectId: "AA-05",
        objectTypes: "AC Utility",
        title: "Monitors the apparent power being sourced from a generatoer on phase A.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseACurrent = {
        objectId: "AA-06",
        objectTypes: "AC Utility",
        title: "Monitors the AC RMS electrical current being sourced from a Utility on phase A.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseAFrequency = {
        objectId: "AA-07",
        objectTypes: "AC Utility",
        title: "Monitors the frequency of phase A of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseALineNeutralVoltage = {
        objectId: "AA-08",
        objectTypes: "AC Utility",
        title: "Monitors the RMS voltage between phase A and neural of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseAPowerFactor = {
        objectId: "AA-09",
        objectTypes: "AC Utility",
        title: "Monitors the power factor on phase A of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseAReactivePower = {
        objectId: "AA-10",
        objectTypes: "AC Utility",
        title: "Monitors the reactive power on phase A of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseARealPower = {
        objectId: "AA-11",
        objectTypes: "AC Utility",
        title: "Monitors the rea; power on phase A of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseABLineLineVoltage = {
        objectId: "AA-12",
        objectTypes: "AC Utility",
        title: "Monitors the RMS voltage between phase A and phase B of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseAApparantPower = {
        objectId: "AA-13",
        objectTypes: "AC Utility",
        title: "Monitors the apparent power being sourced from Utility on phase B.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseBCurrent = {
        objectId: "AA-14",
        objectTypes: "AC Utility",
        title: "Monitors the AC RMS electrical current being sourced from a Utility on phase B.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseBFrequency = {
        objectId: "AA-15",
        objectTypes: "AC Utility",
        title: "Monitors the frequency of phase B of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseBLineNeautralVoltage = {
        objectId: "AA-16",
        objectTypes: "AC Utility",
        title: "Monitors the RMS voltage between phase B and neutral of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseBPowerFactor = {
        objectId: "AA-17",
        objectTypes: "AC Utility",
        title: "Monitors the power factor of phase B of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseBReactivePower = {
        objectId: "AA-18",
        objectTypes: "AC Utility",
        title: "Monitors the reactive power on phase B of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseBRealPower = {
        objectId: "AA-19",
        objectTypes: "AC Utility",
        title: "Monitors the real power on phase B of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseBCLineLineVoltage = {
        objectId: "AA-20",
        objectTypes: "AC Utility",
        title: "Monitors the RMS voltage between phase B and phase C of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
        units: ""
      },
      PhaseCApparantPower = {
        objectId: "AA-21",
        objectTypes: "AC Utility",
        title: "Monitors the apparant power being sourced from a Utility on phase C.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseCCurrent = {
        objectId: "AA-22",
        objectTypes: "AC Utility",
        title: "Monitors the AC RMS electrical current being sourced form a Utility on phase C.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
        units: ""
      },
      PhaseCFrequency = {
        objectId: "AA-23",
        objectTypes: "AC Utility",
        title: "Monitors the frequency of phase C of a Utility",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseCLineNeutralVoltage = {
        objectId: "AA-24",
        objectTypes: "AC Utility",
        title: "Monitors the RMS voltage between phase C and neutral of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
        units: ""
      },
      PhaseCPowerFactor = {
        objectId: "AA-25",
        objectTypes: "AC Utility",
        title: "Monitors the power factor of phase C of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseCReactivePower = {
        objectId: "AA-26",
        objectTypes: "AC Utility",
        title: "Monitors the reactive power on phase C of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PhaseCRealPower = {
        objectId: "AA-27",
        objectTypes: "AC Utility",
        title: "Monitors the real power on phase C of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
        units: ""
      },
      PhaseCALineLineVoltage = {
        objectId: "AA-28",
        objectTypes: "AC Utility",
        title: "Monitors the RMS voltage between phase C and phase A of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TotalApparantPower = {
        objectId: "AA-29",
        objectTypes: "AC Utility",
        title: "Monitors the total apparent power being sourced from a Utility of all phases.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TotalPowerFactor = {
        objectId: "AA-30",
        objectTypes: "AC Utility",
        title: "Monitors the total power factor of a Utility across all phases.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TotalReactivePower = {
        objectId: "AA-31",
        objectTypes: "AC Utility",
        title: "Monitors the total reactive power on all phases of a Utitliy.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TotalRealPower = {
        objectId: "AA-32",
        objectTypes: "AC Utility",
        title: "Monitors the total real power on all phases of a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
        units: ""
      },
      TotalkWhExport = {
        objectId: "AA-33",
        objectTypes: "AC Utility",
        title: "Monitors the total kilowatt-hours exported from a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TotalkWhImport = {
        objectId: "AA-34",
        objectTypes: "AC Utility",
        title: "Monitors the total kilowatt-hours imported from a Utility.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
];

export default ACUtilityAlerts;

// eof

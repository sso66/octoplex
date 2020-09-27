// PressureVacuumAlerts.js
console.log( "Mounting PressureVacuumAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

/*------------------------------------------------------------------------------------------
 * N2KView is not a primary navigator; that is, it does not provide means for entering and 
 * storing waypoint and route data. N2KView can receive information on the current leg of 
 * the voyage from a primary PressureVacuum device (such as a chart plotter or PC with 
 * PressureVacuum software and NMEA 2000 interface) and display the following information:
 -----------------------------------------------------------------------------------------*/
const PressureVacuumAlerts = [

      BarometricPressure = {
        objectId: "AA-01",
        objectTypes: "PressureVacuum",
        desc: "Monitors the atmospheric (barometric) pressure.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
  },
      CompressedAirPressure = {
        objectId: "AA-02",
        objectTypes: "PressureVacuum",
        desc: "Monitors the pressure from a pressure sensor set up with a source of 'Compressed Air'",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EngineBoostPressure = {
        objectId: "AA-03",
        objectTypes: "PressureVacuum",
        desc: "Monitors the boost pressure of a supercharger or turbocharger.",
         alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EngineCoolantPressure = {
        objectId: "AA-04",
        objectTypes: "PressureVacuum",
        desc: "Monitors the engine’s water/coolant pressure.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EngineFuelPressure = {
        objectId: "AA-05",
        objectTypes: "PressureVacuum",
        desc: "Monitors the pressure of the fuel for the engine.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EngineOilPressure = {
        objectId: "AA-06",
        objectTypes: "PressureVacuum",
        desc: "Monitors the pressure from a pressure sensor set up with a source of 'Hydraulic Oil'",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      HydraulicOilPressure = {
        objectId: "AA-07",
        objectTypes: "PressureVacuum",
        desc: "Monitors the pressure from a pressure sensor set up with a source of 'Steam'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      SteamPressure = {
        objectId: "AA-08",
        objectTypes: "PressureVacuum",
        desc: "Monitors the current speed over ground of the vessel.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TransmissionOilPressure = {
        objectId: "AA-09",
        objectTypes: "PressureVacuum",
        desc: "Monitors the pressure of the oil in the transmission.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      UserDefinedPressure = {
        objectId: "AA-10",
        objectTypes: "PressureVacuum",
        desc: "Monitors the pressure of a user defined fluid type.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253 
       },
 
];

export default PressureVacuumAlerts;

// eof

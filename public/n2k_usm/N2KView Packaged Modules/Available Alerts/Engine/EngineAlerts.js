// EngineAlerts.js
console.log( "Mounting EngineAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const EngineAlerts = [

      EngineBoostPressure = {
        objectId: "AA-01",
        objectTypes: "Engine",
        desc: "Monitors the boost pressure of a supercharger or turbocharger.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EngineCoolantPressure = {
        objectId: "AA-02",
        objectTypes: "Engine",
        desc: "Monitors the engine's water/cooler temperature.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EngineCoolantTemperature = {
        objectId: "AA-03",
        objectTypes: "Engine",
        desc: "Monitors the engine's water/cooler pressure.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EngineFuelPressure = {
        objectId: "AA-04",
        objectTypes: "Engine",
        desc: "Monitors the pressure of the fuel for the engine.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EngineOilPressure = {
        objectId: "AA-05",
        objectTypes: "Engine",
        desc: "Monitors the engine's oil pressure.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EngineOilTemperature = {
        objectId: "AA-06",
        objectTypes: "Engine",
        desc: "Monitors the engine's oil temperature.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      ExhaustGasTemperature = {
        objectId: "AA-07",
        objectTypes: "Engine",
        desc: "Monitors the temperature of the engine's exhaust gases.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      FuelConsumption = {
        objectId: "AA-08",
        objectTypes: "Engine",
        desc: "Monitors the engine's fuel consumption.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      FuelEconomy = {
        objectId: "AA-09",
        objectTypes: "Engine",
        desc: "Monitors the engine's fuel usage.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      FuelRate = {
        objectId: "AA-10",
        objectTypes: "Engine",
        desc: "Monitors the rate of fuel consumption for the engine..",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      Hours = {
        objectId: "AA-11",
        objectTypes: "Engine",
        desc: "Monitors the number of hours of operation reported by the engine.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PercentLoad = {
        objectId: "AA-12",
        objectTypes: "Engine",
        desc: "Monitors the  current load on the engine as a percentage of its rated load.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PercentTorque = {
        objectId: "AA-13",
        objectTypes: "Engine",
        desc: "Monitors the current torque being provided by the engine as a percentate of its rated torque.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      Tachometer = {
        objectId: "AA-14",
        objectTypes: "Engine",
        desc: "Monitors the rotational speed of the engine.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TiltTrim = {
        objectId: "AA-15",
        objectTypes: "Engine",
        desc: "Monitors the tilt or trim of the drive.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      TripFuelUsed = {
        objectId: "AA-16",
        objectTypes: "Engine",
        desc: "Monitors the fuel used since the last reset.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      Voltage = {
        objectId: "AA-17",
        objectTypes: "Engine",
        desc: "Monitors the electrical power supply voltage measured at the engine.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
];

export default EngineAlerts;

// eof

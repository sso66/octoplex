// EngineDataTypes.js
console.log( "Mounting EngineAlerts.js..." );

import { Gauge, BarGraph, Digital, LineGraph } from "./AvailableComponentTypes";

const EngineDataTypes = [

      EngineBoostPressure = {
        objectId: "DT-01",
        objectTypes: "Engine",
        desc: "Displays the boost pressure of a supercharger or turbocharger.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'kilopascals', 'bars', 'pounds/square inch' ]
      },
      EngineCoolantPressure = {
        objectId: "DT-02",
        objectTypes: "Engine",
        desc: "Displays the engine's water/cooler temperature.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: ['kilopascals', 'bars', 'pounds/square inch']
      },
      EngineCoolantTemperature = {
        objectId: "DT-03",
        objectTypes: "Engine",
        desc: "Displays the engine's water/cooler pressure.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrentheit' ]
      },
      EngineFuelPressure = {
        objectId: "DT-04",
        objectTypes: "Engine",
        desc: "Displays the pressure of the fuel for the engine.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: ['kilopascals', 'bars', 'pounds/square inch']
      },
      EngineOilPressure = {
        objectId: "DT-05",
        objectTypes: "Engine",
        desc: "Displays the engine's oil pressure.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: ['kilopascals', 'bars', 'pounds/square inch']
      },
      EngineOilTemperature = {
        objectId: "DT-06",
        objectTypes: "Engine",
        desc: "Displays the engine's oil temperature.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrentheit' ]
      },
      ExhaustGasTemperature = {
        objectId: "DT-07",
        objectTypes: "Engine",
        desc: "Displays the temperature of the engine's exhaust gases.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'Degrees Centigrade', 'Degrees Fahrentheit' ]
      },
      FuelConsumption = {
        objectId: "DT-08",
        objectTypes: "Engine",
        desc: "Displays the engine's fuel usage (volumn / distance)."
                + "This is the inverse of fuel ecconomy.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'imp gals/kilometer', 'liters/kilometer', 'gals/kilometer', 
                 'imp gals/nautical mile', 'liters/nautical mile', 'gals/nautical mile', 
                 'imp gals/statute mile', 'liters/statute mile', 'gals/statute' ]
      },
      FuelEconomy = {
        objectId: "DT-09",
        objectTypes: "Engine",
        desc: "Displays the engine's fuel usage.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'imp gals/kilometer', 'liters/kilometer', 'gals/kilometer', 
                 'imp gals/nautical mile', 'liters/nautical mile', 'gals/nautical mile', 
                 'imp gals/statute mile', 'liters/statute mile', 'gals/statute' ]
      },
      FuelRate = {
        objectId: "DT-10",
        objectTypes: "Engine",
        desc: "Displays the rate of fuel consumption for the engine.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'imp gal/hr', 'liter/hr', 'gal/hr' ]
      },
      Hours = {
        objectId: "DT-11",
        objectTypes: "Engine",
        desc: "Displays the number of hours of operation reported by the engine.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: 'Hours'
      },
      PercentLoad = {
        objectId: "DT-12",
        objectTypes: "Engine",
        desc: "Displays the  current load on the engine as a percentage of its rated load.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: 'percent'
      },
      PercentTorque = {
        objectId: "DT-13",
        objectTypes: "Engine",
        desc: "Displays the current torque being provided by the engine as a percentate of its rated torque.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: 'percent'
      },
      Tachometer = {
        objectId: "DT-14",
        objectTypes: "Engine",
        desc: "Displays the rotational speed of the engine.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: 'revolutions/minuite'
      },
      TiltTrim = {
        objectId: "DT-15",
        objectTypes: "Engine",
        desc: "Displays the tilt or trim of the drive.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: 'percent'
      },
      Voltage = {
        objectId: "DT-16",
        objectTypes: "Engine",
        desc: "Monitors the electrical power supply voltage measured at the engine.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: 'Volts'
      },
];

export default EngineDataTypes;

// eof

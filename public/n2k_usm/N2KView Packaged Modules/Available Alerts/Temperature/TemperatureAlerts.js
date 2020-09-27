// TemperatureAlerts.js
console.log( "Mounting TemperatureAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const TemperatureAlerts = [

    BaitWellTemperature = {
        objectId: "AA-01",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Bait Well'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    BatteryTemperature = {
        objectId: "AA-02",
        objectTypes: "Temperature",
        desc: "Monitors the battery case temperature.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    DewPoint = {
        objectId: "AA-03",
        objectTypes: "Temperature",
        desc: "Monitors the current dew point based on outside air temperature and humidity.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    EngineCoolantTemperature = {
        objectId: "AA-04",
        objectTypes: "Temperature",
        desc: "Monitors the engine’s water/coolant temperature.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    EngineOilTemperature = {
        objectId: "AA-05",
        objectTypes: "Temperature",
        desc: "Monitors the engine’s oil temperature.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    EngineRoomTemperature = {
        objectId: "AA-06",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Engine Room'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    ExhaustGasTemperature = {
        objectId: "AA-07",
        objectTypes: "Temperature",
        desc: "Monitors the temperature of the engine’s exhaust gases.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    FreezerTemperature = {
        objectId: "AA-08",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of “Freezer”.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    HeatIndex = {
        objectId: "AA-09",
        objectTypes: "Temperature",
        desc: "Monitors the current heat index based on outside air temperature and humidity.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    HeatingSystemTemperature = {
        objectId: "AA-10",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Heating System'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    InsideideTemperature = {
        objectId: "AA-11",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a sourc of 'Inside'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    LiveWellTemperature = {
        objectId: "AA-12",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Live Well'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    MainCabinTemperature = {
        objectId: "AA-13",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Main Cabin'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    OutsideTemperature = {
        objectId: "AA-14",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Outside'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    RefrigerationTemperature = {
        objectId: "AA-15",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Refrigeration'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
  
     SeaTemperature = {
        objectId: "AA-16",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Sea'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    TransmissionOilTemperature = {
        objectId: "AA-17",
        objectTypes: "Temperature",
        desc: "Monitors the temperature of the oil in the transmission.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    UserDefinednnnTemperature = {
        objectId: "AA-18",
        objectTypes: "Temperature",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 
                + " 'User Defined nnn' , where nnn is a number from 128 to 144.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    WindChill = {
        objectId: "AA-19",
        objectTypes: "Temperature",
        desc: "Monitors the current wind chill based on outside air temperature and wind speed.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
  },
];

export default TemperatureAlerts;

// eof

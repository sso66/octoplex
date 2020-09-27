// EnvironmentAlerts.js
console.log( "Mounting EnvironmentAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const EnvironmentAlerts = [

    BaitWellTemperature = {
        objectId: "AA-01",
        objectTypes: "Environment",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Bait Well'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    BarometicPressure = {
        objectId: "AA-02",
        objectTypes: "Environment",
        desc: "Monitors the atmospheric (barometric) pressure.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    DewPoint = {
        objectId: "AA-03",
        objectTypes: "Environment",
        desc: "Monitors the current dew point based on outside air temperature and humidity.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    EngineRoomTemperature = {
        objectId: "AA-04",
        objectTypes: "Environment",
        desc: "Monitors the temperature from a temperature sensor set up with a source of 'Engine Room'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    HeatIndex = {
        objectId: "AA-05",
        objectTypes: "Environment",
        desc: "Monitors the current heat index based on outside air temperature and humidity.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    InsideHumidity = {
        objectId: "AA-06",
        objectTypes: "Environment",
        desc: "Monitors the relative humidity from a humidity sensor set up with a source of 'Inside'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    InsideTemperature = {
        objectId: "AA-07",
        objectTypes: "Environment",
        desc: "Monitors the temperature from a temperature sensor set up with a sourc of 'Inside'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    LiveWellTemperature = {
        objectId: "AA-08",
        objectTypes: "Environment",
        desc: "Monitors the temperature from a temperature sensor set up with a sourc of 'Live Well'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    MainCabinTemperature = {
        objectId: "AA-09",
        objectTypes: "Environment",
        desc: "Monitors the temperature from a temperature sensor set up with a sourc of 'Main Cabin'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    OutsideHumidity = {
        objectId: "AA-10",
        objectTypes: "Environment",
        desc: "Monitors the humidity from a humidity sensor set up with a sourc of 'Outside'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    OutsideTemperature = {
        objectId: "AA-11",
        objectTypes: "Environment",
        desc: "Monitors the temperature from a temperature sensor set up with a sourc of 'Outside'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    SeaTemperature = {
        objectId: "AA-12",
        objectTypes: "Environment",
        desc: "Monitors the temperature from a temperature sensor set up with a sourc of 'Sea'.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    UserDefinednnnHumidity = {
        objectId: "AA-13",
        objectTypes: "Environment",
        desc: "Monitors the relative humidity from a humidity sensor set up with a source of 
                + "'User Defined nnn', where nnn is a number from 128 to 144.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    UserDefinednnnTemperature = {
        objectId: "AA-14",
        objectTypes: "Environment",
        desc: "Monitors the relative temperature from a temperature sensor set up with a source of 
                + "'User Defined nnn', where nnn is a number from 128 to 144.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    WindChill = {
        objectId: "AA-15",
        objectTypes: "Environment",
        desc: "Monitors the current wind chill based on outside air temperature and wind speed.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
];

export default EnvironmentAlerts;

// eof

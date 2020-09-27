// EnvironmentDataTypes.js
console.log( "Mounting EnvironmentDataTypes.js..." );

import { Gauge, BarGraph, Digital, LineGraph, MoonPhase } from "./AvailableComponentTypes";

const EnvironmentDataTypes = [

    BaitWellTemperature = {
        objectId: "DT-01",
        objectTypes: "Environment",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Bait Well'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    BarometicPressure = {
        objectId: "DT-02",
        objectTypes: "Environment",
        desc: "Displays the atmospheric (barometric) pressure.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'bars', 'millibars', 'inches mercury', 'kilopascals', 'millimeters mercury' ]
    },
    DewPoint = {
        objectId: "DT-03",
        objectTypes: "Environment",
        desc: "Displays the current dew point based on outside air temperature and humidity.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    EngineRoomTemperature = {
        objectId: "DT-04",
        objectTypes: "Environment",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Engine Room'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    HeatIndex = {
        objectId: "DT-05",
        objectTypes: "Environment",
        desc: "Displays the current heat index based on outside air temperature and humidity.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    InsideHumidity = {
        objectId: "DT-06",
        objectTypes: "Environment",
        desc: "Displays the relative humidity from a humidity sensor set up with a source of 'Inside'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: 'Percent'
    },
    InsideTemperature = {
        objectId: "DT-07",
        objectTypes: "Environment",
        desc: "Displays the temperature from a temperature sensor set up with a sourc of 'Inside'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    LiveWellTemperature = {
        objectId: "DT-08",
        objectTypes: "Environment",
        desc: "Displays the temperature from a temperature sensor set up with a sourc of 'Live Well'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    MainCabinTemperature = {
        objectId: "DT-09",
        objectTypes: "Environment",
        desc: "Displays the temperature from a temperature sensor set up with a sourc of 'Main Cabin'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    MoonPhase = {
        objectId: "DT-10",
        objectTypes: "Environment",
        desc: "Displays the phase of the moon at the current time and date",
        componentTypes: [ MoonPhase ]
    },
    OutsideHumidity = {
        objectId: "DT-11",
        objectTypes: "Environment",
        desc: "Displays the humidity from a humidity sensor set up with a sourc of 'Outside'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: 'Percent'
    },
    OutsideTemperature = {
        objectId: "DT-12",
        objectTypes: "Environment",
        desc: "Displays the temperature from a temperature sensor set up with a sourc of 'Outside'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    SeaTemperature = {
        objectId: "DT-13",
        objectTypes: "Environment",
        desc: "Displays the temperature from a temperature sensor set up with a sourc of 'Sea'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    Sunrise = {
        objectId: "DT-14",
        objectTypes: "Environment",
        desc: "Displays the local time of sunrise for the current day and position.",
        componentTypes: [ Digital ],
        timeZone: Selectable,
        units: [ '12 hour', '24 hour' ]
    },
    Sunset = {
        objectId: "DT-15",
        objectTypes: "Environment",
        desc: "Displays the local time of sunset for the current day and position.",
        componentTypes: [ Digital ],
        timeZone: Selectable,
        units: [ '12 hour', '24 hour' ]
    },
    TwilightAM = {
        objectId: "DT-16",
        objectTypes: "Environment",
        desc: "Displays the UTC time of nautical twilight before sunrise for the current day.",
        componentTypes: [ Digital ],
        timeZone: Selectable,
        units: [ '12 hour', '24 hour' ]
    },
    TwilightPM = {
        objectId: "DT-17",
        objectTypes: "Environment",
        desc: "Displays the UTC time of nautical twilight before sunset for the current day.",
        componentTypes: [ Digital ],
        timeZone: Selectable,
        units: [ '12 hour', '24 hour' ]
    },
    UserDefinednnnHumidity = {
        objectId: "DT-18",
        objectTypes: "Environment",
        desc: "Displays the relative humidity from a humidity sensor set up with a source of"
                + "'User Defined nnn', where nnn is a number from 128 to 144.",
        componentTypes: [ BarGraph, Digital, LineGraph ],
        instances: 253,
        units: 'Percent'
    },
    UserDefinednnnTemperature = {
        objectId: "DT-19",
        objectTypes: "Environment",
        desc: "Displays the relative temperature from a temperature sensor set up with a source of"
                + "'User Defined nnn', where nnn is a number from 128 to 144.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    WindChill = {
        objectId: "DT-20",
        objectTypes: "Environment",
        desc: "Displays the current wind chill based on outside air temperature and wind speed.",
        componentTypes: [ Gauge, Digital ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
];

export default EnvironmentDataTypes;

// eof

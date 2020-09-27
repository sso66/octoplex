// TemperatureDataTypes.js
console.log( "Mounting TemperatureDataTypes.js..." );

import { Gauge, BarGraph, Digital, LineGraph } from "./AvailableComponentTypes";

const TemperatureDataTypes = [

    BaitWellTemperature = {
        objectId: "DT-01",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Bait Well'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    BatteryTemperature = {
        objectId: "DT-02",
        objectTypes: "Temperature",
        desc: "Displays the battery case temperature.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    DewPoint = {
        objectId: "DT-03",
        objectTypes: "Temperature",
        desc: "Displays the current dew point based on outside air temperature and humidity.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    EngineCoolantTemperature = {
        objectId: "DT-04",
        objectTypes: "Temperature",
        desc: "Displays the engine’s water/coolant temperature.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    EngineOilTemperature = {
        objectId: "DT-05",
        objectTypes: "Temperature",
        desc: "Displays the engine’s oil temperature.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    EngineRoomTemperature = {
        objectId: "DT-06",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Engine Room'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    ExhaustGasTemperature = {
        objectId: "DT-07",
        objectTypes: "Temperature",
        desc: "Displays the temperature of the engine’s exhaust gases.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253, units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    FreezerTemperature = {
        objectId: "DT-08",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of “Freezer”.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    HeatIndex = {
        objectId: "DT-09",
        objectTypes: "Temperature",
        desc: "Displays the current heat index based on outside air temperature and humidity.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253, units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    HeatingSystemTemperature = {
        objectId: "DT-10",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Heating System'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    InsideideTemperature = {
        objectId: "DT-11",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a sourc of 'Inside'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    LiveWellTemperature = {
        objectId: "DT-12",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Live Well'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    MainCabinTemperature = {
        objectId: "DT-13",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Main Cabin'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    OutsideTemperature = {
        objectId: "DT-14",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Outside'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    RefrigerationTemperature = {
        objectId: "DT-15",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Refrigeration'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    SeaTemperature = {
        objectId: "DT-16",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of 'Sea'.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    TransmissionOilTemperature = {
        objectId: "DT-17",
        objectTypes: "Temperature",
        desc: "Displays the temperature of the oil in the transmission.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253, units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    UserDefinednnnTemperature = {
        objectId: "DT-18",
        objectTypes: "Temperature",
        desc: "Displays the temperature from a temperature sensor set up with a source of" +
                " 'User Defined nnn' , where nnn is a number from 128 to 144.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
    WindChill = {
        objectId: "DT-19",
        objectTypes: "Temperature",
        desc: "Displays the current wind chill based on outside air temperature and wind speed.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'degrees Centigrade', 'degrees Fahrenheit' ]
    },
];

export default TemperatureDataTypes;

// eof

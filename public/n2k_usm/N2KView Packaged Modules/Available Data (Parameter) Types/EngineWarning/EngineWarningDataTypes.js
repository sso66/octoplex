// EngineWarningDataTypes.js
console.log( "Mounting EngineWarningDataTypes.js..." );

import { IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph } from "./AvailableComponent Types";

const EngineWarningDataTypes = [

    Charge = {
        objectId: "DT-01",
        objectTypes: "EngineWarning",
        desc: "Generally indicates a fault in the engine's charging system. Please consult" +
                " the engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    CheckEngine = {
        objectId: "DT-02",
        objectTypes: "EngineWarning",
        desc: "Generally indicates some condition in the engine that requires investigation." +
                " Please consult the engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    CommError = {
        objectId: "DT-03",
        objectTypes: "EngineWarning",
        desc: "Generally indicates some conditions relative to the engine's communications" +
                " that requires investigation. Please consult the engine manufacturer's" +
                " documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    Cranking = {
        objectId: "DT-04",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the starter on the engine is engaged. Please consult" +
                " the engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    EGRSystem = {
        objectId: "DT-05",
        objectTypes: "EngineWarning",
        desc: "Generally indicates a fault in the exhaust gas recirculation (EGR) system." +
                " Please consult the engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    EmergencyStop = {
        objectId: "DT-06",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the engine was stopped using an emergency stop button." +
                " Please consult the engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    HighBoost = {
        objectId: "DT-07",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the supercharger/turbocharger boot pressure has exceeded" +
                " some engine-defined limit. Please the engine manufacturer's documentation" +
                " for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    LowCoolantLevel = {
        objectId: "DT-08",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the level of coolant has fallen below some engine-defined" +
                " limit. Please consult engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    LowFuelPressure = {
        objectId: "DT-09",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the level of fuel pressure has fallen below some" +
                " engine-defined limit. Please consult engine manufacturer's documentation" +
                " for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    LowOilLevel = {
        objectId: "DT-10",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the oil level has fallen below some user-defined" +
                " limit. Please consult engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    LowOilPressure = {
        objectId: "DT-11",
        objectTypes: "Engine",
        desc: "Generally indicates that the oil pressure has fallen below some user-defined" +
                " limit. Please consult engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    LowSystemVoltage = {
        objectId: "DT-12",
        objectTypes: "Engine",
        desc: "Generally indicates that the system voltage as fallen below some user-defined" +
                " limit. Please consult engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    MaintenanceNeeded = {
        objectId: "DT-13",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine is need of maintenance. Please consult" +
                " engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    NeutralStartProtect = {
        objectId: "DT-14",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine will not start because the transmission is not" +
                " in netural. Please consult engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    OverTemperature = {
        objectId: "DT-15",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine's temperature has exceed some user-defined limit." +
                " Please consult engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    PowerReduction = {
        objectId: "DT-16",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine is operatin in a reduced-power mode due to some" +
                "fault condition. Please consult engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    Preheat = {
        objectId: "DT-17",
        objectTypes: "Engine",
        desc: "Generally indicates that the cylinder preheaters are active. Please consult engine" +
                " manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    RevLimitExceeded = {
        objectId: "DT-18",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine's RPM has exceeded some engine-defined limit." +
                " Please consult the engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    ShuttingDown = {
        objectId: "DT-19",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine is in the process of shutting down. Please consult" +
                " the engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    SubSecondaryThrottle = {
        objectId: "DT-20",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine has fallen back to a secondary throttle due to some" +
                " fault detected in the primary throttle. Please consult the engine manufacturer's" +
                " documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    ThrottlePositionSensor = {
        objectId: "DT-21",
        objectTypes: "Engine",
        desc: "Generally indicates a fault in the throttle position sensor. Please consult engine" +
                " manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    WarningLevel1 = {
        objectId: "DT-22",
        objectTypes: "Engine",
        desc: "Generally indicates some engine-specific warning condition. Please consult the engine" +
                " manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    WarningLevel2 = {
        objectId: "DT-23",
        objectTypes: "Engine",
        desc: "Generally indicates some engine-specific warning condition. Please consult the engine" +
                " manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    WaterFlow = {
        objectId: "DT-24",
        objectTypes: "Engine",
        desc: "Generally indicates a lack of flow in cooling system. Please consult the engine" +
                " manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    WaterInFuel = {
        objectId: "DT-25",
        objectTypes: "Engine",
        desc: "Generally indicates that the water hase been detected in the engine'a fuel. Please" +
                " consult the engine manufacturer's documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
];

export default EngineWarningDataTypes;

// eof

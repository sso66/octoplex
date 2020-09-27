// EngineWarningAlerts.js
console.log( "Mounting EngineWarningAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const EngineWarningAlerts = [

      Charge = {
        objectId: "AA-01",
        objectTypes: "EngineWarning",
        desc: "Generally indicates a fault in the engine's charging system. Please consult'
                + " the engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      CheckEngine = {
        objectId: "AA-02",
        objectTypes: "EngineWarning",
        desc: "Generally indicates some condition in the engine that requires investigation.
                + "Please consult the engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },  
      CommError = {
        objectId: "AA-03",
        objectTypes: "EngineWarning",
        desc: "Generally indicates some conditions relative to the engine's communications 
                + " that requires investigation. Please consult the engine manufacturer's 
                + " documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      Cranking = {
        objectId: "AA-04",
        objectTypes: "EngineWarning",
       desc: "Generally indicates that the starter on the engine is engaged. Please consult'
                + " the engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EGRSystem = {
        objectId: "AA-05",
        objectTypes: "EngineWarning",
        desc: "Generally indicates a fault in the exhaust gas recirculation (EGR) system.'
                + " Please consult the engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      EmergencyStop = {
        objectId: "AA-06",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the engine was stopped using an emergency stop button.
                + " Please consult the engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      HighBoost = {
        objectId: "AA-07",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the supercharger/turbocharger boot pressure has exceeded"
                + " some engine-defined limit. Please the engine manufacturer's documentation 
                + " for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      LowCoolantLevel = {
        objectId: "AA-08",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the level of coolant has fallen below some engine-defined""
                + " limit. Please consult engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      LowFuelPressure = {
        objectId: "AA-09",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the level of fuel pressure has fallen below some 
                + " engine-defined limit. Please consult engine manufacturer's documentation 
                + " for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },  
      LowOilLevel = {
        objectId: "AA-10",
        objectTypes: "EngineWarning",
        desc: "Generally indicates that the oil level has fallen below some user-defined" 
                + " limit. Please consult engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      LowOilPressure = {
        objectId: "AA-11",
        objectTypes: "Engine",
       desc: "Generally indicates that the oil pressure has fallen below some user-defined" 
                + " limit. Please consult engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      LowSystemVoltage = {
        objectId: "AA-12",
        objectTypes: "Engine",
       desc: "Generally indicates that the system voltage as fallen below some user-defined 
                + " limit. Please consult engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      MaintenanceNeeded = {
        objectId: "AA-13",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine is need of maintenance. Please consult "
                + " engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      NeutralStartProtect = {
        objectId: "AA-14",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine will not start because the transmission is not "
                + " in netural. Please consult engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      OverTemperature = {
        objectId: "AA-15",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine's temperature has exceed some user-defined limit." 
                + " Please consult engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      PowerReduction = {
        objectId: "AA-16",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine is operatin in a reduced-power mode due to some" 
                    + "fault condition. Please consult engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      Preheat = {
        objectId: "AA-17",
        objectTypes: "Engine",
        desc: "Generally indicates that the cylinder preheaters are active. Please consult engine"
                + " manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      RevLimitExceeded = {
        objectId: "AA-18",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine's RPM has exceeded some engine-defined limit."
                + " Please consult the engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      ShuttingDown = {
        objectId: "AA-19",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine is in the process of shutting down. Please consult"
                + " the engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      SubSecondaryThrottle = {
        objectId: "AA-20",
        objectTypes: "Engine",
        desc: "Generally indicates that the engine has fallen back to a secondary throttle due to some"
                + " fault detected in the primary throttle. Please consult the engine manufacturer's" 
                + " documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
       ThrottlePositionSensor = {
        objectId: "AA-21",
        objectTypes: "Engine",
        desc: "Generally indicates a fault in the throttle position sensor. Please consult engine"
                + " manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      WarningLevel1 = {
        objectId: "AA-22",
        objectTypes: "Engine",
        desc: "Generally indicates some engine-specific warning condition. Please consult the engine"
                + " manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      WarningLevel2 = {
        objectId: "AA-23",
        objectTypes: "Engine",
        desc: "Generally indicates some engine-specific warning condition. Please consult the engine"
                + " manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      WaterFlow = {
        objectId: "AA-24",
        objectTypes: "Engine",
        desc: "Generally indicates a lack of flow in cooling system. Please consult the engine 
                + " manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
      WaterInFuel = {
        objectId: "AA-25",
        objectTypes: "Engine",
        desc: "Generally indicates that the water hase been detected in the engine'a fuel. Please 
                + " consult the engine manufacturer's documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
      },
];

export default EngineWarningAlerts;

// eof

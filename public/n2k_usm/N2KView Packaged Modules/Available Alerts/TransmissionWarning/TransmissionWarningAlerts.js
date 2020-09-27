// TransmissionWarningAlerts.js
console.log( "Mounting TransmissionWarningAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const TransmissionWarningAlerts = [
    
    CheckTransmission = {
        objectId: "AA-01",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates some fault condition in the transmission that"
                + " requires attention. Please consult the transmission manufacturer’s" 
                + " documentation for details.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    LowOilLevel = {
        objectId: "AA-02",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates that the oil level in the transmission has fallen" 
                + " below some transmission-defined limit. Please consult the transmission manufacturer’s""
                + "" documentation for details",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    LowOilPressure = {
        objectId: "AA-03",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates that the oil pressure in the transmission has fallen below some"
                + " transmission-defined limit. Please consult the transmission manufacturer’s"
                + " documentation for details.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
    OverTemperature = {
        objectId: "AA-04",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates that the operating temperature of the transmission exceeds some"
                + " transmission-defined limit. Please consult the transmission manufacturer’s"
                + " documentation for details",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
   SailDrive = {
        objectId: "AA-05",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates that the sail driver mode in the transmission has been activated."
                + " Please consult the transmission manufacturer’s documentation for details.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253
    },
  ];

export default TransmissionWarningAlerts;

// eof

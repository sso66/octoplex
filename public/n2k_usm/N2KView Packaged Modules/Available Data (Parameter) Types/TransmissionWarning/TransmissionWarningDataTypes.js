// TransmissionWarningDataTypes.js
console.log( "Mounting TransmissionWarningDataTypes.js..." );

import { IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph } from "./AvailableComponentTypes";

const TransmissionWarningDataTypes = [

    CheckTransmission = {
        objectId: "DT-01",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates some fault condition in the transmission that" +
                " requires attention. Please consult the transmission manufacturer’s" +
                " documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    LowOilLevel = {
        objectId: "DT-02",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates that the oil level in the transmission has fallen" +
                " below some transmission-defined limit. Please consult the transmission manufacturer’s" +
                " documentation for details",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    LowOilPressure = {
        objectId: "DT-03",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates that the oil pressure in the transmission has fallen below some" +
                " transmission-defined limit. Please consult the transmission manufacturer’s" +
                " documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    OverTemperature = {
        objectId: "DT-04",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates that the operating temperature of the transmission exceeds some"
                + " transmission-defined limit. Please consult the transmission manufacturer’s"
                + " documentation for details",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
    SailDrive = {
        objectId: "DT-05",
        objectTypes: "TransmissionWarning",
        desc: "Generally indicates that the sail driver mode in the transmission has been activated."
                + " Please consult the transmission manufacturer’s documentation for details.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253
    },
];

export default TransmissionWarningDataTypes;

// eof

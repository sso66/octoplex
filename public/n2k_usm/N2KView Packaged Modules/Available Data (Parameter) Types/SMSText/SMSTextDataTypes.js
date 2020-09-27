// SMSTextDataTypes.js
console.log( "Mounting SMSTextDataTypes.js..." );

import { IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, SignalStrength } from "./AvailableComponentTypes";

const SMSTextDataTypes = [

    SMSStatusIndicator = {
        objectId: "DT-01",
        objectTypes: "SMSText",
        desc: "Displays the status of the connection to the mobile network over" +
                " which SMS (Text) messages will be sent.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer ],
    },
    SMSStatus = {
        objectId: "DT-02",
        objectTypes: "SMSText",
        desc: "Displays the status of the connection to the mobile network over" +
                " which the SMS (Text) messages will be sent.",
        componentTypes: [ Digital ]
        // A two line digital display will be used to display the status
        // of the connection and the provider / phone number of the SMS100
    },
    SignalStrength = {
        objectId: "DT-03",
        objectTypes: "SMSText",
        desc: "Monitors the status of the SMS100 module.",
        componentTypes: [ SignalStrength ]
    },
];

export default RudderDataTypes;

// eof

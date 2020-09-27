// RudderDataTypes.js
console.log( "Mounting RudderDataTypes.js..." );

import { RudderAngle, Digital } from "./AvailableComponentTypes";

const RudderDataTypes = [

    RudderAngle = {
        objectId: "DT-01",
        objectTypes: "Anchor",
        desc: "Displays the angle of the vessel’s rudder as indicated by the rudder sensor.",
        componentTypes: [ RudderAngle, Digital ],
        instances: 253,
        units: "degrees"
    },
    RudderAngleOrder = {
        object: "DT-02",
        objectTypes: "Anchor",
        desc: "Displays the angle of the vessel’s rudder as indicated by the rudder sensor," +
                " as well as the angle to which a vessel’s rudder has been commanded be" +
                " an autopilot or steering mechanism.",
        componentTypes: [ RudderAngle ],
        instances: 253,
        units: "degrees"
    },
    RudderOrder = {
        object: "DT-03",
        objectTypes: "Anchor",
        desc: "Displays the angle to which a vessel’s rudder has been commanded" +
               " be an autopilot or steering mechanism.",
        componentTypes: [ Digital ],
        instances: 253,
        units: "degrees"
    }
];

export default RudderDataTypes;

// eof

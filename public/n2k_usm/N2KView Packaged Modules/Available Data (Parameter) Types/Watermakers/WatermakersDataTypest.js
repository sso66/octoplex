// WatermakersDataTypes.js
console.log( "Mounting WatermakersDataTypes.js..." );

import { SeaRecoveryStatus } from './AvailableComponentTypes';

const WatermakersDataTypes = [

    Watermakers = {
        objectId: "DT-01",
        objectTypes: "Watermakers",
        desc: "This component displays the status of a Sea Recovery Watermaker on the system.",
        // This would be the instance of the J2K100 bridge to which the
        // Watermaker is connected.
        componentTypes: [ SeaRecoveryStatus ],
    }
];

export default WatermakersDataTypes;

// eof

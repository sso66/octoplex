// IceMakersDataTypes.js
console.log( "Mounting IceMakersDataTypes.js..." );

import { IceMaker } from './AvailableComponentTypes';

const IceMakersDataTypes = [

    Eskimo = {
        objectId: "DT-01",
        objectTypes: "IceMakers",
        desc: "This component displays the status of an Eskimo Ice Maker on the system.",
        // This would be the instance of the J2K100 bridge to
        // which the Ice Maker is connected
        componentTypes: [ IceMaker ],
        instances: 253,
    },
];

export default IceMakersDataTypes;

// eof

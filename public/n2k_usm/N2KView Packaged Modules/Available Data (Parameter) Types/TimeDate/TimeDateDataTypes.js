// TimeDateDataTypes.js
console.log( "Mounting TimeDateDataTypes.js..." );

import { Digital, MoonPhase } from "./AvailableComponentTypes";

const TimeDateDataTypes = [

    Date = {
        objectId: "DT-01",
        objectTypes: "TImeDate",
        desc: "Displays the current date. The time zone may be entered as part of the component" +
                " configuration, or it may be set to reference the local time offset.",
        componentTypes: [ Digital ],
        units: [ 'Default', 'DD-MM-YYYY', 'DD-MMM-YYYY', 'MM-DD-YYYY', 'MMM-DD-YYYY' ]
        // When the units are set to “Default”, the formatting for the displayed date
        // is obtained from the Units Setup Page.
    },
    LocalTimeOffset = {
        objectId: "DT-02",
        objectTypes: "TImeDate",
        desc: "Displays the local time offset as set in the Units Setup Page.",
        componentTypes: [ Digital ],
        units: [ 'Hours:Minutes' ]
    },
    MoonPhase = {
        objectId: "DT-03",
        objectTypes: "TImeDate",
        desc: "Displays the phase of the moon at the current time and location.",
        componentTypes: [ MoonPhase ],
        units: [ 'Default', 'DD-MM-YYYY', 'DD-MMM-YYYY', 'MM-DD-YYYY', 'MMM-DD-YYYY' ]
        // When the units are set to “Default”, the formatting for the displayed date
        // is obtained from the Units Setup Page.
    },
    Sunrise = {
        objectId: "DT-04",
        objectTypes: "TImeDate",
        desc: "Displays the time of sunrise for the current day and position." +
                " The time zone may be entered as part of the component configuration.",
        componentTypes: [ Digital ],
        units: [ '12 hour', '24 hour' ]
    },
    Sunset = {
        objectId: "DT-05",
        objectTypes: "TImeDate",
        desc: "Displays the time of sunset for the current day and position." +
                " The time zone may be entered as part of the component configuration.",
        componentTypes: [ Digital ],
        units: [ '12 hour', '24 hour' ]
    },
    Time = {
        objectId: "DT-06",
        objectTypes: "TImeDate",
        desc: "Displays the current time. The time zone may be entered as part of the" +
                " component configuration",
        componentTypes: [ Digital ],
        units: [ '12 hour', '24 hour' ]
    },
    TwilightAM = {
        objectId: "DT-07",
        objectTypes: "TImeDate",
        desc: "Displays the time of nautical twilight before sunrise for the current day" +
                " and position. The time zone may be entered as part of the component configuration.",
        componentTypes: [ Digital ],
        units: [ '12 hour', '24 hour' ]
    },
    TwilightPM = {
        objectId: "DT-08",
        objectTypes: "TImeDate",
        desc: "Displays the time of nautical twilight after sunset for the current day" +
                " and position. The time zone may be entered as part of the component configuration",
        componentTypes: [ Digital ],
        units: [ '12 hour', '24 hour' ]
    },
];

export default TimeDateDataTypes;

// eof

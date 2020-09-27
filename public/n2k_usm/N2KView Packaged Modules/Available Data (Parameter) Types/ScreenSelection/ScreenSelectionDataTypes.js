// ScreenSelectionDataTypes.js
console.log( "Mounting ScreenSelectionDataTypes.js..." );

import { ScreenSelectionButton } from './AvailableComponentTypes';

const ScreenSelectionDataTypes = [

    ScreenSelection = {
        objectId: "DT-01",
        objectTypes: "ScreenSelection",
        desc: "Navigates to a specified Favorite screen based on the title of the screen",
        componentTypes: [ ScreenSelectionButton ]
    },
    Back = {
        objectId: "DT-02",
        objectTypes: "ScreenSelection",
        desc: "Navigates to the previously displayed Favorite screen.",
        componentTNypes: [ ScreenSelectionButton ]
    },
    ShowTabs = {
        objectId: "DT-03",
        objectTypes: "ScreenSelection",
        desc: "Displays the Tabs",
        componentTypes: [ ScreenSelectionButton ]
    },
    Power = {
        objectId: "DT-04",
        objectTypes: "ScreenSelection",
        desc: "Opens the Power Management Sub-menu.",
        componentTypes: [ ScreenSelectionButton ]
    },
    BreakerLockoutDialog = {
        objectId: "DT-05",
        objectTypes: "ScreenSelection",
        desc: "Opens the Breaker Lockout dialog for the page on which" +
                " the Screen Select button is located.",
        componentTypes: [ ScreenSelectionButton ]
    },
    BreakerStatusDialog = {
        objectId: "DT-06",
        objectTypes: "ScreenSelection",
        desc: "Opens the Breaker Status dialog for the page on which" +
                " the Screen Select button is located.",
        componentTypes: [ ScreenSelectionButton ]
    },
    About = {
        objectId: "DT-07",
        objectTypes: "ScreenSelection",
        desc: "Opens the About dialog.",
        componentTypes: [ ScreenSelectionButton ]
    },
    CleanScreen = {
        objectId: "DT-08",
        objectTypes: "ScreenSelection",
        desc: "Opens the Clean Screen dialog.",
        componentTypes: [ ScreenSelectionButton ]
    },
    GeneralConfiguration = {
        objectId: "DT-09",
        objectTypes: "ScreenSelection",
        desc: "Opens the General Configuration dialog.",
        componentTypes: [ ScreenSelectionButton ]
    },
    OperationMode = {
        objectId: "DT-10",
        objectTypes: "ScreenSelection",
        desc: "Opens the Operating Mode dialog.",
        componentTypes: [ ScreenSelectionButton ]
    },
];

export default ScreenSelectionDataTypes;

// eof

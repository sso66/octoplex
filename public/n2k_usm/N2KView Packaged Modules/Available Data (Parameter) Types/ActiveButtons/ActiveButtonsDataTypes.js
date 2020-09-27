// ActiveButtonsDataTypes.js
console.log( "Mounting ActiveButtonsDataTypes.js..." );

import { ActiveButton4x1, ActiveButton2x1 } from './AvailableComponentTypes';

const ActiveButtonsDataTypes = [

     ContractGraphs = {
        objectId: "DT-01",
        objectTypes: "ActiveButtons",
        desc: "When this button is pressed all the graphs on the page will change" +
                " their horizontal axis timescales to the next smaller value.",
        componentTypes: [ ActiveButton4x1, ActiveButton2x1 ]
     },
     ExpandGraphs = {
        objectId: "DT-02",
        objectTypes: "ActiveButtons",
        desc: "When this button is pressed all the graphs on the page will change" +
                + " their horizontal axis timescales to the next larger value.",
        componentTypes: [ ActiveButton4x1, ActiveButton2x1 ]
     },
     ResetAllCounters = {
        objectId: "DT-03",
        objectTypes: "ActiveButtons",
        desc: "When this button is pressed all the counters on the page will be reset to zero.",
        componentTypes: [ ActiveButton4x1, ActiveButton2x1 ]
     },
     ResetAllTimers = {
        objectId: "DT-04",
        objectTypes: "ActiveButtons",
        desc: "When this button is pressed all the timers on the page will be reset to zero.",
        componentTypes: [ ActiveButton4x1, ActiveButton2x1 ]
     },
     ShowTabs = {
        objectId: "DT-05",
        objectTypes: "ActiveButtons",
        desc: "When this button is pressed the tabs will be displayed.",
        componentTypes: [ ScreenSelectionButton ]
     },
];

export default ActiveButtonsDataTypes;

// eof
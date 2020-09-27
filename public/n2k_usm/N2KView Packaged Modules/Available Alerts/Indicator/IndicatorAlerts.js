// IndicatorAlerts.js
console.log( "Mounting IndicatorAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const IndicatorAlerts = [

      HardwareCounter = {
        objectId: "AA-01",
        objectTypes: "Indicator",
        desc: "Monitors whether the count of the number of times the Indicator has been ON exceeds"
                + " a specified value. There is no Clear Value for this Alert; it will be cleared"
                + " when the count is reset in the device",
        alertClasses: [ CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        switchesPerInstance: 28
      },
      HardwareTimer = {
        objectId: "AA-02",
        objectTypes: "Indicator",
        desc: "Monitors whether the cumulative ON time of the Indicator exceeds a specified value."
                + " There is no Clear Value for this Alert; it will be cleared when the timer i"
                + " reset in the device.",
        alertClasses: [ CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        switchesPerInstance: 28
      },
      Status = {
        objectId: "AA-03",
        objectTypes: "Indicator",
        desc: "Monitors the status of a switch indicator or run indicator on the system.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_ERROR, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        switchesPerInstance: 28
      },
      SwitchBreakerGroupStatus = {
        objectId: "AA-04",
        objectTypes: "Indicator",
        title: "Monitors the status of a group of Breakers defined as a Switch / Breaker Group and"
                + " Alerts when the breakers meet the requirements of the Group (ON) or not (OFF).",
        alertClasses: [ CLASS_ON, CLASS_OFF ],
        instances: 253,
        switchesPerInstance: 28
      },
];

export default IndicatorAlerts;

// eof

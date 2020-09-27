// ElectricalDistributionAlerts.js
console.log( "Mounting ElectricalDistributionAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const ElectricalDistributionAlerts = [

      SwitchCircuitBreaker = {
        objectId: "AA-01",
        objectTypes: "ElectricalDistribution",
        desc: "Monitors whether the specificed braker is on, off, or tripped.",
        alertClasses: [ CLASS_ON, CLASS_OFF, CLASS_TRIPPED, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        switchesPerInstance: 28
      },
      HardwareCounter = {
        objectId: "AA-02",
        objectTypes: "ElectricalDistribution",
        desc: "Monitors whether the count of the number of times the switch / breaker has been."
                + " switched ON exceeds a specified value. There is no Clear Value for this"
                + " Alert; it will cleared when the count is reset in the device.",
        alertClasses: [ CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        switchesPerInstance: 28
      },
      HardwareTimer = {
        objectId: "AA-03",
        objectTypes: "ElectricalDistribution",
        desc: "Monitors whether the cumulative ON time of switch / breaker exceeds a specificed."
                + " value. There is no Clear Value for this Alert; it will cleared when the count"
                + " is reset in the device.",
        alertClasses: [ CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        switchesPerInstance: 28
      },
      SwitchBreakerCurrent = {
        objectId: "AA-04",
        objectTypes: "ElectricalDistribution",
        title: "Monitors the current reported by the switch / breaker when the switch / breaker is turned ON.",
        alertClasses: [ CLASS_BURNT_OUR_BULB, CLASS_LOW_CURRENT_WHEN_ON, CLASS_HIGH_CURRENT_WHEN_ON ],
        instances: 253,
        switchesPerInstance: 28
      },
];

export default ElectricalDistributionAlerts;

// eof

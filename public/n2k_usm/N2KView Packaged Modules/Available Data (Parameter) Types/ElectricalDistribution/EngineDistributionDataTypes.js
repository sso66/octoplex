// ElectricalDistributionDataTypes.js
console.log( "Mounting ElectricalDistributionDataTypes.js..." );

import { ActiveButtons, CircuitBreakerSwitch, DigitalCounter, DigitalTimer } from "./AvailableComponentTypes";

const ElectricalDistributionDataTypes = [

    SwitchCircuitBreaker = {
        objectId: "DT-01",
        objectTypes: "ElectricalDistribution",
        desc: "Displays whether the specified circuit breaker is open, closed, or tripped." +
                " If you have licensed the Control Module, and the circuit breaker panel" +
                " supports remote switching, then you will able to turn the breaker On and" +
                " Off by clicking on the component. If the breaker has been tripped, you can" +
                " reset it by turning it Off and then back On.",
        componentTypes: [ ActiveButtons, CircuitBreakerSwitch ],
        instances: 253,
        switchesPerInstance: 28
    },
    HardwareCounter = {
        objectId: "DT-02",
        objectTypes: "ElectricalDistribution",
        desc: "Maretron’s DCR100, SIM100 and RIM100 will count switch operations. This parameter" +
                " displays the value of the count stored in the device. A reset button allows" +
                " the count to be reset. Separate counters are maintained for On count, Off count" +
                " and Error count. All are reset simultaneously.",
        componentTypes: [ DigitalCounter ],
        instances: 253,
        switchesPerInstance: 28
    },
    HardwareTimer = {
        objectId: "DT-03",
        objectTypes: "ElectricalDistribution",
        desc: "Maretron’s DCR100, SIM100 and RIM100 will time switch operations. This parameter" +
                " displays the value of the time stored in the device. A reset button allows the" +
                " timer to be reset. Separate timers are maintained for On time, Off time and" +
                " Error time. All are reset simultaneously.",
        componentTypess: [ DigitalTimer ],
        instances: 253,
        switchesPerInstance: 28
    },
    SwitchBreakerCurrent = {
        objectId: "DT-04",
        objectTypes: "ElectricalDistribution",
        desc: "Maretron’s DCR100 and Carling’s DC Switches measure the current flowing through a" +
                " switch. This parameter displays that current.",
        componentTypess: [ CircuitBreakerSwitch ],
        instances: 253,
        units: 'Amps',
        switchesPerInstance: 28
    },
    SwitchBreakerGroup = {
        objectId: "DT-05",
        objectTypes: "ElectricalDistribution",
        desc: "Displays whether the specified Switch/Breaker Group has the group condition met." +
                "(i.e. if all the switches of the group are in the state required by the group," +
                " the switch will show as ON). Pressing the momentary switch, will command all" +
                " the breakers in the group to their desired state. When all those requests have" +
                " been satisfied and the switches report their states back to N2KView, then the" +
                " control will move to the ON position. As soon as any switch in the group moves" +
                " away from its desired state, the switch moves to the OFF position.",
        componentTypess: [ ActionButtons, CircuitBreakerSwitch ], // (momentary only */)
        instances: 253,
        switchesPerInstance: 28
    },
];

export default ElectricalDistributionDataTypes;

// eof

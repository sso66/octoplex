// IndicatorDataTypes.js
console.log( "Mounting IndicatorDataTypes.js..." );

import { IndicatorLight, SmallIndicatorLight, DigitalCounter, DitigalTimer, IndicatorGraph } from "./AvailableComponentTypes";

const IndicatorDataTypes = [

      HardwareCounter = {
        objectId: "DT-01",
        objectTypes: "Indicator",
        desc: "Maretron’s SIM100, RIM100 and DCR100 are now equipped with an internal hardware" +
                " counter. Use this parameter to read the value of the internal hardware counter." +
                " Pressing the reset button will command the counter within the device to zero.",
        componentTypes: [ DigitalConuter ],
        instances: 253,
        channelsPerInstance: 28
      },
      HardwareTimer = {
        objectId: "DT-02",
        objectTypes: "Indicator",
        desc: "Maretron’s SIM100, RIM100 and DCR100 are now equipped with an internal hardware" +
                " counter. Use this parameter to read the value of the internal hardware timer." +
                " Pressing the reset button will command the counter within the device to zero.",
        componentTypes: [ DigitalTimer ],
        instances: 253,
        channelsPerInstance: 28
      },
      Status = {
        objectId: "DT-03",
        objectTypes: "Indicator",
        desc: "Displays the status of a switch indicator or run indicator on the system.",
        componentTypes: [ IndicatorLight, SmallIndicatorLight, DigitalCounter, DigitalTimer, IndicatorGraph ],
        instances: 253,
        channelsPerInstance: 28
      },
      SwitchBreakerGroupStatus = {
        objectId: "DT-04",
        objectTypes: "Indicator",
        title: "Monitors the status of a group of Breakers defined as a Switch / Breaker Group and" +
                " DataTypes when the breakers meet the requirements of the Group (ON) or not (OFF).",
        componentTypes: [ CLASS_ON, CLASS_OFF ],
        instances: 253,
        channelsPerInstance: 28    
        // Note: Choosing a component type of Digital; Counter or Timer 
        // will create a software timer that counts or times the status changes within N2KView. 
        // This counter or timer is independent of the counter or timer built in to a device. 
        // Restarting N2KView will reset the software counters or timers to zero.
  },
];

export default IndicatorDataTypes;

// eof

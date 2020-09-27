// SpeedDistanceDataTypes.js
console.log( "Mounting SpeedDistanceDataTypes.js..." );

import { Gauge, Digital, BarGraph, LineGraph } from "./AvailableComponentTypes";

const SpeedDistanceDataTypes = [

      SpeedOverGround = {
        objectId: "DT-01",
        objectTypes: "SpeedDistance",
        desc: "Displays the speed over ground of the vessel (relative to the earth, not the water).",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: ['kilometers/hour', 'knots', 'miles/hour' ]
  },
      SpeedThroughWater = {
        objectId: "DT-02",
        objectTypes: "SpeedDistance",
        desc: "Displays the speed of the boat relative to the water.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: ['kilometers/hour', 'knots', 'miles/hour' ]        
      },
      TotalLog = {
        objectId: "DT-03",
        objectTypes: "SpeedDistance",
        desc: "Displays the total distance traveled by the vessel since the log indicator was installed.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'kilometers', 'nautical miles', 'statute miles']
      },
      TripLog = {
        objectId: "DT-04",
        objectTypes: "SpeedDistance",
        desc: "Displays the distance traveled by the vessel since the trip indication of the log indicator was" +
                " last reset. The value may be reset by pressing a button on the bottom left of the component.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: [ 'kilometers', 'nautical miles', 'statute miles']        
      }, 
];

export default SpeedDistanceDataTypes;

// eof

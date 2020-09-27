// NavigationDataTypes.js
console.log( "Mounting NavigationDataTypes.js..." );

import { Digital, Heading, NorthUpRose, CourseUpRose, Cardinal, Gauge, BarGraph, LineGraph } from "./AvailableComponentTypes";

/*------------------------------------------------------------------------------------------
 * N2KView is not a primary navigator; that is, it does not provide means for entering and 
 * storing waypoint and route data. N2KView can receive information on the current leg of 
 * the voyage from a primary navigation device (such as a chart plotter or PC with 
 * navigation software and NMEA 2000 interface) and display the following information:
 -----------------------------------------------------------------------------------------*/
const NavigationDataTypes = [

      BearingOriginToDestination = {
        objectId: "DT-01",
        objectTypes: "Navigation",
        desc: "Displays the direction from the origin waypoint to the destination waypoint.",
        componentTypes: [ Digital ],
        instances: 253,
        units: [ 'True', 'Magnetic' ]  // (depends on Global Settings in Units Setup tab)
      },
      BearingToWaypoint = {
        objectId: "DT-02",
        objectTypes: "Navigation",
        desc: "Displays the bearing to the destination waypoint.",
        componentTypes: [ Heading, Digital ],
        instances: 253,
        units: [ 'degrees True', 'degrees Magnetic' ]  // (depends on Global Settings in Units Setup tab)

      },
      CourseOverGround = {
        objectId: "DT-03",
        objectTypes: "Navigation",
        desc: "Displays the current course over ground.",
        componentTypes: [ NorthUpRose, CourseUpRose, Cardinal, Digital ],
        instances: 253,
        units: [ 'degrees True', 'degrees Magnetic' ]  // (depends on Global Settings in Units Setup tab)
      },
      CrossTrackError = {
        objectId: "DT-04",
        objectTypes: "Navigation",
        desc: "Displays the cross-track error (minimum distance from the boat to the programmed route).",
        componentTypes: [Gauge, BarGraph, Digital, LineGraph],
        instances: 253,
        units: ['kilometers', 'nautical miles', 'statue miles']
      },
      DestinationWaypointNumber = {
        objectId: "DT-05",
        objectTypes: "Navigation",
        desc: "Displays the number of the destination waypoint.",
        componentTypes: [ Digital ],
        instances: 253,
        units: Number
      },
      DistanceToWaypoint = {
        objectId: "DT-06",
        objectTypes: "Navigation",
        desc: "Displays the distance to the destination waypoint.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph ],
        instances: 253,
        units: ['kilometers', 'nautical miles', 'statue miles']
      },
      ETA = {
        objectId: "DT-07",
        objectTypes: "Navigation",
        desc: "Displays the estimated time of arrival at the destination waypoint.",
        componentTypes: [ Digital],
        instances: 253,
        units: ['12 hours', '24 hours' ]         
      },
      ETADate = {
        objectId: "DT-08",
        objectTypes: "Navigation",
        desc: "Displays the estimated date of arrival at the destination waypoint",
        componentTypes: [ Digital],
        instances: 253,
        units: ['DD-MM-YYYY', 'DD-MMM-YYYY', 'MM-DD-YYYY', 'MMM-DD-YYYY' ]         
      },    
      LatLon = {
        objectId: "DT-09",
        objectTypes: "Navigation",
        desc: "Displays the current latitude and longitude of the vessel.",
        componentTypes: [ Digital ],
        instances: 253,
      },
      SpeedOverGround = {
        objectId: "DT-10",
        objectTypes: "Navigation",
        desc: "Displays the current speed over ground of the vessel.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        instances: 253,
        units: ['kilometers/hours', 'knots', 'miles/hour']
      },
      TimeToGo = {
        objectId: "DT-11",
        objectTypes: "Navigation",
        desc: "Displays the estimated time remaining until arrival at the destination" +
                " waypoint assuming current speed and course remain constant.",
        componentTypes: [ Digital ],
        instances: 253,
        units: [ 'hh:mm:ss', 'hh:mm' ] 
      },
      VelocityToWaypoint = {
        objectId: "DT-12",
        objectTypes: "Navigation",
        desc: "Displays the speed at which the distance to the waypoint is decreasing.",
        componentTypes: [ Gauge, BarGraph, Digital, LineGraph],
        instances: 253, 
        units: [ 'kilometers/hour', 'nautical miles/hour', 'miles/hour' ]
      },
];

export default NavigationDataTypes;

// eof

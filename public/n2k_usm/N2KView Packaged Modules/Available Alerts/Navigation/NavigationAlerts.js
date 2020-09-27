// NavigationAlerts.js
console.log( "Mounting NavigationAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

/*------------------------------------------------------------------------------------------
 * N2KView is not a primary navigator; that is, it does not provide means for entering and 
 * storing waypoint and route data. N2KView can receive information on the current leg of 
 * the voyage from a primary navigation device (such as a chart plotter or PC with 
 * navigation software and NMEA 2000 interface) and display the following information:
 -----------------------------------------------------------------------------------------*/
const NavigationAlerts = [

      BearingOriginToDestination = {
        objectId: "AA-01",
        objectTypes: "Navigation",
        desc: "Monitors the direction from the origin waypoint to the destination waypoint.",
        alertClasses: [ CLASS_DIRECTION, CLASS_DATA_UNAVAILABLE ],
        instances: null,
        units: ''
      },
      BearingToWaypoint = {
        objectId: "AA-02",
        objectTypes: "Navigation",
        desc: "Monitors the bearing to the destination waypoint.",
        alertClasses: [ CLASS_DIRECTION, CLASS_DATA_UNAVAILABLE ],
        instances: null,
        units: ''
      },
      CourseOverGround = {
        objectId: "AA-03",
        objectTypes: "Navigation",
        desc: "Monitors the current course over ground.",
        alertClasses: [ CLASS_COURSE, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: ''
      },
      CrossTrackError = {
        objectId: "AA-04",
        objectTypes: "Navigation",
        desc: "MMonitors the cross-track error (minimum distance from the boat to the programmed route).",
        alertClasses: [ CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: null,
        units: ['kilometers', 'nautical miles', 'statue miles']
      },
      DestinationWaypointNumber = {
        objectId: "AA-05",
        objectTypes: "Navigation",
        desc: "Monitors the number of the destination waypoint.",
        alertClasses: [ CLASS_DATA_UNAVAILABLE ],
        instances: null,
        units: ''
      },
      DistanceToWaypoint = {
        objectId: "AA-06",
        objectTypes: "Navigation",
        desc: "Monitors the distance to the destination waypoint.",
        alertClasses: [ CLASS_DATA_UNAVAILABLE ],
        instances: null,
        units: ['kilometers', 'nautical miles', 'statue miles']
      },
      LatLon = {
        objectId: "AA-07",
        objectTypes: "Navigation",
        desc: "Monitors the current latitude and longitude of the vessel.",
        alertClasses: [ CLASS_INSIDE_RADIUS, CLASS_OUTSIDE_RADIUS, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: ''
      },
      SpeedOverGround = {
        objectId: "AA-08",
        objectTypes: "Navigation",
        desc: "Monitors the current speed over ground of the vessel.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 253,
        units: ''
      },
      TimeToGo = {
        objectId: "AA-09",
        objectTypes: "Navigation",
        desc: "Monitors the estimated time remaining until arrival at the destination 
                + " waypoint assuming current speed and course remain constant.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: null,
        units: ''
      },
      VelocityToWaypoint = {
        objectId: "AA-10",
        objectTypes: "Navigation",
        desc: "Monitors the speed at which the distance to the waypoint is decreasing.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: null, 
        units: ''
      },
 
];

export default NavigationAlerts;

// eof

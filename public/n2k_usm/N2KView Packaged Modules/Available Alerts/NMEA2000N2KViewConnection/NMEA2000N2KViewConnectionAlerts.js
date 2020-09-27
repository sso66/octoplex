// NMEA2000_N2KViewConnectionAlerts.js
console.log( "Mounting NMEA2000_N2KViewConnectionAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const NMEA2000_N2KViewConnectionAlerts = [

    CloudServerDataRemaining = {
        objectId: "AA-01",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "Monitors the amount of Data Bandwidth remaining to the Cloud Server for the current month.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH ],
        instances: 'Not Applicable'
    },
    CloudServerDataUsed = {
        objectId: "AA-02",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "Monitors the amount of Data Bandwidth used to the Cloud Server for the current month.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH ],
        instances: 'Not Applicable'
    },
    CloudServerPercentRemaining = {
        objectId: "AA-03",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "Monitors the percentage of Data Bandwidth remaining to the Cloud Server for the current month.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH ],
        instances: 'Not Applicable'
    },
    CloudServerPercentUsed = {
        objectId: "AA-04",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "Monitors the percentage of Data Bandwidth used to the Cloud Server for the current month.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH ],
        instances: 'Not Applicable'
    },
    NMEA2000Connection = {
        objectId: "AA-05",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "Monitors the status of the connection to the NMEA 2000 bus..",
        alertClasses: [ CLASS_SERVER_DISCONNECTED ],
        instances: 'Not Applicable'
    },
    NMEA2000ConnectionCAN2 = {
        objectId: "AA-06",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "On the dual bus MBB200C, TSM800C and TSM1330C units, this alert can monitor the status of"
                + " the connection to the second NMEA 2000 bus.",
        alertClasses: [ CLASS_SERVER_DISCONNECTED ],
        instances: 'Not Applicable'
    },
];

export default NMEA2000_N2KViewConnectionAlerts;

// eof

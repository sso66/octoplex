// NMEA2000_N2KViewConnectionDataTypes.js
console.log( "Mounting NMEA2000_N2KViewConnectionDataTypes.js..." );

import { Gauge, BarGraph, Digital, IndicatorLight, DigitalCounter, DigitalTimer } from "./AvailableComponentTypes";

const NMEA2000_N2KViewConnectionDataTypes = [

    CloudServerDataRemaining = {
        objectId: "DT-01",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "Maretron’s Cloud Server is a subscription based service; users purchase monthly bandwidth," +
                " and the amount of bandwidth used in the current month may be displayed on this control.",
        componentTypes: [ Gauge, BarGraph, Digital ],
        instances: 'Not Applicable',
        units: 'Gigabytes'
        // The cloud server cannot be accessed from the TSM800C, TSM1330C,
        // or the MBB200C, so this parameter is not available.
    },
    CloudServerDataUsed = {
        objectId: "DT-02",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "Maretron’s Cloud Server is a subscription based service; users purchase monthly bandwidth," +
                " and the amount of bandwidth used in the current month may be displayed on this control.",
        componentTypes: [ Gauge, BarGraph, Digital ],
        instances: 'Not Applicable',
        units: 'Gigabytes'
        // The cloud server cannot be accessed from the TSM800C, TSM1330C,
        // or the MBB200C, so this parameter is not available.
    },
    CloudServerPercentRemaining = {
        objectId: "DT-03",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "Maretron’s Cloud Server is a subscription based service; users purchase monthly bandwidth," +
                " and the percentage of bandwidth remaining in the current month may be displayed on this control",
        componentTypes: [ Gauge, BarGraph, Digital ],
        instances: 'Not Applicable',
        units: '%'
        // The cloud server cannot be accessed from the TSM800C, TSM1330C,
        // or the MBB200C, so this parameter is not available.
    },
    CloudServerPercentUsed = {
        objectId: "DT-04",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "Maretron’s Cloud Server is a subscription based service; users purchase monthly bandwidth," +
                " and the percentage of bandwidth used in the current month may be displayed on this control.",
        componentTypes: [ Gauge, BarGraph, Digital ],
        instances: 'Not Applicable',
        units: "%"
        // The cloud server cannot be accessed from the TSM800C, TSM1330C,
        // or the MBB200C, so this parameter is not available.
    },
    NMEA2000Connection = {
        objectId: "DT-05",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "This component displays the status of the connection between N2KView" +
                " and the NMEA 2000 bus through the IPG100 or USB100.",
        componentTypes: [ IndicatorLight, DigitalCounter, DigitalTimer ],
        instances: 'Not Applicable'
    },
    NMEA2000ConnectionCAN2 = {
        objectId: "DT-06",
        objectTypes: "NMEA2000_N2KViewConnection",
        desc: "This component displays the status of the second connection (if applicable) between N2KView" +
                 " and the NMEA 2000 bus. The second connection is only available on the MBB200C, TSM800C" +
                 " and TSM1330C, but to allow Configurations to be prepared on PCs for later transfer to" +
                 " a MBB200C or TSMxxxC the component may be created on PCs as well.",
        componentTypes: [ IndicatorLight, DigitalCounter, DigitalTimer ],
        instances: 'Not Applicable'
    },
];

export default NMEA2000_N2KViewConnectionDataTypes;

// eof

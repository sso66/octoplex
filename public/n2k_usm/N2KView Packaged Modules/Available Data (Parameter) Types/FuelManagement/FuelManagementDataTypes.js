// FuelManagementDataTypes.js
console.log( "Mounting FuelManagementDataTypes.js..." );

import { BarGraph, Digital, Gauge, LineGraph } from './AvailableComponentTypes';

const FuelManagementDataTypes = [

    DistanceToEmpty = {
        objectId: "DT-01",
        objectTypes: "Fuel Management",
        desc: "This component displays the distance before the selected engines " +
                " use all fuel in the selected fuel tanks assuming that all" +
                " factors affecting fuel consumption remain constant.",
        componentTypes: [ BarGraph, Digital, Gauge, LineGraph ],
        instances: 253,
        units: [ 'kilometers', 'nautical miles', 'statute miles' ]
    },
    TimeToEmpty = {
        objectId: "DT-02",
        objectTypes: "Fuel Management",
        desc: "This component displays the time before the selected engines use all" +
                " fuel in the selected fuel tanks assuming that all factors affecting" +
                " fuel consumption remain constant",
        componentTypes: [ Digital ],
        instances: 253,
        units: "hours"
    },
    TotalFuelCapacity = {
        objectId: "DT-03",
        objectTypes: "Fuel Management",
        desc: "This component displays the total of the capacities of all the tanks" +
                " setup with tank type of 'Fuel', and whose instance numbers match those" +
                " in the supplied list.",
        componentTypes: [ BarGraph, Digital, Gauge ],
        units: [ 'imp gals/kilometer', 'liters/kilometer', 'gals/kilometer',
            'imp gals/nautical mile', 'liters/nautical mile', 'gals/nautical mile',
            'imp gals/statute mile', 'liters/statute mile', 'gals/statute mile' ]

    },
    TotalFuelConsumption = {
        objectId: "DT-04",
        objectTypes: "Fuel Management",
        desc: "This component displays the total of the fuel consumption of all selected" +
                + " engines per unit distance.",
        componentTypes: [ BarGraph, Digital, Gauge ],
        units: [ 'imp gals/kilometer', 'liters/kilometer', 'gals/kilometer',
            'imp gals/nautical mile', 'liters/nautical mile', 'gals/nautical mile',
            'imp gals/statute mile', 'liters/statute mile', 'gals/statute mile' ]
    },
    TotalFuelEconomy = {
        objectId: "DT-05",
        objectTypes: "Fuel Management",
        desc: "Displays the distance traveled per unit of fuel consumed by all selected engines.",
        componentTypes: [ BarGraph, Digital, Gauge ],
        units: [ 'imp gals/kilometer', 'liters/kilometer', 'gals/kilometer',
            'imp gals/nautical mile', 'liters/nautical mile', 'gals/nautical mile',
            'imp gals/statute mile', 'liters/statute mile', 'gals/statute mile' ]
    },
    TotalFuelLevel = {
        objectId: "DT-06",
        objectTypes: "Fuel Management",
        desc: "This component displays the fractional level of the fuel in all the tanks setup with" +
                " tank type of 'Fuel', and whose instance numbers match those in the supplied list." +
                " This is computed by dividing the total fuel remaining by the total fuel capacity",
        componentTypes: [ BarGraph, Digital, Gauge ],
        units: "%"
    },
    TotalFuelRate = {
        objectId: "DT-07",
        objectTypes: "Fuel Management",
        desc: "This component displays the total of the fuel consumed per unit time of all selected" +
                " engines.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        units: [ 'imp gal/hour', 'liter/hour', 'gal/hour' ]
    },
    TotalFuelRemaining = {
        objectId: "DT-08",
        objectTypes: "Fuel Management",
        desc: "DThis component displays the total amount of fuel remaining in all the tanks setup with" +
                " tank type of “Fuel”, and whose instance numbers match those in the supplied list.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        units: [ 'imp gal/hour', 'liter/hour', 'gal/hour' ]
    },
    TotalFuelUsed = {
        objectId: "DT-09",
        objectTypes: "Fuel Management",
        desc: "This component displays the amount of fuel used by an Engine since last reset for the trip." +
                " The Component has a reset button in the bottom left to reset the value at the start of the trip.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        units: [ 'imp gal/hour', 'liter/hour', 'gal/hour' ]
    },
    TotalTripFuelUsed = {
        objectId: "DT-10",
        objectTypes: "Fuel Management",
        desc: "This component displays the total amount of fuel used by all Engines whose instance number is" +
                " included in the supplied list since last reset for the trip.",
        componentTypes: [ Gauge, Digital, LineGraph ],
        units: [ 'imp gal/hour', 'liter/hour', 'gal/hour' ]
    },
];

export default FuelManagementDataTypes;

// eof

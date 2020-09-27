// TankDataTypes.js
console.log( "Mounting TankDataTypes.js..." );

import{ Gauge, BarGraph, Tank, Digital, LineGraph } from "./AvailableComponentTypes";

const TankDataTypes = [

    Capacity = {
        objectId: "DT-01",
        objectTypes: "Tank",
        desc: "Displays the fluid capacity of the tank.",
        componentTypes: [ Digital ],
        instances: 16,
        source: [ 'Fuel', 'Fresh Water', 'Waste Water', 'Live Well', 'Oil', 'Black Water', 'Reserved 0-7' ],
        units: [ 'imp gal', 'Liter', 'gal' ]

    },
    Level = {
        objectId: "DT-02",
        objectTypes: "Tank",
        desc: "Displays the level of fluid in the tank as a percentage of its capacity",
        componentTypes: [ Gauge, BarGraph, Tank, Digital, LineGraph ],
        instances: 16,
        source: [ 'Fuel', 'Fresh Water', 'Waste Water', 'Live Well', 'Oil', 'Black Water', 'Reserved 0-7' ],
        units: [ 'percent' ]
    },
    Remaining = {
        objectId: "DT-03",
        objectTypes: "Tank",
        desc: "Displays the amount of fluid in the tank.",
        componentTypes: [ Gauge, BarGraph, Tank, Digital, LineGraph ],
        instances: 16,
        source: [ 'Fuel', 'Fresh Water', 'Waste Water', 'Live Well', 'Oil', 'Black Water', 'Reserved 0-7' ],
        units: [ 'imp gal', 'Liter', 'gal' ]
    },
    TotalCapacity = {
        objectId: "DT-04",
        objectTypes: "Tank",
        desc: "Displays the total fluid capacity of all selected tanks.",
        componentTypes: [ Digital ],
        instances: 16,
        source: [ 'Fuel', 'Fresh Water', 'Waste Water', 'Live Well', 'Oil', 'Black Water', 'Reserved 0-7' ],
        units: [ 'imp gal', 'Liter', 'gal' ]
    },
    TotalLevel = {
        objectId: "DT-05",
        objectTypes: "Tank",
        desc: "Displays the level of fluid in all selected tanks as a percentage of their total capacity.",
        componentTypes: [ Gauge, BarGraph, Tank, Digital, LineGraph ],
        instances: 16,
        source: [ 'Fuel', 'Fresh Water', 'Waste Water', 'Live Well', 'Oil', 'Black Water', 'Reserved 0-7' ],
        units: 'percent'
    },
    TotalRemaining = {
        objectId: "DT-06",
        objectTypes: "Tank",
        desc: "Displays the total amount of fluid in all of the selected tanks.",
        componentTypes: [ Gauge, BarGraph, Tank, Digital, LineGraph ],
        instances: 16,
        source: [ 'Fuel', 'Fresh Water', 'Waste Water', 'Live Well', 'Oil', 'Black Water', 'Reserved 0-7' ],
        units: [ 'imp gal', 'Liter', 'gal' ]
    },
];

export default TankDataTypes;

// eof

// TankAlerts.js
console.log( "Mounting TankAlerts.js..." );

import { alertClasses } from "./AlertModuleDefs";

const TankAlerts = [
    
    Level = {
        objectId: "AA-01",
        objectTypes: "Tank",
        desc: "Monitors the angle of the vessel’s Tank as indicated by the Tank sensor.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 16,
        source: ['Fuel', 'Fresh Water', 'Waste Water', 'Live Well', 'Oil', 'Black Water', 'Reserved 0-7']
    },
    Remaining = {
        objectId: "AA-02",
        objectTypes: "Tank",
        desc: "Monitors the angle of the vessel’s Tank as indicated by the Tank sensor.",
        alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
        instances: 16,
        source: ['Fuel', 'Fresh Water', 'Waste Water', 'Live Well', 'Oil', 'Black Water', 'Reserved 0-7']
    }
];

export default TankAlerts;

// eof

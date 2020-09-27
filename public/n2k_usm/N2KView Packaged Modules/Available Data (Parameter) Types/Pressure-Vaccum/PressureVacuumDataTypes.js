// PressureVacuumDataTypes.js
console.log( "Mounting PressureVacuumDataTypes.js..." );

import { Gauge, VacuumGauge, BarGraph, LineGraph, Digital } from "./AvailableComponentTypes";

/*------------------------------------------------------------------------------------------
 * N2KView is not a primary navigator; that is, it does not provide means for entering and
 * storing waypoint and route data. N2KView can receive information on the current leg of
 * the voyage from a primary PressureVacuum device (such as a chart plotter or PC with
 * PressureVacuum software and NMEA 2000 interface) and display the following information:
 -----------------------------------------------------------------------------------------*/
const PressureVacuumDataTypes = [

    BarometricPressure = {
        objectId: "DT-01",
        objectTypes: "PressureVacuum",
        desc: "Displays the atmospheric (barometric) pressure.",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'millibars', 'inches Mercury (inHg)', 'kilopascals', 'millimeters Mercury (mmHg)' ]
    },
    CompressedAirPressure = {
        objectId: "DT-02",
        objectTypes: "PressureVacuum",
        desc: "Displays the pressure from a pressure sensor set up with a source of 'Compressed Air'",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals' ]
    },
    EngineBoostPressure = {
        objectId: "DT-03",
        objectTypes: "PressureVacuum",
        desc: "Displays the boost pressure of a supercharger or turbocharger.",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals' ]
    },
    EngineCoolantPressure = {
        objectId: "DT-04",
        objectTypes: "PressureVacuum",
        desc: "Displays the engine’s water/coolant pressure.",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals' ]
    },
    EngineFuelPressure = {
        objectId: "DT-05",
        objectTypes: "PressureVacuum",
        desc: "Displays the pressure of the fuel for the engine.",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals' ]
    },
    EngineOilPressure = {
        objectId: "DT-06",
        objectTypes: "PressureVacuum",
        desc: "Displays the pressure from a pressure sensor set up with a source of 'Hydraulic Oil'",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals' ]
    },
    HydraulicOilPressure = {
        objectId: "DT-07",
        objectTypes: "PressureVacuum",
        desc: "Displays the pressure from a pressure sensor set up with a source of 'Steam'.",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals' ]
    },
    SteamPressure = {
        objectId: "DT-08",
        objectTypes: "PressureVacuum",
        desc: "Displays the current speed over ground of the vessel.",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals' ]
    },
    TransmissionOilPressure = {
        objectId: "DT-09",
        objectTypes: "PressureVacuum",
        desc: "Displays the pressure of the oil in the transmission.",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals' ]
    },
    UserDefinedPressure = {
        objectId: "DT-10",
        objectTypes: "PressureVacuum",
        desc: "Displays the pressure of a user defined fluid type.",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals', 'feet of water', 'meters of water' ]
    },
    WaterPressure = {
        objectId: "DT-10",
        objectTypes: "PressureVacuum",
        desc: "Displays the pressure of a user defined fluid type.",
        componentTypes: [ Gauge, VacuumGauge, BarGraph, LineGraph, Digital ],
        instances: 253,
        units: [ 'bars', 'psi', 'kilopascals', 'feet of water', 'meters of water' ]
    }

];

export default PressureVacuumDataTypes;

// eof

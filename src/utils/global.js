// global.js
console.log( "Mounting global.js...Global Abatement!" );

//---------------------------------------------------------------------------------
// Global Abatement: A single global variable for N2KView OctoPlex Web Applicaton
//---------------------------------------------------------------------------------
const OCTOPLEX = { name: 'N2KView OctoPlex' };

// Alert Module Definitions
OCTOPLEX.AlertModuleDefs = [];

// Available Data Types (Model/Scope)
OCTOPLEX.AvailableDataTypes = [];

// Available Component Types (View/Context)
OCTOPLEX.AvailableComponentTypes = [];

// Available Alerts (Controller/Function)
OCTOPLEX.AvailableAlerts = [];

// N2KView System Features
OCTOPLEX.N2KView = [];
OCTOPLEX.N2KViewMobile = [];
OCTOPLEX.LoadShedding = [];
OCTOPLEX.VideoCameras = [];
OCTOPLEX.BNWAS = [];
OCTOPLEX.TelemetricCloud = [];
OCTOPLEX.AlertConfigurator = [];

// User ACL (Administrator, Author, Editor, Reader)
OCTOPLEX.User = {
    username: "Stephen Oo",
    password: "ABC123"
};

// Available Server (On Boat / Off Boat)
OCTOPLEX.Server = {
    local: {
        use_this_server: false,
        ip_address: "192.1168.0.2",
        port: 6544,
        password: "octoplex@local.com"
    },
    remote: {
        use_this_server: true,
        ip_address: "192.1168.0.1",
        port: 6544,
        password: "octoplex@remote.com"
    }
};

console.log("Test Drive OCTOPLEX...Server: " + OCTOPLEX.Server.remote.ip_address);

export default OCTOPLEX;

// eof

// File: src/utils/PlayerAPI.js
// Desc: ShowTabs API for gui/cbo/siu - Marine Digital Dashboard UI routing
// Date: 8/13/2019
//................................................................................
console.log( "Mounting utils/PlayerAPI.js..." );

const PlayerAPI = {
    // Show Tabs:
    // A. Electrical 
    // B. Mechanical
    // C. Nautical
    // D. Environmental
    // E. Miscellaneous
    
    players: [
        { number: 1,  name: "AC Power Select",        system: "Electrical" },
        { number: 2,  name: "AC Main Breakers",       system: "Electrical" },
        { number: 3,  name: "Air Conditioning",       system: "Micellaneous" },
        { number: 4,  name: "Appliances",             system: "Miscellaneous" },
        { number: 5,  name: "Mechanical",             system: "Mechanical" },
        { number: 6,  name: "Outlets",                system: "Electrical" },
        { number: 7,  name: "A/V",                    system: "Electrical" },
        { number: 8,  name: "Lights",                 system: "Electrical" },
        { number: 9,  name: "Navigation Lights",      system: "Electrical" },
        { number: 10, name: "Engines",                system: "Mechnical" },
        { number: 11, name: "AC/DC Power Monitor",    system: "Electrical" },
        { number: 12, name: "Fuel Management",        system: "Environmental" },
        { number: 13, name: "Fresh Water Management", system: "Environmental" },
        { number: 14, name: "Head Water System",      system: "Environmental" },
        { number: 15, name: "Gray Water System",      system: "Environmental" },
        { number: 16, name: "Vessel Status",          system: "Micellaneous" },
        { number: 17, name: "Bilge Status",           system: "Environmental" },
        { number: 18, name: "Quick Start",            system: "Miscellaneous" },
        { number: 19, name: "Power Management",       system: "Electrical" },
        { number: 20, name: "Operating Mode",         system: "Mechnical" },
        { number: 21, name: "Clear Screen",           system: "Micellaneous" },
        { number: 22, name: "Breaker Panels",         system: "Electrical" },
        { number: 23, name: "Breaker Lockout",        system: "Electrical" },
        { number: 24, name: "System Status",          system: "Micellaneous" },
    ],
  
    list: function() { return this.players },
    
    get: function( id ) {
            const isPlayer = ( p ) => p.number === id
            return this.players.find(isPlayer)
    }
}

export default PlayerAPI;

// eof

// CommandSettings.js
console.log("Mounting CommandSettings.js... <CommandSettings />");

import React, { Component } from 'react';

class CommandSettings extends Component { 
     
    render() {
        return (
            <div className='panel'>
        
                <h2>Commands & Settings: Controls</h2>
                <div className='content'>
                    <ul>
                        <li><button>About</button></li>
                        <li><button>Alerts Setup</button></li>
                        <li><button>BNWAS</button></li>
                        <li><button>Cameras Setup</button></li>
                        <li><button>Clean Screen</button></li>
                        <li><button>Configuration</button></li>
                        <li><button>Night Mode</button></li>
                        <li><button>Power Management</button></li>
                        <li><button>Telemetric</button></li>
                        <li><button>Screens Setup</button></li>
                        <li><button>Set Password</button></li>
                        <li><button>Shutdown</button></li>
                        <li><button>Units Setup</button></li>
                        <li><button>Enter Full Screen</button></li>
                    </ul>
                </div>
            </div>
        ) 
    };       
}

export default CommandSettings;

// eof
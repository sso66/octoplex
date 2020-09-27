// FavoriteScreens.js
console.log( "Mounting FavoriteScreens..js... <FavoriteScreens />" );

import React, { Component } from 'react'

class FavoriteScreens extends Component {
    
    render() {
        return ( 
            <div className='panel'>
                <h2>Favorite Screens: Monitors</h2>
                <div className='content'>
                    <ul>
                        <li><button>Alerts</button></li>
                        <li><button>Engines</button></li>
                        <li><button>Engine Room</button></li>
                        <li><button>DC Systems</button></li>
                        <li><button>AC Systems</button></li>
                        <li><button>Indicators</button></li>
                        <li><button>Navigation</button></li>
                        <li><button>Nav Lights</button></li>
                        <li><button>Fire Alarms</button></li>
                        <li><button>Motion & Door Systems</button></li>
                        <li><button>Environment</button></li>
                        <li><button>Tanks</button></li>
                        <li><button>Watermaker</button></li>
                        <li><button>Air Conditioners</button></li>
                        <li><button>Bilge Pumps</button></li>
                        <li><button>World Clocks</button></li>
                        <li><button>Misc. #1</button></li>
                        <li><button>Misc. #2</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default FavoriteScreens;

// eof 
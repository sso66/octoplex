 // File: src/views/Router/FullRoster.jsx
 // Desc: Iterates over all players & creates a link to their profile page.
 // Date: 8/13/2019
 //................................................................................
console.info( 'Mounting FullRoster.jsx... <FullRoster />' );

import React from 'react'
import { Link } from 'react-router-dom'

import OAImage from '../../assets/images/ocean-alexander.png';
import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';
import N2KActiveButton4x1 from '../../components/ActiveButton/N2KActiveButton4x1';
import PlayerAPI from '../../utils/PlayerAPI'

const FullRoster = () => (
    <div className="full-roster">
        <section className="hero is-black">
            <div className="container">
                <img src={OAImage} alt='Ocean Alexander' className="oa-image"/>
                <h2 className="glow">Show Tabs</h2>
            </div>
        </section>
        
        <section className="section">
            <div className="container">
                <ul>
                    {
                        PlayerAPI.list().map(p => (
                            <li key={ p.number }>
                                <Link to={ `/roster/${ p.number }` }>
                                    <N2KActiveButton2x1 name={ p.name } />
                                </Link>
                            </li>
                         ))
                    }
                </ul>
                <hr />
                <div className="level level-right">
                    <Link to='/'><N2KActiveButton2x1 name="Home" /></Link>
                </div>
            </div>
        </section>                    
    </div>
)

 export default FullRoster;

 // eof

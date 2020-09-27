// File: src/views/Router/Player.jsx
// Desc: content page for the player's profile - Marine Digital Dashboard UI
// Date: 8/16/2019
//................................................................................
console.info( 'Mounting Player.jsx... <Player />' );

import React from 'react'
import { Link } from 'react-router-dom'

import PlayerAPI from '../../utils/PlayerAPI'
import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';
;

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = ( props ) => {
     const player = PlayerAPI.get(
         parseInt( props.match.params.number, 10 )
     )
   
     if (!player) {
         return <div>Sorry, but the player was not found</div>
     }
  
     return (
         <div className="player">
            <section className="hero is-dark">
                <div className="container">
                    <h1 className="glow">{ player.name }</h1>
                </div>
            </section>
             <p>{ player.system } System</p>
             <p>Show Tab ( { player.number } )</p>
             <Link to='/roster'><N2KActiveButton2x1 name="Back" /></Link>
         </div>
     )
 }

export default Player;

 // eof
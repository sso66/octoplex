// File: src/containers/ShowTab/ShowTabGroupB.jsx
// Desc: marine digital dashboard ui
// Date: 8/12/2019
//...............................................................................
console.log( "Mounting ShowTabGroupB.jsx... <ShowTabGroupB />" );

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';
import N2KActiveButton4x1 from '../../components/ActiveButton/N2KActiveButton4x1';

class ShowTabGroupB extends Component {
    render() {
        return (    
            <div className='showtabs-right'>
                <ul>
                    <li><Link to='/diagnostics'><N2KActiveButton4x1 name="Diagnostics" className='diagnostics'/></Link></li>
                    <hr />
                    <li><N2KActiveButton2x1 name="Engines" /></li>
                    <li><Link to='/ac-dc-power'><N2KActiveButton2x1 name="AC/DC Power Monitor" /></Link></li>
                    <li><N2KActiveButton2x1 name="Fresh Water / Fuel Tank Management" /></li>
                    <li><N2KActiveButton2x1 name="Head / Gray Water System" /></li>
                    <li><N2KActiveButton2x1 name="Vessel Status" /></li>
                    <li><N2KActiveButton2x1 name="Bilge Status" /></li>
                    <li><Link to='/quick-start'><N2KActiveButton2x1 name="Quick Start" /></Link></li>
                </ul>                             
            </div>
        )
    }                
}

export default ShowTabGroupB;

// eof
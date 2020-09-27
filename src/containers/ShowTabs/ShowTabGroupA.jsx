// File: src/containers/ShowTab/ShowTabGroupA.jsx
// Desc: marine digital dashboard ui
// Date: 8/13/2019
//...............................................................................
console.log( "Mounting ShowTabGroupA.jsx... <ShowTabGroupA />" );

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import N2KActiveButton4x1 from '../../components/ActiveButton/N2KActiveButton4x1';
import N2KActiveButton2x1 from '../../components/ActiveButton/N2KActiveButton2x1';


class ShowTabGroupA extends Component {
    render() {
        return (    
            <div className='showtabs-left'>
                <ul>
                    <li><Link to='/roster'><N2KActiveButton4x1 name="Show Tabs" className='show-tabs' /></Link></li>
                    <hr />
                    <li><Link to='/ac-power-select'><N2KActiveButton2x1 name="AC Power Select" /></Link></li>
                    <li><Link to='/ac-main-breakers'><N2KActiveButton2x1 name="AC Main Breakers" /></Link></li>
                    <li><N2KActiveButton2x1 name="Air Conditioning" /></li>
                    <li><N2KActiveButton2x1 name="Appliances" /></li>
                    {/* <li><N2KActiveButton2x1 name="Mechnical" /></li>*/}
                    <li><N2KActiveButton2x1 name="Outlets / A/V" /></li>
                    <li><Link to='/lights'><N2KActiveButton2x1 name="Lights" /></Link></li>
                    <li><Link to='/navigation-lights'><N2KActiveButton2x1 name="Navigation Lights" /></Link></li>
                </ul>                             
            </div>
        )
    }                
}

export default ShowTabGroupA;

// eof

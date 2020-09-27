// File: src/views/Router/Roster.jsx
// Desc: List of roster - ShowTabs routes - Marine Digital Dashboard UI
// Date: 8/13/2018
//................................................................................
console.info( 'Mounting Roster.jsx... <Roster />' );

import React from "react";
import { Switch, Route } from 'react-router-dom';

import FullRoster from './FullRoster';
import Player from './Player';


const Roster = () => (
     <div className="roster">
         <Switch>
             <Route exact path='/roster' component={FullRoster} />
             <Route path='/roster/:number' component={Player} />
         </Switch>
     </div>
 );

export default Roster;

 // eof 
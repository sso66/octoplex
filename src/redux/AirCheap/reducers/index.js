// src/redux/AirCheap/reducers/index.js
console.log( "Mounting reducers/index.js..." );

import { combineReducers } from 'redux';
import airports from './airports';
import route from './route';
import tickets from './tickets';


const rootReducer = combineReducers({
    airports,
    route,
    tickets
})

export default rootReducer;

// eof

// File: src/index.js:
// Desc: main entry point for the React + Redux single page application
// Date: 8/24/2019 
//................................................................................
console.log( "Mounting index.jsx..." );

import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root';
import './utils/logger.es6';
import './styles/index.sass';

// create JS Function protoype Redux store
//.....................................................................
//import configureStore from './redux/modules/DateTime/configureStore';
//import configureStore from './redux/modules/User/configureStore';
//import configureStore from './redux/modules/TrafficLight/configureStore';
import configureStore from './redux/configureStore';
 
// create JS Object prototype Redux store
//.....................................................................
//import * as theStore from './redux/theStore';                           
//import configStore from './redux/AirCheap/aircheapStore';             
//import configStore from './redux/BankAccount/bankStore';              

const { store, actions } = configureStore();

const init = () => {
    
    console.log( "Testing Redux API createStore(reducers) in the configureStore: " + configureStore );  
    console.log( "Testing ReduxAPI bindActionCreators(DateTime.actionCreators, dispatch) actions.currentTime.fetchNewTime />: " 
                    + actions.currentTime.fetchNewTime );
    
    render (
        <Root store={ store } actions={ actions } />,
            document.getElementById( 'root' ) 
    );
                
};

try {
    window.onload = init;
} catch( e ) {
    alert( "Carling Technologies: " + e.message );
    e.preventDefault();
} finally {
    console.log( "Application mounted successfully!" );
}


// eof


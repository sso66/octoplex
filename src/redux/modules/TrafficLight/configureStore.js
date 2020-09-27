 // src/redux/modules/TrafficLight/configureStore.js
console.log( "Mounting TrafficLight configureStore.js..." );

import { createStore, bindActionCreators } from 'redux';
import * as TrafficLightState from './TrafficLightState';


export const configureStore = () => {

    const store = createStore( TrafficLightState.reducer );
    
    const actions = {
        
        currentLight: 
            bindActionCreators( TrafficLightState.actionCreators, store.dispatch ),
    };
       
    // Export an object with 'store' and 'actions.
    //...............................................................
    return { store, actions }
};

export default configureStore;

// eof

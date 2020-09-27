 // File: src/redux/modules/DateTime/configureStore.js
 // Desc:
 // Date: 8/1/2019
console.log( "Mounting redux/modules/DateTime/configureStore.js..." );

import { createStore, bindActionCreators } from 'redux';
import * as DateTimeState from './DateTimeState';


export const configureStore = () => {  

    const store = createStore( DateTimeState.reducer );
    
    const actions = {
        
        currentTime: 
            bindActionCreators( DateTimeState.actionCreators, store.dispatch ),
    
    };
       
    // Export an object with 'store' and 'actions.
    //...............................................................
    return { store, actions }
};

export default configureStore;

// eof

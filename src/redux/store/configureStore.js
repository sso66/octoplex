// File: src/redux/configureStore.js
// Desc: Redux Store (global abatement) - "order": STATE for gui | cbo | siu 
// Date: 11/1/2019
//..............................................................................
console.log( "Mounting redux/configureStore.js..." );

import { createStore, bindActionCreators, applyMiddleware } from 'redux';

import { actionCreators } from '../actions/actionCreators';
import rootReducer from '../reducers/rootReducer';
import loggingMiddleware from '../middleware/loggingMiddleware';
import apiMiddleware from '../middleware/apiMiddleware';


export const configureStore = () => {  

    const store = createStore( 
        rootReducer,
        applyMiddleware(
            loggingMiddleware,
            apiMiddleware,
        ) 
    );
    
    const actions = {
        currentTime: 
            bindActionCreators( actionCreators, store.dispatch ),
    };
       
    // export an object with 'store' and 'actions'
    return { store, actions }
};

export default configureStore;

 // eof 

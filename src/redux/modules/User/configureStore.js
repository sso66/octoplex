 // src/redux/modules/User/configureStore.js
console.log( "Mounting User configureStore.js..." );

import { createStore, bindActionCreators } from 'redux';
import * as UserState from './UserState';


export const configureStore = () => {
    const store = createStore( UserState.reducer );
    
    const actions = {
        
        currentUser: 
            bindActionCreators( UserState.actionCreators, store.dispatch ),
    };
    return { store, actions }
};

export default configureStore;

// eof

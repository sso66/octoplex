// File: src/redux/configureStore.js
// Desc: create application state Redux store
// Date: 8/1/2019
console.log( "Mounting redux/configureStore.js..." );

// "order": STATE
//........................................
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { actionCreators } from './actionCreators';
import reducer from './rootReducer';


export const configureStore = () => {  

    const store = createStore( 
        reducer,
        applyMiddleware(
            loggingMiddleware,
            apiMiddleware,
        ) 
   );
    
    const actions = {
        
        currentTime: 
            bindActionCreators( actionCreators, store.dispatch ),
    
    };
       
    // Export an object with 'store' and 'actions.
    //...............................................................
    return { store, actions }
};

//...............................................................
console.log( "Mounting loggingMiddleware.js..." );
const loggingMiddleware = (store) => (next) => (action) => {
  
  // Our middleware
  console.log('Redux Log:', action)
  
  // call the next function
  next(action);
}

//...............................................................
console.log( "Mounting apiMiddleware.js..." );
const apiMiddleware = ( store ) => ( next )  => ( action ) => {
  
  if ( !action.meta || action.meta.type !== 'api' ) {
  
    return next(action);
  
  }
  
  // This is an api request.
  // Find the request URL and compose request options from meta
  //...............................................................
  const { url } = action.meta;
  const fetchOptions = Object.assign({}, action.meta);

    // Make the request.
    fetch(url, fetchOptions)
        // Convert the response to json.
        .then(resp => resp.json())
        .then(json => {
        // Respond back to the user by dispatching the original 
        // action without the meta object.
        //...............................................................
        let newAction = Object.assign({}, action, {
            payload: json.dateString
        });
      
        delete newAction.meta;
      
        store.dispatch(newAction);
        
    })
}

export default configureStore;

 // eof 


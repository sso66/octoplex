// TrafficLight/configureStore.js
console.log( "Mounting TrafficLight/configureStore.js..." );

import { createStore } from 'redux';
import { initialState, reducer } from './reducers'; 
import * as trafficLight from './trafficLight';

export const configureStore = () => {
    const store = createStore(
        initialState,
        reducer,
    );

    return {store};

}
export default configureStore;
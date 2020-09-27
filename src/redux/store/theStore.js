// File: src/redux/theStore.js
// Desc: Marine Digital Dashboard UI - Redux store (mock data)
// Date: 8/20/2019
//..............................................................................
console.log( "Mounting redux/theStore.js..." );

import { createStore } from 'redux'

import reducer from './reducers/index'


export const store = createStore( reducer )

console.log( store.getState() )
// {
//      counter: 0,
//      todos: []
// }

// KVO: Key Value Observing
// {
//      count: 0,
//      todo: []
// }

store.dispatch( {
    type: 'ADD_TODO',
    text: 'Use Redux'
} )

console.log( store.getState() )
// {
//    counter: 0,
//    todos: [ 'Use Redux' ]
// }

// KVO: Key Value Observing
// {
//    count: 0,
//    todo: [ 'Use Redux' ]
// }
    
export default store;

// eof
 
### How Redux works
  **Redux** is a simplified implementation of Facebooks' Flux Architecture.  Flux is essentially Model-View-Controller (MVC) done right, but Flux introduces a fair among of complexity. **Redux** lessens the complexity by borrowing the concepts of *reducers* from `Elm` programming language based on immutable data structures and pure functions. Pure functions are functions that have no side-effects, and Redux reducers are pure functions that compute application state.

  Redux is founded on three principles:

    - Application state is stored in a single object.
    - Application state is immutable and can only be replaced outright through actions that describe state changes.
    - Reducers create the next state, given the current state and an action.

#### Application state is in a single object
  Redux manages state through single JavaScript object, known as a *data store*, where all of your application's state is located.  Centralizing state in a single object makes it easier to reason about application data when reading code.  And storing application state in a single object makes it easier to persist the entire state of your application.

#### Application state is immutable
  With Redux, you can't modify application state. Instead you replace the existing state with new state. The new state is specified by *actions*, which are (also immutable) JavaScript objects that describe state changes.

  Encapsulation of state changes in immutable objects has many advantages. One of those advantages, as you'll see, is the ability to implement endless undo and redo - in effect, as sort of time machine "back to the future". Actions are also executed in strict order, so no race conditions occur.

#### Reducers create a new state
  *Reducers* are pure JavaScript functions that:
    - Create a new state, given a current state and action
    - Centralize data mutations
    - Can act on all or part of the state
    - Can be combined and reused

  Because they're pure functions, reducers have no side effects - so they're easy to read, test, and debug. And you can compose reducers, which makes it easy to implement simple reducers that are concerned with only a portion of the overall application state.

  Because application state is immutable and because reducers are pure functions with no side effects, Redux is a *predictable* state container: Given any state and any action, you can predict the next state of the application with absolute certainty. That predictable element in Redux is the killer feature that opens the door to infinite undo/redo and live-editing time travel.

### Action's, reducers and the store
#### Traffic light state with Redux application: **TrafficLightBE.js**
```
// traffic-light.js
console.log(
  "Mounting TrafficLightBE.js:" +
  " Standard JavaScript ES5/ES6 API with Redux - State Management Module"
);

'use strict';

const Redux = require( 'redux' );
const createStore = Redux.createStore;

// 0. Create application's store and set initial state
const store = createStore( reducer, 'CAUTION' );


// 1. Set up reducer for the traffic light app
const reducer = ( state = 'GO', action ) => {

  if ( state === undefined ) {

    state = 'initial state';

  } else {

    switch ( action.type ) {

      case 'GO':
        state = 'GO';
        break;

      case 'STOP':
        state = 'STOP';
        break;

      case 'CAUTION':
        state = 'CAUTION';
        break;

    }

    return state;

  }

};

// 2. Set up the action objects for traffic light
const goAction = {
  type: 'GO'
};
const cautionAction = {
  type: 'CAUTION'
};
const stopAction = {
  type: 'STOP'
};

// 3. Dispatch traffic actions
store.dispatch( stopAction );
console.log( 'State: ' + store.getState() );

store.dispatch( cautionAction );
console.log( 'State: ' + store.getState() );

store.dispatch( goAction );
console.log( 'State: ' + store.getState() );

// eof

```
1. You create your application's store with `Redux.createStore()` function. Every Redux application has exactly one store, and each store has exactly one reducer. You pass the reducer to the the `Redux.createStore()` function.

  The application's state - in this case, a string whose value is either `GO`, `STOP` or `CAUTION` is created by `reducer()` function. The `reducer()` returns a new state given the current state and an action that describes a state change.

2. The code defines three action objects, one for each state.

3. Finally, the application dispatches actions, obtaining a reference to the current with the Redux store's getState() method and printihg the state's value to the console.

### Data Flow
  When you dispatch and action by using React `store.dispatch()` function, Redux passes the action, in addition to the current state, to the application's reducer.
### The Redux API

### Using Redux with React

// Stoplight/index.js
console.log("Mounting index.js...");

// < UIViewController >
import React from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux';

const render = () => (
    ReactDOM.render(
        {/* <App />), */}
        <App store= {store}/>), 
        document.getElementById('example');
)

store.subscribe(render);

render(); // initial render

// eof


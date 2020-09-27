// index.js
console.log("Mount index.js... <Root />");

import React, { Component } from 'react';
import { render } from 'react-dom';

import global from './global';
import startup from './startup';

// import parser from './utils/jsonParser';
// import greeter from './utils/greeter';
// import logger from './utils/logger.es6';
// import root from './utils/root';

//import App from './containers/DemoApp';
import App from './containers/App';

// three.js components
//import WebGLRenderer from './scripts/three/cookbook/WebGLRenderer';
//import LoadAsyncResources from './scripts/three/cookbook/LoadAsyncResources';
//import WaitForResources from './scripts/three/cookbook/WaitForResources';
//import Particles from './scripts/three/learning/Particles';

//import './styles/commons/normalize.css';
//import 'bulma/styles/bulma.styles';
//import 'font-awesome/css/font-awesome.css';
//import './styles/commons/index.css';

//import './assets/images/favicon.ico';

//(function() {
//window.onload = function() {
//============================================================
render(<App />, document.getElementById('root'));
//}})();
// eof 

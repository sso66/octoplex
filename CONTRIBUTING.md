# OctoPlex Software Architecture (OSA) Framework
## I. OctoPlex Interactive Real-Time Web Application
### Views:
  - **HTML5 Components:**
    - UIEnvironment (Web, Native)
    - UIPlatform (Windows OS, Mac OS, Linux OS)
    - UIDevice (Desktop | Mobile (tablets & smartphones) | Consumer Devices)
    - UIScreen (Hi & Lo DPI resolution monitors/displays)
    - UIWindow (Chrome, Firefox, Safari, Opera, IE and others browsers)
    - UIApplication (2D and 3D Design Patterns)
    - UIView
    - UIControl  

  - **WebGL Components:**
    - GLEnvironment
    - GLScene
    - GLSceneSubject
    - GLCamera
    - GLPerspective
    - GLViewport
    - GLProjection
  
  - **SVG Components:**
    - TBD	    

### View Controllers:
  - **HTML5 Components:**
    - UINavigator (MimeType | Plugin | Screen)
    - UIWindowController
    - UIApplicationController
    - UIViewController
    - UIViewResponder (Keyboard | Mouse | Touch | Voice)
    - UIViewStateManager

  - **WebGL Components:**
    - GLRenderer
    - GLTransform
    - GLMatrix
    - GLShader

### View Models:
  - **HTML5 Components:**
    - UIProperty
    - UIState
    - UIEvent
    - UIException
    - UIStyle
    - UILayout

  - **WebGL Components:**
    - GLGeometry
    - GLMesh
    - GLPolygon
    - GLVertix
    - GLMaterial
    - GLTextureMap
    - GLLight

### View Delegates:
  - **HTML5 Components:**
    - UIApplicationDelegate
    - UIViewDelegate
    - UIControlDelegate

  - **WebGL Components:**
    - GLSceneDelegate
    - GLSceneSubjectDelegate

### View DataSources:
  - **HTML5 Components:**
    - UIApplicationDataSource
    - UIViewDataSource
    - UIControlDatasource

  - **WebGL Components:**
    - GLSceneDataSource
    - GLSceneSubjectDataSource   

## II. HTML5 and WebGL Real-Time Interactive 2D/3D Application Environment
### Client-Side Rendering
  - HTML5
  - React
  - Three
  - WebGL
  - SVG

### Server-Side Rendering
  - HTML5
  - Three
  - WebGL
  - Node
  - OpenGL (ES/SL)
  - SVG

### Architectural, Presentational & Functional Modules
  - **HTML5-DOM Elements and JS Prototype Objects**
    - HTML5 Canvas
    - HTML5 Video
    - HTML5 Audio
    - Web Storage
    - Web Socket
    - Web Worker
    - Geolocation
    - Navigator
    - Other JS Environmental Objects
    - IndexedDB/SQLite

  - **WebGL**
    - WebGL Renderer
    - CSS3D Renderer
    - Scene
    - Camera
    - Light
    - Mesh (Geometry + Material)
    - 3D Objects (Scene Subjects)

  - **OpenGL**
    - OpenGL ES (Embedded System)
    - OpenGL SL (Shader Language)

### Applied JavaScript Modular Design Patterns
  - `IIFE`: *Immediately Invoked Function Expression*
  - `UMD`: *Universal Module Definition* (React.js and Three.js packages)
  - `CJS`: *Common JavaScript Module* (Node.js + WebGL.js packages)

### JavaScript/CSS/HTML/SVG Coding Styles & Practices
  - CoffeeScript v2.2.2 - ES5/ES6+
  - Decaffeinate v4.8.8 - ES6+
  - ECMAScript - ES5
  - ECMAScript - ES6+ 
  - HAML
  - SASS
  - SVG
  - JSX

### Supporting Packaged Modules & Data Models
  - React + React-Router + Redux JavaScript Libraries
  - React Motion Tween Library
  - Three.js Library
  - Tween.js Library
  - Node.js Framework
  - CSS 3D Transformations Framework
  - SASS Compass + Bulma Library

## III. OctoPlex HTML5, WebGL, OpenGL (ES/SL), Node.js, Three.js, React.js and CSS (SASS) Dependency Modules
### HTML5
  1. Standard HTML5 W3C Standard DOM JavaScript API.

  1. HTML5 Web/Local Storage retrieval. TBD

  1. IndexedDB document-based storage and retrieval. TBD

### WebGL/OpenGL (ES/SL)
  1. **webgl-canvas**: A React webgl canvas component that handles resizing and context loss. TBD

  1. **raspberry pi 3**: TBD

  1. **raspi.js**: `raspi.js` provides initialization and base support for the Raspberry Pi.
  This module, along with Raspi Board and Raspi Peripheral, provide support for various peripherals on the Raspberry Pi. These libraries
  form the basis for Raspi IO, an IO plugin that adds support for the Raspberry Pi to Johnny-Five. TBD.

### Node.js
  1. **npm-modernizr**: A JavaScript library allowing to use CSS3 & HTML5 while maintaining control over unsupported browsers. TBD

  1. **sqlite3**: Asynchronous, non-blocking `SQLite3` for `Node.js`. TBD

  1. **sqlite**: Client for `Node.js` Apps. A wrapper library that adds ES6 promises and migration API to `sqlite3`. TBD

  1. **chart.js:** Simple `HTML5` Charts using the canvas element chartjs.org. TBD

### Three.js
  1. **three**: A JavaScript 3D library to create an easy to use, lightweight, 3D library it provides HTML5 Canvas, SVG, CSS3D, and WebGL renderers.

  1. **tween.js** JavaScript tweening engine for easy animations, incorporating optimised Robert Penner's equations. TBD

### React.js
  1. **react**: An npm package to get immediate access to React, without also requiring the `JSX` transformer.
  This is especially useful for cases where you want to browserify the module using React.
  Note: by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas
  the production version includes extra performance optimizations and strips all error messages.
  To use React in production mode, set the environment variable `NODE_ENV` to production.  A minifier that performs dead-code elimination
  such as `UglifyJS` is recommended to completely remove the extra code present in development mode.

  1. **react-dom**: This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React,
  which will be shipped as react to npm.

  1. **react-router-dom**: DOM bindings for React Router.

  1. **redux**: Redux is a predictable state container for JavaScript apps. It helps to write applications that behave consistently, run in
  different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code
  editing combined with a time traveling debugger.

  1. **react-redux**: Official React bindings for Redux.

  1. **redux-thunk**: Redux middleware.

  1. **react-select**: A Select UI control built with and for React. (Initially built for use in KeystoneJS.) TBD

  1. **whatwg-fetch**: `window.fetch polyfill`. The fetch() function is a `Promise`-based mechanism for programmatically making web requests
  in the browser. This project is a polyfill that implements a subset of the standard Fetch specification, enough to make fetch a viable replacement
  for most uses of XMLHttpRequest in traditional web applications.

  1. **axios**: Promise based HTTP client for the browser and node.js; an alternative to `whatwg-fetch`. TBD

  1. **flux**: Flux Architecture Design Patterns.

  1. **react-motion**: Physics based animation for React components. TBD
  
  1. **normalizr.js**: Using in a Redux store to take a deeply nested javascript object (like the Order above) and flattens it out.
   
  
### React.js + Three.js
  1. **react-three-rendereder**: Create/control a three.js canvas using React.

### Node.js + Three.js
  1. **three-software-renderer**: Universal three.js in memory node.js and the browser. TBD

### SASS/CSS
  1. **bulma**: Bulma is a modern SASS/CSS framework based on standard CSS Flexbox Module pattern.

  1. **font-awesome**: Font Awesome is a font and icon toolkit based on CSS/SASS.

  1. **normalize**: Normalize.sass is a small CSS/SASS file that provides better cross-browser consistency in the default styling of HTML elements.
  It's a modern, HTML5-ready, alternative to the traditional CSS reset. An optional browser reset package module.

  1. **classnames**: Using classNames for one element - `React JS`.

  1. **compass**: Compass is an open-source CSS Authoring Framework. TBD

### HAML/HTML5 Document, Form, Canvas + React.js
  1. React: Create maintainable, high-performance UI components - Go beyond the browser DOM with the React JavaScript library for maintainable
  Web UI Components.

### SVG
  1. Standard HTML5 W3C Standard SVG-DOM JavaScript API.

  1. **d3 (or D3.js)** A JavaScript library for visualizing data using web standards. D3 helps you bring data to life using SVG, Canvas and HTML.
  D3 combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation, giving you the full capabilities of
  modern browsers and the freedom to design the right visual interface for your data. TBD
  
  1. **react-chartist**: React component for Chartist.js (Simple Responsive Chart) with SVG interfaces. TBD
  

### // End of File

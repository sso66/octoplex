### Node.js Packaged Module and Node.js Application

#### Creating Node.js Packaged Module
- create a folder (package): e.g. censorify
- create a file (module): e.g. censorText.js
- add code
- create package.json manifest file with **npm init**
- place this readme instructions document
- build a local packaged module with **npm pack**
- change the version number in package.json on updates


#### Using Node.js Package Module in Node.js Application
- create a folder (package): e.g. readwords
- install the custom node package module with **npm install ../censorify/censorify-1.0.0.tgz --save-dev**
- uninstall the custom node package module with **npm uninstall censorify --save-dev**
- create a file (module): e.g. readwords
- add code
- run the application with **node readwords**
- reinstall for change in version of custom node package module
- run the application in the browser with npm browserfy on lite development server.

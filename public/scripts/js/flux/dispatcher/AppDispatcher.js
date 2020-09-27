// AppDispatcher.js
console.log("Mounting AppDispatcher.js");

const Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
let AppDispatcher = new Dispatcher();

// Apply convenience method to handle dispatch requests
export default AppDispatcher.handleAction = (action) => {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    })
}
// eof

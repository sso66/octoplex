// File: src/containers/Root.jsx
// Desc:
// Date: 8/1/2019
console.log( "Mounting Root.jsx... <Root />" );

import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

// Using ES6 destructuring to 'props' so that we just get the value of 'store and 'actions'
//..............................................................................................
const Root = ( { store, actions } ) => {
    
    console.log( "Testing ReduxAPI bindActionCreators(DateTime.actionCreators, dispatch) actions.currentTime.fetchNewTime />: " 
                    + actions.currentTime.fetchNewTime );
      
    // To add Redux actions to its child element props
    const createElement = ( Component, props ) => {
        // createElement is expected to return a React node as it's
        // passed in as the first argument (the second argument
        // being the props it is called with spread operator). 
        return (
            <Component
                actions={ actions } 
                { ...props } 
            />
        );            
    }

    return (
        <Provider store={ store }>
            <Router createElement={ createElement }>
                <App actions={ actions }/>
            </Router>
        </Provider>
    )
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;

// eof 
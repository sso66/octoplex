// File: Register.jsx
// Desc: Basics of React Router v4
// Date: 8/8/2019
//...............................................................................
console.log( "Mounting Register... <Register />" );

import React from 'react';
import { withRouter } from 'react-router-dom';


// application state
const AppState = {
    loggedIn: false,
    
    login: function() {
        this.loggedIn = true;
    },
    
    logout: function() {
        this.loggedIn = false;
    }
}

class Register extends React.Component {
    handleFormSubmit( event ) {
        event.preventDefault();

        AppState.logout()  
        this.props.history.push('/contact')
    }
    
    render () {
        return (
            <div className="link">
                <hr />
                <h1>Register with Router</h1>
                <form onSubmit={ this.handleFormSubmit.bind( this ) }>
                    <button type="submit">Register</button>
                </form>                    
            </div>                
        )
    }
}

export default withRouter(Register);

// eof

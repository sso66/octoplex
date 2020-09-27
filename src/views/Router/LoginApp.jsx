// File: LoginApp.jsx
// Desc: Basics of React Router v4
// Date: 8/7/2019
//...............................................................................
console.log( "Mounting LoginApp... <LoginApp />" );

import React from 'react';
import { Redirect, Prompt, withRouter } from 'react-router-dom';

import Register from './Register';


// application state
const AppState = {
    loggedIn: true,
    
    login: function() {
        this.loggedIn = true;
    },
    
    logout: function() {
        this.loggedIn = false;
    }
}

class LoginApp extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            password: '',
            showPromptOnNav: false
        }
     }   
     
     savePassword( event ) {
        this.setState({
            password: event.target.value,
            showPromptOnNav: event.target.value.length > 0  
        })
    }
        
    handleFormSubmit( event ) {
        event.preventDefault();
            
        if ( this.state.password == 'password') {
            AppState.login();
            this.props.history.replace( '/admin-app' );
        }
        else {
             alert( 'Password is wrong.' );
        }
    }
    
    render () {
        return (
            <div>
                <form onSubmit={ this.handleFormSubmit.bind( this ) }>
                    <h3 className="hero is-success">Please sign in</h3>
    
                    <input 
                        type="password" 
                        placeholder="Type password"
                        value={ this.state.password }
                        onChange={ this.savePassword.bind( this ) } />
                        
                    <button type="submit">Submit</button>
                    
                    <Prompt 
                        when={ this.state.showPromptOnNav }
                        message="Are you sure? Your data will be lost." />                
                </form>
                <Register />   
            </div>                
        )
    }
}

export default LoginApp

// eof

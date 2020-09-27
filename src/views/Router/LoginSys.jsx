// File: LoginSys.jsx
// Desc: React Router v4: The Complete Guide
// Date: 8/9/2019
//...............................................................................
//
// <Redirect> will replace the current location in the history stack with a new
// location. The new location is specified by the 'to' prop.
//
// <Redirect to={pathname: 'login', state: {from: props.location}} />
//
// If someone tries to access /admin-sys while logged out. they'll be redirectd 
// to the /login-sys route. 
//
// The information about the current location is passed via
// state props, so that if the authentication is successful, the user can be
// redirected back to the original location.
//
// Inside the child component, you can access this information at 
// this.props.location.state.
//...............................................................................
console.log( "Mounting LoginSys... <LoginSys />" );


import React from 'react';
import { Redirect } from 'react-router-dom';


class LoginSys extends React.Component {

    constructor() {
        super();

        this.state = {
          redirectToReferrer: false
        }

        this.login = this.login.bind( this );
    }

    login() {

        fakeAuth.authenticate( () => {
            this.setState( { redirectToReferrer: true } )
        })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={ from } />
            )
        }

        return (
            <div>
                <p className="card">You must log in to view the page at location: { from.pathname }</p>
                <button onClick={ this.login }>Log in</button>
            </div>
        )
    }
}

// A fake authentication function
export const fakeAuth = {
    isAuthenticated: false,
    
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 1000);
    }
};


export default LoginSys;

// eof

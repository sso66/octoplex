// File: AdminApp.jsx
// Desc: Basics of React Router v4
// Date: 8/8/2019
//...............................................................................   
console.log( "Mounting AdminApp... <AdminApp />" );

import React from 'react';
import { Redirect } from 'react-router-dom';



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
// 1st take or attempt
// export const AdminApp = (props) => {
    // return (
        // <div>
            // <h2>Welcome Application Administrator</h2>
        // </div>
    // );
// };

//const AdminApp = () => AppState.loggedIn ? <h1>WELCOME Application Administrator</h1> : <Redirect to="/login-app" />

// 2nd take or attempt 
class AdminApp extends React.Component {
    constructor( props ) {
        super( props );
    }
    
    logout() {
        AppState.logout();
        this.props.history.replace( '/login-app' );
    }
    
    render() {
        return (
          
                AppState.loggedIn ? (
                    <div>
                        <h2 className="hero is-warning">Application Admin Page</h2>
                        <button onClick={ this.logout.bind( this ) }>
                            Logout
                        </button>
                    </div>                    
                ) : <Redirect to="/login-app" />   
                
  
        )
    }    
}
 
export default AdminApp;



// eof

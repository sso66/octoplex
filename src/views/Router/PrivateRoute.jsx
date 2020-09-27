// File: PrivateRoute.jsx
// Desc: React Router v4: The Complete Guide
// Date: 8/9/2019
//
// A custom route is a route nested inside the component. If we need to make a
// decision whether a route be rendered or not, means conditional rendering.
//...............................................................................
console.log( "Mounting PrivateRoute... <PrivateRoute />" );

import React from "react";
import { Redirect, Route } from "react-router-dom";
import LoginSys, { fakeAuth } from "./LoginSys";

const PrivateRoute = ( { component: Component, ...rest } ) => {
    return (
        <Route
            { ...rest }
            render = { props => 
                fakeAuth.isAuthenticated === true ? ( 
                    <Component {...props} /> 
                ) : ( 
                    <Redirect 
                        to={{ pathname: "/login-sys", state: { from: props.location } }} 
                    />
                )
            }
        />
    )
}

export default PrivateRoute;


// Note: the route the Admin componet if the user is logged in. Otherwise the user
// is redirected to the /login. This PrivateRoute routine is resuable.

// eof 

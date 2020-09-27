// File: Contact.jsx
// Desc: Basics of React Router v4
// Date: 8/7/2019
//...............................................................................   
console.log( "Mounting Contact... <Contact />" );

import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";


const Contact = ( props ) => ( 
        <div>
            <h1 className="hero is-primary">Contact</h1>
            {/*  
            { console.log( props ) }
                
            <div className="links">
                <NavLink to="/contact/uk" className="link">UK Office</NavLink>
            </div>
            <div className="links">
                <NavLink to="/contact/us" className="link" activeClassName="active">UK Office</NavLink>
            </div>
                            
            <Switch>
                <Route path="contact/uk" component={ ContactUK } />
                <Route path="contact/us" component={ ContactUS } />   
                <Route render={ () => <h2>No office found.</h2> } />
            </Switch>
            */}
            
            {/* make use of match prop to take out some hardcoded valus of path and location */}                                             
            <div className="links">
                <NavLink to={ `${props.match.url}/uk` } className="link">UK Office</NavLink>
                <hr />
                <NavLink to={ `${props.match.url}/us` } className="link" activeClassName="active">US Office</NavLink>
            </div>
            {/*                            
            <Switch>
                <Route path={ `${props.match.url}/uk` } component={ ContactUK } />
                <Route path={ `${props.match.url}/us` } component={ ContactUS } />   
                <Route render={ () => <h2>No office found.</h2> } />
            </Switch>
            */}            
            <Switch>
                <Route exact path={ props.match.url } render={ () => <h4> Please select an office.</h4> } />
                {/* <Route path={ `${props.match.url}/:location` } component={ ContactInfo } /> */}   
                <Route path={ `${props.match.url}/:location(uk|us)` } component={ ContactInfo } />
                <Route render={ () => <h2>No office found.</h2> } />
            </Switch>

        </div>            
)        

const ContactUK = () => <h1>Contact UK Office</h1>;
const ContactUS = () => <h1>Contact US Office</h1>;
const ContactInfo = ( props ) => <h1 className="hero is-danger">Welcome to { props.match.params.location.toUpperCase() } office.</h1>


export default Contact;

// eof
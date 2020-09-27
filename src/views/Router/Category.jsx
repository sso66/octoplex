// File: Category.jsx
// Desc: React Router v4: The Complete Guide
// Date: 8/9/2019
//...............................................................................
console.log( "Mounting Category... <Category />" );

import React from "react";
import { Link, Route } from "react-router-dom";


const Category = ({ match }) => { // destructuring assignment from props
    return (
        <div>
            <h1 className="hero is-warning">Category</h1>
            <ul>
                <li className="card">
                    <Link to={`${ match.url}/shoes` }>Shoes</Link>
                </li>
                
                <li className="card">
                    <Link to={`${ match.url}/boots` }>Boots</Link>
                    </li>
                
                <li className="card">
                    <Link to={`${ match.url}/footwear` }>Footwear</Link>
                </li>
            </ul>
        
            <Route
                path={`${ match.path }/:name`}
                render={ ({ match }) => (
                    <div>
                        <h3 className="box">{ match.params.name }</h3>
                    </div>
                )}
            />
        </div>
    );
};

export default Category;

// eof


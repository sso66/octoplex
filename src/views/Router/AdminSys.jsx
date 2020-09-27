// File: AdminSys.jsx
// Desc: React Router v4: The Complete Guide
// Date: 8/9/2019
// 
// Expected features to be present in an SPA:
// 1. Each view in an application should have a URL that uniquely specifies 
//    that view, so that the user can bookmark the the URL for for reference
//    at later time - e.g. www.example.com/products.
//
// 2. The browser back and foward button should work as expected.
//
// 3. The dynamically generated nested views should preferely have a URL on 
//    their own too - eg. example.com/products/shoes/101, wher 101 is the 
//    product id. 
//...............................................................................   
console.log( "Mounting AdminSys... <AdminSys />" );

import React from 'react';

export const AdminSys = ({ match }) => {

    return (
        <div>
            <h2 className="hero is-warning" >System Admin Page</h2>
        </div>
    );
};

export default AdminSys;

// eof

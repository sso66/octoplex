// File: Products.jsx
// Desc: React Router v4: The Complete Guide
// Date: 8/9/2019
//...............................................................................
console.log( "Mounting Products... <Products />" );

import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Product from "./Product";


const Products = ({ match }) => {
    const productsData = [
        {
            id: 1,
            name: "NIKE Liteforce Blue Sneakers",
            description: 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
            status: "Available"
        },
        {
            id: 2,
            name: "U.S. POLO ASSN. Slippers",
            description: 
                "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
            status: "Available"
        },
        {
            id: 3,
            name: "ADIDAS Adispree Running Shoes",
            description:
                "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
            status: "Available"
        },
        {
            id: 4,
            name: "Lee Cooper Mid Sneakers",
            description:
                "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
            status: "Out of Stock"
        }
    ];
    
    let linkList = productsData.map(product => {
        return (
            <li key={product.id }>
                <Link to={`${match.url}/${product.id}`}><i>{ product.name }</i></Link>
            </li>
        );
    });

    return (
        <div>
            <div style={{ display: "block", justifyContent: "space-between" }}>
                <div
                    style={{
                        float: "left",
                        padding: "10px",
                        width: "30%",
                        background: "#f0f0f0",
                        marginLeft: "auto"
                    }}
                    >
                    <h3 className="title is-4">Products</h3>
                    <ul style={{ listStyleType: "circle", padding: 0, fontSize: "1.2em" }}>
                        {" "}
                        { linkList }
                    </ul>
                </div>
            </div>
            
            <Switch>
                <Route
                    path={`${ match.url}/:productId` }
                    render={ props => <Product data={productsData} {...props} />}
                    //........................................................................
                    // May have expected component={Product} instead inlind render function
                    // The problem is that we need to pass down productsData to the Product
                    // component along with the existing props. Although there are other
                    // way, but the easiest is {...props } uses the ES6's spread syntax to
                    // pass the whole props object to the child component.
                    //........................................................................
                />
                <Route
                    exact
                    path={match.url}
                    render={() => (
                        <div style={{ textAlign: "center" }}>Please select a product.</div>
                    )}
                />
            </Switch>
        </div>
    );
};

export default Products;

// eof

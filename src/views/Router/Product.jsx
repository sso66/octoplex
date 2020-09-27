// File: Product.jsx
// Desc: React Router v4: The Complete Guide
// Date: 8/9/2019
//...............................................................................
console.log( "Mounting Product... <Product />" );

import React from "react";


const Product = ({ match, data }) => {

    // The find method is used to search the arraay for an object with id propery 
    // that equals match.prams.productId. If exits it displays. If not, 
    // 'Product doesn't exist message is rendered.

    const product = data.find(p => p.id === Number(match.params.productId));
    
    let productData;

    if (product) {
        productData = (
            <div>
                <h3 className="hero is-light"><i>{ product.name }</i></h3>
                
                <p>{ product.description }</p>
                <br />
                <h4>{ product.status }</h4>
            </div>
        );
    } else {
        productData = <h4> Sorry. Product doesnt exist!</h4>;
    }        

    return (
        <div style={ { display: "flex" } }>
            <div
                style={ {
                    padding: "0 10% 0 10%",
                    width: "80%",
                    margin: "auto",
                    background: "#fff",
                    fontSize: "1.1em"
                } }
            >
                {productData}
            </div>
        </div>
    );
};

export default Product;

// eof

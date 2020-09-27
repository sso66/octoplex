// FluxProduct.js
// UIViewDelegate
console.log("Mounting FluxProduct.js...");

import React, { Component } from 'react';
import FluxCartActions from '../actions/FluxCartActions';
import '../../assets/images/spinning-wheels.jpg';

class FluxProduct extends Component {
      render() {
        return (
            <div className='flux-product'>
                <img src='spinning-wheels.jpg' />
                <div className='flux-product-detail'>
                    <h1>product.name</h1>
                    <p>product.description</p>
                    <p>product.price</p>
                    <select>
                        <option>Hardware</option>
                        <option>Software</option>
                    </select>
                    <button>Add to Cart | Sold Out</button>
                </div>
            </div>
        )
    }
  
}

export default FluxProduct;

// eof


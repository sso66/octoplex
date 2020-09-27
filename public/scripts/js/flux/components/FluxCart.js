// FluxCart.js
// UIViewDelegate
console.log("Mounting FluxCart.js...");

import React, { Component } from 'react';
import FluxCartActions from '../actions/FluxCartActions';

class FluxCart extends Component {
    
    render() {
        return (
            <div className='flux-cart'>
                <div className='mini-cart'>
                    <button></button>
                    <ul>
                        <li>
                            <h1 className='name'>product.name</h1>
                            <p className='type'>product.type</p>
                            <p className='price'>product.price</p>
                            <button>Remove</button>
                        </li>
                    </ul>
                    <span>Total: </span>
                    <button>View Cart</button>
                </div>
            </div>
        )
    }
}
export default FluxCart;

// eof

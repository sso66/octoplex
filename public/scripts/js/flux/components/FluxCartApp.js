// FluxCartApp.js
// UIViewDataSource
console.log("Mounting FluxCartApp.js...");

import React, { Component } from 'react';

import ProductStore from '../stores/ProductStore';
import CartStore from '../stores/CartStore';
import FluxProduct from './FluxProduct';
import FluxCart from './FluxCart';

// Define main ViewDataSource
class FluxCartApp extends Component {

    // Get intitial state from stores
    
    // Add property changed listeners to stores
    
    // Remove property changed listeners to stores
    
    // Render child components, passing state via props
    
    render() {
        return (
            <div className='panel'>
                <FluxCart />
                <FluxProduct />
            </div>
        )
    }
}


export default FluxCartApp;
// eof

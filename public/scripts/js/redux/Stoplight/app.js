// Stoplight/app.js
console.log("Mounting app.js...");

// < UIViewDatasource >
import React, { Component } from 'react';

export class App extends Component {
    render() {
        return (
            <div>
                {/* 
                <Stoplight />
                <Buttons />       
                */}
                <Stoplight store={this.props.store} />
                <Buttons store={this.props.store} />
            </div>
        )
    }
}

// eof
 
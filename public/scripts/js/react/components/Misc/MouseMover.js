// MouseMover.js
// Using HTML DOM with React
console.log("Mounting MouseMover.js... <MouseMover />")

import React from 'react';

class MouseMover extends React.Component {
    constructor() {
        super();
        
        this.state = { x:0, y:0 };
    
        this.handleMouseMove = e => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
    }    
    render() {
        return (
            <div className='mouse-event' onMouseMove={this.handleMouseMove}>
                {
                    this.state ? 
                    'The mouse is at x: ' + this.state.x +
                    ', y: ' + this.state.y
                    : 'Move the mouse over this box'
                    }
            </div>
        )
  }
}

export default MouseMover;

// eof
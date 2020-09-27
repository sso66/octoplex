// Digital.jsx
console.log("Mounting Digital.jsx...");

import React from 'react';

class Digital extends React.Component {
  render() {
    return (
      <div>
        Hello, {this.props.name}! <hr /> Virtual DOM! Update Again
      </div>
    )
  }
}

export default Digital;

// eof

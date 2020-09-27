// iterator.js6
console.log("Mounting Iterator.js... Repeating Elements <Iterator />");

import React from 'react';

const arr = [1, 10, 100, 1000];

const Iterator = (props) => {
  return (
    <div>
      <h3>Iterator Design Pattern: day-13</h3>
      <ol>
         { React.Children.map(arr, i => <li>{ i }</li>) }
      </ol>
    </div>
  )
}

export default Iterator;

// eof

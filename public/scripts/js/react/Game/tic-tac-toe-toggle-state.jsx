// tic-tac-toe-toggle-state.jsx
console.log("Mounting tic-tac-toe-toggle-state.jsx...");

import React, { Component } from 'react';
import CSS from '../css/tic-tac-toe.css';

class Square extends React.Component { 
  render() {
    return (
      <button className={CSS.square} onClick={ () => this.props.onClick() }>
        { this.props.value }
      </button>
    );
  }
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

 handleClick(i) {
   const squares = this.state.squares.slice();
   squares[i] = this.state.xIsNext ? 'X' : 'O';
   this.setState({ 
     squares: squares,
     xIsNext: !this.state.xIsNext
   });
 } 
 
 renderSquare(i) {
    return (
        <Square 
          value={ this.state.squares[i] }
          onClick={ () => this.handleClick(i) }
          />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className={CSS.status}>{status}</div>
        <div className={CSS.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={CSS.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={CSS.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className={CSS.game}>
        <div className={CSS.gameBoard}>
          <Board />
        </div>
        <div className={CSS.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
/*
 * IMMUTABILITY
 * 
 * An importance of immutability of a value. Using .slice() method to copy the squares array
 * prior to making cnangs and to prevent mutating the existing arra.
 * 
 * Generally there are two ways for changing data. The first method is to mutate the data by
 * directly changing the values fo the variable
 *    
 * var player = {score: 1, name: 'Jeff'};
 * player.score = 2;
 * // Now the player is {score: 2, name: 'Jeff'}
 * 
 * The second method is to replace the data with a new copy of the object that also includes
 * desire changes.
 * 
 * var player = {score: 1, name: 'Jeff'};
 * 
 * var new Player = Object.assign({}, player, {score: 2});
 * // Now the player is unchanged, but the newPlayer is {score: 2, name 'Jeff'}
 * 
 * // Or if you are using object spread syntax, you can write:
 * // var newPlayer = {...player, score: 2}
 * 
 * The end result is the same but by not mutating (or changing the underlying data) directly it 
 * helps increase component and overall application performance.
 * 
 * 1. Easier Undo/Redo and Time Travel
 * Allow to implement complex features such as time travel between different stages of the game. 
 * Avoiding data mutations also allow to keep a refrence to older versions of the data, and switch
 * back and forth when needed.
 * 
 * 2. Tracking Changes
 * Determining a mutated object is a complex task, because changes are made directly to the object, thus
 * requires comparing the current object to a previous copy, traversing the entire object tree, and 
 * comparing each variable/property and value 
 * 
 * 3. Determining when to Re-render in React
 * Re: shouldComponentUpdate life cycle method and pure functions (stateless components). With immutable
 * data you can more easily determine IF changes have been made and also helps to determine WHEN a component
 * requires being ren-rendered.
 * 
 * FUNCTIONAL COMPONENTS
 * 
 * The Square only consist of a render method. Rather than defining a class extending React.Component,
 * simply re-write a function that takes props and returns what should be rendared.
 * 
 * function Square(props) {
 *   return (
 *      <button className="square" onClick={props.onClick}>
 *         { props.value }
 *      </button>
 *  );
 *}
 * 
 * Notice the change in onClick event. Need to remove the "iief" props.onClick(), because it would
 * call props.onClick immediately (Immediately Invoked Function Expression) passed (sinked) it down the 
 * event cycle.
 * }
 *  */
// eof 

// tic-tac-toe-next-state.jsx
console.log("Mounting tic-tac-toe-next-state.jsx...");

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
    }
  }

 handleClick(i) {
   const squares = this.state.squares.slice();
   squares[i] = 'X';
   this.setState({ squares: squares });
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
    const status = 'Next player: X';

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
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

/*
 * Lifting State Up
 * 
 * To aggregrate (map and reduce) data from multiple children or to have two childre components
 * communicate with each other, move the state upwards so that it lives in the parent component.
 * The parent can then pass the state back dow to the children via props, so that the child 
 * components are always in sync with each other and with the parent.
 * 
 * Now when the square is clicked, it calls the onClick function that was passed by Board.
 * 
 * What happens here:
 * 
 * 1. the oncClick prop on the build-in DOM <button> component tells React to set up a click event
 * listener.
 * 
 * 2. When the button is clicked, React will call the onClick event handler defined in Square's 
 * render method.
 * 
 * 3. This event handler clls this.props.onClick(). Square's props were specified by the Board.
 * 
 * 4. Board passed onClick={ () => this.handleClick(i) } to Square so, when called, it runs
 * this.handleClick(i) on the Board.
 * 
 * 5. Define handleClick() method on the Board component.
 * 
 * 6. Call .slice() to copy the squares array instead of mutating the existing array for immutability.
 * 
 * Now you should able to click in the squares to fill them again, but the state in stored in the Board
 * component instead of in each Square. Note however Board's changes, the Square components renderer 
 * automatically.
 * 
 * Square no longer keeps it own state; it receives its value from the parent Board and informs its
 * parent when clicked. These are controlled components.
 */
// eof 

// tic-tac-toe-previous-state.jsx
console.log("Mounting tic-tac-toe-previous-state.jsx...");

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
    //const status = 'Next player: X';
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player ' + (this.state.xIsNext ? 'X' : 'O'); 
    }

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
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    
    if (squares[a] && squares[a] === squares[b] && squares[a] && squares[c]) {
      return squares[a];
    }
  }
  
  return null
}
export default Game;

/*
 * Storing a History
 * 
 * 1. Showing the Moves
 * 2. Keys
 * 3. Implementing Time Travel
 * 
 */
// eof 

// tic-tac-toe-current-state.jsx
// Passing Data through Props (property binding).
// An Interactive Component with State (event binding)
console.log("Mounting tic-tac-toe-current-state.jsx...");

import React, { Component } from 'react';
import CSS from '../../css/tic-tac-toe.css';

class Square extends React.Component { 
  constructor() {
    super();
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button className={CSS.square} onClick={ () => this.setState({ value: 'X' }) }>
        { this.state.value }
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={ i }/>;
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

// eof 

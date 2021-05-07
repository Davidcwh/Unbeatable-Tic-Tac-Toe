import React from 'react';
import {GameStatus} from 'tic-tac-toe-minimax-engine'


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        winner: null
      }
    }

    handleClick(x, y) {
      const squares = this.state.squares.slice();
      if(squares[(y * 3 + x)] !== null || this.props.gameStatus !== GameStatus.ONGOING) { // check if square was already taken
        return;
      }

      const engine = this.props.engine;
      const updateGameStatus = this.props.updateGameStatus;

      // Make human player move
      const gameStatus1 = engine.makeNextMove(x, y);
      squares[(y * 3 + x)] = 'X';
      updateGameStatus(gameStatus1);
      if(gameStatus1 !== GameStatus.ONGOING) {
        let winner = this.state.winner;
        if(gameStatus1 === GameStatus.DRAW) {
          winner = 'none';
        } else {
          winner = 'X';
        }

        this.setState({squares, winner});
        return;
      }

      // Make computer player move
      const computerMove = engine.getBestMove();
      const gameStatus2 = engine.makeNextMove(computerMove.x, computerMove.y);
      squares[(computerMove.y * 3 + computerMove.x)] = 'O';
      updateGameStatus(gameStatus2);
      let winner = this.state.winner;
      if(gameStatus2 === GameStatus.DRAW) {
        winner = 'none';
      } else if(gameStatus2 !== GameStatus.ONGOING){
        winner = 'O';
      }
      this.setState({squares, winner});
    }

    renderSquare(x, y) {
        return <Square value={this.state.squares[(y * 3 + x)]} onClick={() => this.handleClick(x, y)}/>;
    }

    render() {
        if(this.props.boardReset) {
          this.props.toggleBoardReset(false);
          this.setState({
            squares: Array(9).fill(null),
            winner: null
          })
        };


        const status = this.state.winner === 'X' 
                        ? 'You Win! :)' 
                        : this.state.winner === 'O' 
                          ? 'Computer Wins! :('
                          : this.state.winner === 'none' 
                            ? 'Draw! :/'
                            : 'Unbeatable Tic Tac Toe';
    
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board">
              <div className="board-row">
                {this.renderSquare(0, 0)}
                {this.renderSquare(1, 0)}
                {this.renderSquare(2, 0)}
              </div>
              <div className="board-row">
                {this.renderSquare(0, 1)}
                {this.renderSquare(1, 1)}
                {this.renderSquare(2, 1)}
              </div>
              <div className="board-row">
                {this.renderSquare(0, 2)}
                {this.renderSquare(1, 2)}
                {this.renderSquare(2, 2)}
              </div>
            </div>
           
          </div>
        );
      }
}
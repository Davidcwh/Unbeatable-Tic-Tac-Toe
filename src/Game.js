import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import TicTacToeEngine, {Player, GameStatus} from 'tic-tac-toe-minimax-engine';
import {Helmet} from 'react-helmet';


class Game extends React.Component {
  constructor(props) {
    super(props);
    const engine = new TicTacToeEngine(Player.PLAYER_ONE)
    this.state = {
      engine,
      gameStatus: GameStatus.ONGOING,
      boardReset: false
    }
  }

  resetGame() {
    this.setState({
      engine: new TicTacToeEngine(Player.PLAYER_ONE),
      gameStatus: GameStatus.ONGOING,
      boardReset: true
    })
  }

  updateGameStatus(gameStatus) {
    this.setState({gameStatus});
  }

  toggleBoardReset(value) {
    this.setState({boardReset: value});
  }

  render() {
    return (
      <>
      <Helmet>
        <title>Tic Tac Toe</title>
      </Helmet>
      <div className="game">
        <div className="game-board">
          <Board 
            engine={this.state.engine} 
            gameStatus={this.state.gameStatus}
            updateGameStatus={(status) => this.updateGameStatus(status)}
            boardReset={this.state.boardReset}
            toggleBoardReset={(value) => this.toggleBoardReset(value)}/>
        </div>
        <div className="game-info">
          {this.state.gameStatus !== GameStatus.ONGOING && 
            <button onClick={() => this.resetGame()}>Start New Game</button>
            }
        </div>
        <div>
          Computer AI Player implemented using <a href="https://www.npmjs.com/package/tic-tac-toe-minimax-engine" target="_blank" rel="noreferrer">minimax engine package</a>
        </div>
      </div>
      </>
    );
  }
}

export default Game;

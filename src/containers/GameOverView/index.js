import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

export default class GameOverView extends Component {
  constructor(props) {
    super(props);
    this.restartGame = this.restartGame.bind(this);
  }

  restartGame(event) {
    window.location.reload(true);
    event.preventDefault();
  }

  render() {
    return(
      <div className="game-over-container">
        <Header gameOver={true}/>
        <div>
          <h1 className="player-status-title">{this.props.username} died!</h1>
          <h2 className="survival-title">Time of Survival: {this.props.timeOfSurvival} seconds</h2>
          <button className="button replay-button" onClick={this.restartGame}>Replay!</button>
        </div>
        <Footer />
      </div>
    );
  }
}

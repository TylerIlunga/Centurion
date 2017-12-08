import React, { Component } from 'react';
import HeadingBanner from '../../components/HeadingBanner';

import './styles.css';

export default class GameOverView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="game-over-container">
        <HeadingBanner gameOver={true}/>
        <h1>{this.props.username} died!</h1>
        <h1>Time of Survival: {this.props.score} seconds</h1>
      </div>
    );
  }
}

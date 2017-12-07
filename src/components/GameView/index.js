import React, { Component } from 'react';
import HeadingBanner from '../HeadingBanner';
import Canvas from '../../components/Canvas';

import './styles.css';

class GameView extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      error: '',
      displayError: false,
      loggedIn: false,
      displaySuccess: false,
    };
  }

  handleSubmit(event) {
    const { username } = this.state;

    if (
        typeof username === 'string'
        && isNaN(username)
        && username.length > 4
        && username.length < 16
       ) {
        this.setState({ loggedIn: true });
    } else {
        this.setState({
          error: 'That username does not meet the requirements!',
          displayError: true
        });
    }
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  showLoginForm() {
    return (
      <div className="login-container">
        <div className="login">
          <h1 className="enter-username-title">Enter your Username below!</h1>
          <p className="enter-username-title-description">
            Your username must be a string with 5-15 characters!
          </p>
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <label className="username-title">
                Username:
                <input type="text" value={this.state.username} onChange={this.handleChange} />
              </label>
              <input type='submit' value="Play!" className="submit-button" />
            </form>
          </div>
        </div>
        { this.state.displayError && this.state.error }
        { this.state.displaySuccess && <h1 className="success-message">Success!</h1> }
      </div>
    );
  }

  startGame() {
    return (
      <div className="game-board">
        <h1>Survive!</h1>
        <Canvas />
      </div>
    );
  }

  render() {
    return (
      <div>
        <HeadingBanner
          username={this.state.username}
          loggedIn={this.state.loggedIn}
        />
          { !this.state.loggedIn && this.showLoginForm() }
          { this.state.loggedIn && this.startGame() }
      </div>
    );
  }
}

export default GameView;

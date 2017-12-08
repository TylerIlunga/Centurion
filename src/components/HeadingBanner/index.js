import React, { Component } from 'react';
import './styles.css';

export default class HeadingBanner extends Component {
  constructor(props) {
    super(props);

    this.interval;

    this.state = {
      level: 1,
      timeRemaining: 10,
     };
  }

  componentDidMount() {
    this.countdown();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  countdown() {
    const { username, loggedIn } = this.props;
    if (username && loggedIn) {
      this.interval = setInterval(() => {
        if (this.state.timeRemaining > 0) {
          this.setState({ timeRemaining: this.state.timeRemaining - 1 });
        } else {
          this.setState({
            level: this.state.level + 1,
            timeRemaining: (this.state.level + 1) * 10,
          });
        }
      }, 1000);
    }
  }

  render() {
    const { username, loggedIn } = this.props;
    if (username && loggedIn) {
      return (
        <div className="header-container">
          <header className="header">
            <h1 className="game-header-title">
              Centurion {username ? username : 'Centurion'}
            </h1>
            <h3>Level {this.state.level}</h3>
            <h3>Time Remaining: {this.state.timeRemaining}</h3>
          </header>
        </div>
      );
    } else {
      return (
        <div className="header-container">
          <header className="header">
            <h1 className="header-title">Centurion</h1>
            <p className="header-title-description">Survive Odoacer's fleet and Save the Empire!</p>
          </header>
        </div>
      );
    }
  }
}

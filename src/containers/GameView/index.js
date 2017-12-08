import React, { Component } from "react";
import Header from "../../components/Header";
import Canvas from "../../components/Canvas";
import Footer from "../../components/Footer";
import "./styles.css";

class GameView extends Component {
  constructor(props) {
    super(props);

    this.submitUsernameValue = this.submitUsernameValue.bind(this);
    this.updateUsernameValue = this.updateUsernameValue.bind(this);

    this.state = {
      username: "",
      error: "",
      displayError: false,
      loggedIn: false
    };
  }

  submitUsernameValue(event) {
    const { username } = this.state;

    if (
      typeof username === "string" &&
      isNaN(username) &&
      username.length > 4 &&
      username.length < 16
    ) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({
        error: "That username does not meet the requirements! Try again.",
        displayError: true
      });
    }
    event.preventDefault();
  }

  updateUsernameValue(event) {
    this.setState({ username: event.target.value });
  }

  showLoginForm() {
    return (
      <div>
        <Header
          username={this.state.username}
          loggedIn={this.state.loggedIn}
        />
        <div className="login-container">
          <div>
            <div className="login-form">
              <form onSubmit={this.submitUsernameValue}>
                <h1 className="username-title">Username</h1>
                <p className="enter-username-title-description">
                  Your username must be a string with 5-15 characters!
                </p>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.updateUsernameValue}
                />
                <br/>
                <input type="submit" value="Play!" className="button submit-button" />
              </form>
            </div>
          </div>
          {this.state.displayError && this.state.error}
        </div>
        <Footer />
      </div>
    );
  }

  startGame() {
    return (
      <Canvas username={this.state.username} loggedIn={this.state.loggedIn} />
    );
  }

  render() {
    return (
      <div>
        {!this.state.loggedIn && this.showLoginForm()}
        {this.state.loggedIn && this.startGame()}
      </div>
    );
  }
}

export default GameView;

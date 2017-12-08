import React, { Component } from 'react';
import GameView from '../GameView';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        loggedIn: false,
      };
  }
  render() {
    return (
      <GameView />
    );
  }
}

export default App;

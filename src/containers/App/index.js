import React, { Component } from 'react';
import GameView from '../../components/GameView';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        loggedIn: false,
      };
  }
  render() {
    return (
      <div>
        <GameView />
      </div>
    );
  }
}

export default App;

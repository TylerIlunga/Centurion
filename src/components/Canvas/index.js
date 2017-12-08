import React, { Component } from 'react';
import Header from '../Header';
import Footer from "../Footer";
import { enemies, players, mouse } from '../../client';
import GameOverView from '../../containers/GameOverView';
import './styles.css';

let canvas = null;
let ctx = null;
let health = 100;
let scoreInterval = null;

const rect = (props) =>  {
  const { ctx, x, y, width, height } = props;
  ctx.fillStyle = '#37C612';
  ctx.fillRect(x, y, width, height);
};

function pushOff(c1, c2) {
  let [dx, dy] = [c2.x - c1.x, c2.y - c1.y];
  const L = Math.hypot(dx, dy);
  let distToMove = c1.radius + c2.radius - L;
  if (distToMove > 0) {
    dx /= L;
    dy /= L;
    c1.x -= dx * distToMove / 2;
    c1.y -= dy * distToMove / 2;
    c2.x += dx * distToMove / 2;
    c2.y += dy * distToMove / 2;
  }
};

const distanceBetween = (sprite1, sprite2) => {
  return Math.hypot(sprite1.x - sprite2.x, sprite1.y - sprite2.y);
};

const haveCollided = (sprite1, sprite2) => {
  return distanceBetween(sprite1, sprite2) < (sprite1.radius + sprite2.radius);
};

const updateMouse = (event) => {
  const { left, top } = canvas.getBoundingClientRect();
  if (event) {
    mouse.x = event.clientX - left;
    mouse.y = event.clientY - top;
  }
};

const moveToward = (leader, follower, speed) => {
  follower.x += (leader.x - follower.x) * speed;
  follower.y += (leader.y - follower.y) * speed;
};

const clearBackground = () => {
  rect({ ctx, x: 0, y: 0, width: canvas.width, height: canvas.height });
};

const updateScene = () => {
  players.forEach(player => moveToward(mouse, player, player.speed));
  players.forEach(player => {
    enemies.forEach(enemy => moveToward(player, enemy, enemy.speed));
  });
  for (let i = 0; i < enemies.length; i++) {
    for (let j = i+1; j < enemies.length; j++) {
      pushOff(enemies[i], enemies[j]);
    }
  }
  enemies.forEach(enemy => {
    if (haveCollided(enemy, players[0])) {
      health.value -= 1;
    }
  });
};

const drawScene = () => {
  clearBackground();
  players.forEach(player => player.draw(canvas.getContext('2d')));
  enemies.forEach(enemy => enemy.draw(canvas.getContext('2d')));
  updateScene();
  window.requestAnimationFrame(drawScene);
};

const playerIsDead = () => {
  if (health.value <= 0) {
    clearInterval(scoreInterval);
    window.cancelAnimationFrame(drawScene);
    return true;
  } else {
    return false;
  }
};

export default class Canvas extends Component {
    constructor(props){
      super(props);

      this.state = { timeOfSurvival: 0 };
    }

    componentDidMount() {
      canvas = this.refs.canvas;
      ctx = canvas.getContext('2d');
      health = this.refs.progress;

      window.addEventListener('mousemove', updateMouse);

      scoreInterval = setInterval(() => {
        this.setState({ timeOfSurvival: this.state.timeOfSurvival + 1 });
      }, 1000)

      drawScene();
    }

    render() {
        if (playerIsDead()) {
          return (
            <GameOverView
              username={this.props.username}
              timeOfSurvival={this.state.timeOfSurvival}
            />
          );
        } else {
          return (
            <div>
              <Header
                username={this.props.username}
                loggedIn={this.props.loggedIn}
              />
              <div className="game-board">
                <h1>Survive!</h1>
                <p><progress ref="progress" max={100} value={100} /></p>
                <canvas ref="canvas" width={700} height={600} />
              </div>
              <Footer />
            </div>
          );
        }
    }
}

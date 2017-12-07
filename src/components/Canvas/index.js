import React, { Component } from 'react';
import { enemies, players, mouse } from '../../client';
import './styles.css';

let ctx = null;
let canvas = null;
let progress = null;

const rect = (props) =>  {
    const { ctx, x, y, width, height } = props;
    ctx.fillStyle = 'linear-gradient(to right, red, yellow)';
    ctx.fillRect(x, y, width, height);
}

const distanceBetween = (sprite1, sprite2) => {
  return Math.hypot(sprite1.x - sprite2.x, sprite1.y - sprite2.y);
}

const haveCollided = (sprite1, sprite2) => {
  return distanceBetween(sprite1, sprite2) < (sprite1.radius + sprite2.radius);
}

const updateMouse = (event) => {
  const { left, top } = canvas.getBoundingClientRect();
  if (event) {
    mouse.x = event.clientX - left;
    mouse.y = event.clientY - top;
  }
}

const moveToward = (leader, follower, speed) => {
  follower.x += (leader.x - follower.x) * speed;
  follower.y += (leader.y - follower.y) * speed;
}

const clearBackground = () => {
  rect({ ctx, x: 0, y: 0, width: canvas.width, height: canvas.height });
}

const updateScene = () => {
  players.forEach(player => moveToward(mouse, player, player.speed));
  players.forEach(player => {
    enemies.forEach(enemy => moveToward(player, enemy, enemy.speed));
  });
  enemies.forEach(enemy => {
    if (haveCollided(enemy, players[0])) {
      progress.value -= 1;
    }
  });
}

const drawScene = () => {
  clearBackground();
  players.forEach(player => player.draw(canvas.getContext('2d')));
  enemies.forEach(enemy => enemy.draw(canvas.getContext('2d')));
  updateScene();
  if (progress.value <= 0) {
    alert('Game Over!');
    return;
  }
  window.requestAnimationFrame(drawScene);
};

export default class Canvas extends Component {
    constructor(){
      super();
      this.state = { spaceBarPressed: false };
    }
    componentDidMount() {
      canvas = this.refs.canvas;
      ctx = canvas.getContext('2d');
      progress = this.refs.progress;
      window.addEventListener('mousemove', updateMouse);
      drawScene();
    }

    render() {
        return (
            <div>
              <p><progress ref="progress" max={100} value={100} /></p>
              <canvas ref="canvas" width={400} height={400} />
            </div>
        );
    }
}

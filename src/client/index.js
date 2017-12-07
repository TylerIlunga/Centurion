import Player from '../components/Player';
import Enemy from '../components/Enemy';

export const enemies = [
  new Enemy(250, 250, 30, 0.01, 'rgba(80, 200, 15, 0.8)'),
  new Enemy(200, 55, 30, 0.05, 'rgba(200, 70, 120, 0.8)'),
  new Enemy(80, 90, 30, 0.07, 'rgba(240, 160, 70, 0.8)'),
  new Enemy(150, 150, 30, 0.02, 'rgba(240, 100, 70, 0.8)')
];

export const players = [
  new Player(250, 150, 20, 0.05, 'rgba(240, 100, 70, 0.8)'),
];

export const mouse = { x: 0, y: 0 };

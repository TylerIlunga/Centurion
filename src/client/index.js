import Player from '../components/Player';
import Enemy from '../components/Enemy';

export const enemies = [
  new Enemy(250, 250, 5, 0.07, '#008080'),
  new Enemy(22, 55, 10, 0.07, '#FFC0CB'),
  new Enemy(80, 90, 15, 0.06, '#ffffff'),
  new Enemy(230, 12, 20, 0.05, '#000000'),
  new Enemy(76, 150, 25, 0.04, '#00ffff'),
  new Enemy(103, 124, 30, 0.03, '#ff7373'),
  new Enemy(10, 84, 35, 0.02, '#ffd700'),
  new Enemy(3, 99, 40, 0.02, '#ff00ff')
];

export const players = [
  new Player(250, 150, 20, 0.05, '#DB1360'),
];

export const mouse = { x: 0, y: 0 };

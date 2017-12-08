import React from 'react';
import { shallow } from 'enzyme';
import { players, enemies, mouse } from '../client';
import App from '../containers/App';
import GameView from '../containers/GameView';

test('Only one player on the board', () => {
  expect(players.length).toBe(1);
});

test('Eight players on the board', () => {
  expect(enemies.length).toBe(8);
});

test('Mouse has a numerical x and y position', () => {
  let testObj = { x: expect.any(Number), y: expect.any(Number) };
  expect(mouse).toMatchObject(testObj);
});

test('Mouse starts at the point (0,0)', () => {
  let testObj = { x: 0, y: 0 };
  expect(mouse).toMatchObject(testObj);
});

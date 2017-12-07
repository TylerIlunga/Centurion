import { combineReducers } from 'redux';
import gameReducer from './gameReducer.js';

export default function rootReducer() {
  return combineReducers({
    game: gameReducer,
  });
}

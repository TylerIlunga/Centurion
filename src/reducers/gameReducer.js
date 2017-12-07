export const PLAYER_HIT = 'PLAYER_HIT';

export function playerHit(payload) {
  return { type: PLAYER_HIT, payload };
}

const initialState = { health: 100 };

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_HIT:
      return {
        ...state,
        health: action.payload,
      };
    default:
      return state;
  }
}

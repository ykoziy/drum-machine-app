import { SWITCH_POWER } from "../constants/actionTypes";

export default (state, action) => {
  switch(action.type) {
    case SWITCH_POWER:
      return {...state, power: !state.power}
    default:
      return state;
  }
};

import { SWITCH_POWER, ADJUST_VOLUME } from "../constants/actionTypes";

export default (state, action) => {
  switch(action.type) {
    case SWITCH_POWER:
      return {...state, power: !state.power};
    case ADJUST_VOLUME:
      return {...state, volumeVal: action.volume/100};
    default:
      return state;
  }
};

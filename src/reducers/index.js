import { SWITCH_POWER, ADJUST_VOLUME, PRESS_PAD, SWITCH_BANK } from "../constants/actionTypes";

export default (state, action) => {
  switch(action.type) {
    case SWITCH_POWER:
      return {...state, power: !state.power, padName: ""};
    case ADJUST_VOLUME:
      return {...state, volumeVal: action.volume/100};
    case PRESS_PAD:
      return {...state, padName: action.padName};
    case SWITCH_BANK:
      return {...state, bankName: action.bankName};
    default:
      return state;
  }
};

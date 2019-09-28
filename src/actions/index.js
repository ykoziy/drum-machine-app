import { SWITCH_POWER, ADJUST_VOLUME } from "../constants/actionTypes";

export const switchPower = () => ({type: SWITCH_POWER});

export const adjustVolume = (volume) => ({type: ADJUST_VOLUME, volume});
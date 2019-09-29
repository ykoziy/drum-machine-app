import { SWITCH_POWER, ADJUST_VOLUME, PRESS_PAD } from "../constants/actionTypes";

export const switchPower = () => ({type: SWITCH_POWER});

export const adjustVolume = (volume) => ({type: ADJUST_VOLUME, volume});

export const pressPad = (padName) => ({type: PRESS_PAD, padName});
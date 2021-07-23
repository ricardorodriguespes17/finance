import { SHOW_BAR, HIDE_BAR } from "../actionTypes";

export function showBar() {
  return {
    type: SHOW_BAR,
  };
}

export function hideBar() {
  return {
    type: HIDE_BAR,
  };
}

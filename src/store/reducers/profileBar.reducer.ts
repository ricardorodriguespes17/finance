import { ProfileBarStateType, StockActionType } from "../../types";
import { HIDE_BAR, SHOW_BAR } from "../actionTypes";

const initialState = {
  isShowBar: false,
} as ProfileBarStateType;

export default function profileBarReducer(
  state = initialState,
  action: StockActionType
) {
  switch (action.type) {
    case HIDE_BAR:
      return { ...state, isShowBar: false };
    case SHOW_BAR:
      return { ...state, isShowBar: true };
    default:
      return state;
  }
}

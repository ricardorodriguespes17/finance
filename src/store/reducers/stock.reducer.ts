import { StockActionType, StockStateType } from "../../types";
import {
  ADD_FAV,
  ADD_RECENTS,
  CHANGE_STOCK_IN_CHART,
  REMOVE_FAV,
} from "../actionTypes";

const initialState = {
  favorities: [],
  recents: [],
  stockInChart: undefined,
} as StockStateType;

export default function stockReducer(
  state = initialState,
  action: StockActionType
) {
  switch (action.type) {
    case ADD_FAV:
      if (
        state.favorities.some((item) => item.symbol === action.payload.symbol)
      ) {
        return state;
      }
      return { ...state, favorities: state.favorities.concat(action.payload) };
    case ADD_RECENTS:
      if (state.recents.some((item) => item.symbol === action.payload.symbol)) {
        return state;
      }
      return { ...state, recents: state.recents.concat(action.payload) };
    case REMOVE_FAV:
      return {
        ...state,
        favorities: state.favorities.filter(
          (item) => item.symbol !== action.payload.symbol
        ),
      };
    case CHANGE_STOCK_IN_CHART:
      return {
        ...state,
        stockInChart: action.payload,
      };
    default:
      return state;
  }
}

import { StockType } from "../../types";
import {
  ADD_FAV,
  ADD_RECENTS,
  CHANGE_STOCK_IN_CHART,
  REMOVE_FAV,
} from "../actionTypes";

export function addFav(stock: StockType) {
  return {
    type: ADD_FAV,
    payload: stock,
  };
}

export function removeFav(stock: StockType) {
  return {
    type: REMOVE_FAV,
    payload: stock,
  };
}

export function addRecents(stock: StockType) {
  return {
    type: ADD_RECENTS,
    payload: stock,
  };
}

export function changeStockInChart(stock: StockType) {
  return {
    type: CHANGE_STOCK_IN_CHART,
    payload: stock,
  };
}

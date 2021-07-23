import stockReducer from "./reducers/stock.reducer";
import profileBarReducer from "./reducers/profileBar.reducer";
import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    stock: stockReducer,
    profileBar: profileBarReducer,
  })
);

export default store;

import stockReducer from "./reducers/stock.reducer";
import { createStore } from "redux";

const store = createStore(stockReducer);

export default store;

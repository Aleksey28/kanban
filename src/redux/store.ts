import { combineReducers, createStore } from "redux";
import toDoReducer from "./todoReducer";

const reducers = combineReducers({
  todo: toDoReducer,
});

const store = createStore(
  reducers,
);

export default store;

import { combineReducers, createStore } from "redux";
import { InpReducer, Reducer } from "./Reducer";
// export const store = createStore({
//   Reducer,InpReducer,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// });
 const RootReducer = combineReducers({
  Reducer,
  InpReducer
});
export const store = createStore(RootReducer);
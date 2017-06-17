import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { Map } from "immutable";

import { reducer as dataReducer } from "./data/reducer";
import routingReducer from "./reducer";

const initialState = Map();
const appReducer = combineReducers({
  routing: routingReducer,
  data: dataReducer
});

export default createStore(
  appReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

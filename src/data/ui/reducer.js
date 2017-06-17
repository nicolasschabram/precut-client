import { combineReducers } from "redux-immutable";
import { reducer as tableViewReducer } from "./table_view/reducer";

export const reducer = combineReducers({
  table_view: tableViewReducer
});

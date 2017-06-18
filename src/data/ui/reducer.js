import { combineReducers } from "redux-immutable";
import { reducer as tableViewReducer } from "./table_view/reducer";
import { reducer as modalReducer } from "./modal/reducer";

export const reducer = combineReducers({
  table_view: tableViewReducer,
  modal: modalReducer
});

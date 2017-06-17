import { combineReducers } from "redux-immutable";
import { reducer as projectsReducer } from "./projects/reducer";
import { reducer as uiReducer } from "./ui/reducer";

export const reducer = combineReducers({
  projects: projectsReducer,
  ui: uiReducer
});

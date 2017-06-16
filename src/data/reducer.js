import { combineReducers } from "redux-immutable";
import { reducer as projectsReducer } from "./projects/reducer";

export const reducer = combineReducers({
  projects: projectsReducer
});

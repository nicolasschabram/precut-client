import { combineReducers } from "redux-immutable";
import { reducer as projectsReducer } from "./projects/reducer";
import { reducer as tracksReducer } from "./tracks/reducer";
import { reducer as uiReducer } from "./ui/reducer";

export const reducer = combineReducers({
  projects: projectsReducer,
  tracks: tracksReducer,
  ui: uiReducer
});

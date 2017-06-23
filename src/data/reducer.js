import { combineReducers } from "redux-immutable";

import { reducer as projectsReducer } from "./projects/reducer";
import { reducer as filesReducer } from "./files/reducer";
import { reducer as soundbitesReducer } from "./soundbites/reducer";

export const reducer = combineReducers({
  projects: projectsReducer,
  files: filesReducer,
  soundbites: soundbitesReducer
});

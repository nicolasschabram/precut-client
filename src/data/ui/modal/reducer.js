import { SHOW, HIDE } from "./actions";
import { Map } from "immutable";

const initialState = Map({
  isVisible: false
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW: {
      return state.set("isVisible", true);
    }
    case HIDE: {
      return state.set("isVisible", false);
    }
    default: return state;
  }
}

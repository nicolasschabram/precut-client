import { SET_INPUT, CLEAR } from "./actions";
import { Map } from "immutable";

const initialState = Map();

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INPUT: {
      return state.setIn([action.formId, action.fieldId], action.text);
    }
    case CLEAR: {
      return state.set(action.formId, Map());
    }
    default: return state;
  }
}

import { TOGGLE_SELECT, TOGGLE_SELECT_ALL, RESET_SELECTION } from "./actions";
import { Map, Set } from "immutable";

const initialState = Map({
  selectedKeys: Set(),
  allSelected: false
});

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SELECT: {
      let newState = state.update(
        "selectedKeys",
        keys => keys.includes(action.key) ?
          keys.delete(action.key) :
          keys.add(action.key)
      );
      return newState.update("allSelected", allSelected =>
        !!(action.itemCount === newState.get("selectedKeys").count())
      );
    }
    case TOGGLE_SELECT_ALL: {
      const newState = state.update("allSelected", allSelected => !allSelected);
      return newState.get("allSelected") ?
        newState.set("selectedKeys", action.keys.toSet()) :
        newState.set("selectedKeys", Set());
    }
    case RESET_SELECTION: {
      return state.delete("allSelected")
                  .delete("selectedKeys");
    }
    default: return state;
  }
}

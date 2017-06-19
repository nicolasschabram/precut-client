import {
  TOGGLE_SELECT,
  TOGGLE_SELECT_ALL,
  RESET_SELECTION,
  SORT
} from "./actions";

import { Map, Set } from "immutable";

const initialState = Map({
  selectedKeys: Set(),
  allSelected: false,
  sortBy: Map({
    column: "lastModified",
    order: "DESC"
  })
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
      return state.set("selectedKeys", Set())
                  .set("allSelected", false );
    }
    case SORT: {
      return action.column ? state.update("sortBy", current => {
        return Map({
          column: action.column,
          order: current.get("column") === action.column &&
                 current.get("order") === "DESC" ? "ASC" : "DESC"
        })
      }) : state.set("sortBy", initialState.get("sortBy"));
    }
    default: return state;
  }
}

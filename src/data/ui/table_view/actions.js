export const TOGGLE_SELECT = "ui/table-view/toggle-select";
export const TOGGLE_SELECT_ALL = "ui/table-view/toggle-select-all";
export const RESET_SELECTION = "ui/table-view/reset-selection";
export const SORT = "ui/table-view/sort";

export function toggleSelect(key, itemCount) {
  return {
    type: TOGGLE_SELECT,
    key: key,
    itemCount: itemCount
  }
}

export function toggleSelectAll(keys) {
  return {
    type: TOGGLE_SELECT_ALL,
    keys: keys
  }
}

export function resetSelection() {
  return {
    type: RESET_SELECTION
  }
}

export function sortTable(column) {
  return {
    type: SORT,
    column: column
  }
}

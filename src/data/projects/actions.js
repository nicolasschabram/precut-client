export const ADD = "projects/add";
export const TOGGLE_CHECK = "projects/toggle-check";
export const TOGGLE_CHECK_ALL = "projects/toggle-check-all";

export function add(payload) {
  return (
    payload.name && ({
      type: ADD,
      payload
    })
  );
}

export function toggleCheck(projectId) {
  return {
    type: TOGGLE_CHECK,
    projectId
  };
}

export function toggleCheckAll() {
  return {
    type: TOGGLE_CHECK_ALL
  }
}

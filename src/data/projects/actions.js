export const MOVE_TO_TRASH = "projects/move-to-trash"
export const ADD = "projects/add"

export function moveProjectToTrash(ids) {
  return {
    type: MOVE_TO_TRASH,
    ids: ids
  };
}

export function addProject(name) {
  return {
    type: ADD,
    name: name
  }
}

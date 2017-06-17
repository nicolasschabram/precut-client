export const ADD = "projects/add";
export const MOVE_TO_TRASH = "projects/move-to-trash"

export function moveProjectsToTrash(ids) {
  return {
    type: MOVE_TO_TRASH,
    ids: ids
  };
}

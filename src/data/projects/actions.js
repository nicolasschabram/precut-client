export const MOVE_TO_TRASH = "projects/move-to-trash"

export function moveToTrash(ids) {
  return {
    type: MOVE_TO_TRASH,
    ids: ids
  };
}

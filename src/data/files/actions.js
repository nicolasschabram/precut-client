export const MOVE_TO_TRASH = "files/move-to-trash";

export function moveFilesToTrash(ids) {
  return {
    type: MOVE_TO_TRASH,
    ids: ids
  };
}

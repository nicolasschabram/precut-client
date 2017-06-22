export const MOVE_TO_TRASH = "tracks/move-to-trash";

export function moveTracksToTrash(ids) {
  return {
    type: MOVE_TO_TRASH,
    ids: ids
  };
}

export const ADD = "projects/add";

export function add(payload) {
  return (
    payload.name && ({
      type: ADD,
      payload
    })
  );
}

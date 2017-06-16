export const ADD = "projects/add";
export const CHECK = "projects/check";

export function add(payload) {
  return (
    payload.name && ({
      type: ADD,
      payload
    })
  );
}

export function check(projectId) {
  return {
    type: CHECK,
    projectId
  };
}

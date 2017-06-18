export const SHOW = "ui/modal/show-modal";
export const HIDE = "ui/modal/hide-modal";

export function showModal() {
  return {
    type: SHOW
  }
}

export function hideModal() {
  return {
    type: HIDE
  }
}

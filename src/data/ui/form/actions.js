export const SET_INPUT = "ui/form/set-input";
export const CLEAR = "ui/form/clear";

export function setFormInput(formId, fieldId, text) {
  return {
    type: SET_INPUT,
    formId: formId,
    fieldId: fieldId,
    text: text
  }
}

export function clearForm(formId) {
  return {
    type: CLEAR,
    formId: formId
  }
}

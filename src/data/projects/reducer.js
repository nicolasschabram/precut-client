import { ADD } from "./actions";
import { fromJS } from "immutable"

const initialState = fromJS([
  {
    id: "asdf7adf",
    name: "Project 1"
  },
  {
    id: "aasddadf",
    name: "Project 2"
  },
  {
    id: "adasasdf",
    name: "Project 3"
  },
  {
    id: "asdf7sge",
    name: "Project 4"
  },
  {
    id: "NEWNEWNEW",
    name: "NEW"
  },
]);

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      return state.merge(action.payload);
    }
    default:
      return state;
  }
}

export function getProjectNames(state) {
  return state.projects.map(project => project.name);
};

export function getProjectCount(state) {
  return state.count();
}

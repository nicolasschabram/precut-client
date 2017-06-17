import { MOVE_TO_TRASH } from "./actions";
import { fromJS } from "immutable"

const initialState = fromJS([
  {
    id: "asdf7adf",
    name: "Project 1",
    lastModified: new Date(2017, 5, 16, 17, 25),
    tracks: [{ id: "f34w2qr4f3" }, { id: "f34w2qr4f3" }]
  },
  {
    id: "aasddadf",
    name: "Project 2",
    lastModified: new Date(2017, 5, 15, 0, 3),
    tracks: [{ id: "f34w2qr4ff" }]
  },
  {
    id: "adasasdf",
    name: "Project 3",
    lastModified: new Date(2017, 5, 14, 17, 25),
    tracks: [],
    inTrash: true
  },
  {
    id: "asdf7sge",
    name: "Project 4",
    lastModified: new Date(2017, 0, 1, 17, 25),
    tracks: [{ id: "f34s2qr4f3" }, { id: "f34w2qr443" }]
  },
  {
    id: "NEWNEWNEW",
    name: "NEW",
    lastModified: new Date(2001, 1, 16, 17, 25),
    tracks: []
  },
]);

export function reducer(state = initialState, action) {
  switch (action.type) {

    case MOVE_TO_TRASH: {
      let newState = state;
      action.ids.map(id =>
        state.findIndex(project => id === project.get("id"))
      ).forEach(index =>
        newState = newState.setIn([index, "inTrash"], true)
      );
      return newState;
    }

    default:
      return state;
  }
}

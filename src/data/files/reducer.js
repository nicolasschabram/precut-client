import { MOVE_TO_TRASH } from "./actions";
import { fromJS } from "immutable"

const initialState = fromJS([{
  id: "f34w2qr4f3",
  project: "asdf7adf",
  name: "Test file",
  duration: "00:10:23",
  speakers: [{
    id: "ajhsdoh23",
    name: "Angela Merkel"
  }, {
    id: "0uw88438f",
    name: "Barack Obama"
  }],
  reporters: [{
    id: "adhdjshja",
    name: "Truman Capote"
  }],
  tags: [{
    id: "sadjlh323",
    name: "sample tag"
  }],
  recDate: new Date(2016, 5, 16, 17, 25),
  quality: {
    sound: 4,
    content: 3
  },
  summary: "This is a summary of the file.",
  notes: "Here are some sample notes.",
  lastModified: new Date(2014, 5, 16, 17, 25)
}, {
  id: "f3ws2qr4f3",
  project: "asdf7adf",
  name: "Test file 2",
  duration: "00:02:01",
  speakers: [{
    id: "ajhsdoh23",
    name: "Barack Obama"
  }, {
    id: "0uw88438f",
    name: "Angela Merkel"
  }],
  reporters: [{
    id: "adhdjshja",
    name: "Truman Capote"
  }],
  tags: [{
    id: "sadjlh323",
    name: "a sample tag"
  }],
  recDate: new Date(2012, 5, 16, 17, 25),
  quality: {
    sound: 4,
    content: 3
  },
  summary: "This is a summary of the file.",
  notes: "Here are some sample notes.",
  lastModified: new Date(2017, 5, 16, 17, 25)
}]);

export function reducer(state = initialState, action) {
  switch (action.type) {

    case MOVE_TO_TRASH: {
      let newState = state;
      action.ids.map(id =>
        state.findIndex(file => id === file.get("id"))
      ).forEach(index =>
        newState = newState.setIn([index, "inTrash"], true)
      );
      return newState;
    }

    default:
      return state;
  }
}

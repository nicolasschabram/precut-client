import { fromJS } from "immutable"

const initialState = fromJS([{
  id: "ffaf2qr4ff",
  track: "f3ws2qr4f3",
  inpoint: 4500,
  outpoint: 9300,
  name: "Some soundbite X",
  tags: [{
    id: "tagjlhtag",
    name: "sample tag"
  }, {
    id: "tag2lhtag",
    name: "tag 2"
  }],
  translation: "This is a translation of the soundbite.",
  notes: "Here are some sample notes."
}, {
  id: "ffff2qa4ff",
  track: "f3ws2qr4f3",
  inpoint: 4500,
  outpoint: 9300,
  name: "Some soundbite Y",
  tags: [{
    id: "tagjlhtag",
    name: "sample tag"
  }, {
    id: "tag2lhtag",
    name: "tag 2"
  }],
  translation: "This is a translation of the soundbite.",
  notes: "Here are some sample notes."
}, {
  id: "afff2qr4ff",
  track: "f3ws2qr4f3",
  inpoint: 4500,
  outpoint: 9300,
  name: "Some soundbite Z",
  tags: [{
    id: "tagjlhtag",
    name: "sample tag"
  }, {
    id: "tag2lhtag",
    name: "tag 2"
  }],
  translation: "This is a translation of the soundbite.",
  notes: "Here are some sample notes."
}]);

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

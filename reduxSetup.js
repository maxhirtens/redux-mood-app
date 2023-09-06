const faces = {
  happy: "ʘ‿ʘ",
  sad: "⊙︿⊙",
  angry: "⋋_⋌",
  confused: "(@_@)",
};

const INITIAL_STATE = { face: "ʘ‿ʘ" };
const faceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, face: faces[action.payload] };
    default:
      return state;
  }
};

const store = Redux.createStore(faceReducer);

import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === actions.BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === actions.BUG_RESOLVED) {
    // create a copy of the object to update to avoid mutating the original object
    const bugToUpdate = state.filter((bug) => bug.id === action.payload.id)[0];
    const index = state.indexOf(bugToUpdate);

    return [
      ...state.slice(0, index),
      { ...bugToUpdate, resolved: true },
      ...state.slice(index + 1),
    ];
  }

  return state;
}

import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actions.TODO_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        completed: false,
      },
    ];
  } else if (action.type === actions.TODO_REMOVED) {
    return state.filter((todo) => todo.id !== action.payload.id);
  } else if (action.type === actions.TODO_COMPLETED) {
    // create a copy of the object to update to avoid mutating the original object
    const todoToUpdate = state.filter(
      (todo) => todo.id === action.payload.id
    )[0];
    const index = state.indexOf(todoToUpdate);

    return [
      ...state.slice(0, index),
      { ...todoToUpdate, completed: true },
      ...state.slice(index + 1),
    ];
  }

  return state;
}

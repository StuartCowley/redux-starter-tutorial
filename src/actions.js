import * as actions from "./actionTypes";

export const todoAdded = (description) => {
  return {
    type: actions.TODO_ADDED,
    payload: {
      description: description,
    },
  };
};

export const todoRemoved = (id) => {
  return {
    type: actions.TODO_REMOVED,
    payload: {
      id: id,
    },
  };
};

export const todoCompleted = (id) => {
  return {
    type: actions.TODO_COMPLETED,
    payload: {
      id: id,
    },
  };
};

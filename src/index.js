import {
  trim,
  wrapInDiv,
  toLowerCase,
  wrap,
  wrapCurried,
} from "./HigherOrderFunctions";
import { addCurriedArrow } from "./Currying";
import { demoImmutability } from "./ObjectImmutability";

import store from "./store";

import { todoAdded, todoCompleted } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed: ", store.getState());
});

store.dispatch(todoAdded("Todo1"));
store.dispatch(todoAdded("Todo2"));
store.dispatch(todoAdded("Todo3"));
store.dispatch(todoAdded("Todo4"));

store.dispatch(todoCompleted(2));

console.log(store.getState());

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

import { bugAdded, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed: ", store.getState());
});

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugAdded("Bug3"));
store.dispatch(bugAdded("Bug4"));

store.dispatch(bugResolved(2));

console.log(store.getState());

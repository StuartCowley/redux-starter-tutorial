// Original function
function add(a, b) {
  return a + b;
}

// Update to use currying: Function now returns a function
function addCurried(a) {
  return function (b) {
    return a + b;
  };
}

// Call this and store its returned function, then call that:
const first = addCurried(1);
const finalResult = first(5);

// The same thing done in shorthand, in effect separating parameters using brackets instead of commas
addCurried(1)(5);

const addCurriedArrow = (a) => (b) => a + b;

export { add, addCurried, addCurriedArrow };

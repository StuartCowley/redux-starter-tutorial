// Aim: Output an HTML element ie <div>some string here</div>

// Take raw string and process it by breaking each part of the logic into its own function,
// then pass the result of each of these into the next function in the chain
let input = "   Javascript   ";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

// This approach works fine FOR FUNCTIONS WITH ONLY ONE ARGUMENT
const result = wrapInDiv(toLowerCase(trim(input)));

// Add a better function to wrap a string with a given element type, and calling this in the same way
// will not work, as the wrap fuinction is missing the second parameter
const wrap = (type, str) => `<${type}>${str}</${type}>`;
// will return <javascript>undefined</javascript>
const result2 = wrap(toLowerCase(trim(input)));

// Create a curried version of the same function
const wrapCurried = (type) => (str) => `<${type}>${str}</${type}>`;
const result3 = wrapCurried("span")(toLowerCase(trim(input))); // Will return <span>javascript</span>

export { trim, wrapInDiv, toLowerCase, wrap, wrapCurried };

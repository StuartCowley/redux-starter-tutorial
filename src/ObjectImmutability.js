const demoImmutability = () => {
  const person = {
    name: "john",
    address: {
      country: "GB",
      city: "London",
    },
  };

  // Since address is not specified, the new object will reference the same point in memory
  // and so BOTH original and copy will be mutated
  const copy = { ...person, name: "Bob" };
  copy.address.city = "Liverpool";

  console.log("MUTATING ORIGINAL EXAMPLE:");
  console.log("Original: ");
  console.log(person);
  console.log("Copy: ");
  console.log(copy);

  // Reset original object
  person.address.city = "London";

  // This explicitly deep copies the nested object so it reassigning does not
  // cause the original object to be mutated
  const deepCopy = {
    ...person,
    name: "George",
    address: { ...person.address },
  };
  deepCopy.address.city = "Brighton";

  console.log("CREATING A DEEP COPY EXAMPLE:");
  console.log("Original: ");
  console.log(person);
  console.log("Deep Copy: ");
  console.log(deepCopy);
};

export { demoImmutability };

const exampleStore = [
  {
    id: 1,
    description: "",
    resolved: false,
  },
];

const addBugAction = {
  type: "bugAdded",
  payload: {
    description: "bug description here",
  },
};

const removeBugAction = {
  type: "bugRemoved",
  payload: {
    id: 1,
  },
};

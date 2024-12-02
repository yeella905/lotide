const assertEqual = (actual, expected) => {
    if (actual === expected) {
      console.log(`🟢Assertion passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴Assertion failed: ${actual} !== ${expected}`);
    }
    
  };

  const eqObjects = (object1, object2) => {
    //first line should be filtering out if they are the same ammount/length of keys of not then return false
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    //Key and Value Comparison:  loop through the keys of one object and check if the corresponding key in the other object has the same value.
    for (const key of Object.keys(object1)) {
      // Check if the value is an array
      if (Array.isArray(object1[key]) && Array.isArray((object2[key]))) {
        // Use eqArrays for array comparison
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
      // Compare values directly for non-array values
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  };
  
  // FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
    const inspect = require("util").inspect; // Import the inspect function

    const areEqual = eqObjects(actual, expected);

if (areEqual) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
} else {
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}
};

// Object comparison test: equal objects
assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 }); // Should print a pass message

// Object comparison test: unequal objects
assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // Should print a fail message

// Complex objects test: unequal nested objects
assertObjectsEqual({ a: { z: 5 }, b: 2 }, { a: { z: 10 }, b: 2 }); // Should print a fail message
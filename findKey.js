
const assertEqual = (actual, expected) => {
    if (actual === expected) {
      console.log(`🟢Assertion passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴Assertion failed: ${actual} !== ${expected}`);
    }
  
  };

const findKey = (object, callback) => {
    for (const key of Object.keys(object)) {
if (callback(object[key])) {
    return(key);
}
    }
    return undefined;
};

// Example object and callback
const testObj = {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 }
  };
  
  // Test case for findKey
const result = findKey(testObj, x => x.stars === 2);
assertEqual(result, "noma"); // expected to pass
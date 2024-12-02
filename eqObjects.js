// FUNCTION IMPLEMENTATION
const eqArrays = (array1, array2) => {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴Assertion failed: ${actual} !== ${expected}`);
  }
  
};
  
//   // TEST CODE
//   assertEqual("Lighthouse Labs", "Bootcamp");
//   assertEqual(1, 1);
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

//practice
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // should PASS

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // should PASS
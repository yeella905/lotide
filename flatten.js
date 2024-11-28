// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴Assertion failed: ${actual} !== ${expected}`);
  }
    
};
    
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
  
const assertArraysEqual = (firstArray, secArray) => {
  if (eqArrays(firstArray,secArray)) {
    console.log(`🟢Assertion passed: ${firstArray} === ${secArray}`);
  } else {
    console.log(`🔴Assertion failed: ${firstArray} !== ${secArray}`);
  }
    
};

const flatten = (array1) => {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
       
    if (Array.isArray(array1[i])) {
      // Recursively flatten the nested array
      result = result.concat(flatten(array1[i]));
    } else {
      // Add the element to the result if it's not an array
      result.push(array1[i]);
    }
  }
  return result;
};



console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
  
//   assertArraysEqual([1,2,3], [1,2,3]); // should pass
//   assertArraysEqual([1,2,3], [1,2]); // should fail


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
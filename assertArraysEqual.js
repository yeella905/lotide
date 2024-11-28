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

assertArraysEqual([1,2,3], [1,2,3]); // should pass
assertArraysEqual([1,2,3], [1,2]); // should fail
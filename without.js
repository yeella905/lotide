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

const without = (array1, array2) => {
  //initializing empty result array
  let result = [];

  //outer loop to go through each array in array1
  for (let i = 0; i < array1.length; i++) {
    // flag to track if current element should be removed
    let shouldExclude = false;

    // Inner loop to compare element in array1 with each in array2
    for (let e = 0; e < array2.length; e++) {
      if (array1[i] === array2[e]) {
        shouldExclude = true; //Mark for exclusion
        break; // No need to check further in array2
      }
    }
    //If not marked for exclusion, add to result
    if (!shouldExclude) {
      result.push(array1[i]);
    }
  }
  return result;
};
    


console.log(without([1, 2, 3], [1])); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
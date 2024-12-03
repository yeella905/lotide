const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
    const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
    return results;
  };

const results1 = map(words, (word) => word[0]);
console.log(results1);

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

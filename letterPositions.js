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

const countLetters = (allLetters) => {

  const forResults = {};
  for (const letter of allLetters) {
    if (letter in forResults) {
      forResults[letter] += 1;
    } else {
      forResults[letter] = 1;
    }
  }
  //return result
  return forResults;
};


const letterPositions = (positions) => {
  const results = {};
  //empty object
  for (let i = 0; i < positions.length; i++) {
    //loop the whole thing in order to get the character in each specific position.
    if (positions[i] !== ' ') {//this is a conditional, it won't log a space into the array
      if (positions[i] in results) {
        // If key exists, push the current index to the array
        results[positions[i]].push(i);
      } else {
        // If key doesn't exist, initialize it with an array [i] containing the current index
        results[positions[i]] = [i];
      }
    }
  }
  return results;
};


// console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
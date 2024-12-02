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

    const forResults = {}
    for (const letter of allLetters) {
        if (letter in forResults) {
            forResults[letter] += 1 
          } else {
            forResults[letter] = 1
          }
        }
        //return result
    return forResults;
    };


const letterPositions = (positions) => {
    const results = {};
    for (let i = 0; i < positions.length; i++) {
        if (positions[i] in results) {
           results = results.push[positions[i]] + 1
        } else {
            results = results.push[positions[i]]
        }
    }
    return results;
  };


// console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
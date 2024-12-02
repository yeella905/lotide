const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴Assertion failed: ${actual} !== ${expected}`);
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


console.log(countLetters("ella"));



// if (result[letter]) {
//     result[letter] += 1;
//   } else {
//     result[letter] = 1;
//   }
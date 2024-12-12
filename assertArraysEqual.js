const assertArraysEqual = (firstArray, secArray) => {
  if (eqArrays(firstArray,secArray)) {
    console.log(`🟢Assertion passed: ${firstArray} === ${secArray}`);
  } else {
    console.log(`🔴Assertion failed: ${firstArray} !== ${secArray}`);
  }
  
};

module.exports = assertArraysEqual;

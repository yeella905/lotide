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


const middle = (array) => {
    const result = [];
if (array.length <= 2) {
    return result;
} else if (array.length % 2 == 0) {
        let number1 = Math.floor(array.length / 2 -1)
        let number2 = Math.floor(array.length / 2)
        result.push(array[number1], array[number2])
        } else {result.push(array[Math.floor((array.length / 2))])}

    return result;
}


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
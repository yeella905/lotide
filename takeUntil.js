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


const takeUntil = (array,callBack) => { 
    const results = [];
    //looping throught the array to find the elements
   for (const element of array) {
// if the callback of x returns true 
if (callBack(element)) {
    //stop the fuction from continuing downt the list to perform
    //return result, will prevent the function from performing the rest. Basically the same as a break; but bettter to understand visually
    return results;
}
//defult .push each ellement into an array
 results.push(element);
}
//return the placement arrray
return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); //[ 1, 2, 5, 7, 2 ]

console.log('---');


// Test your function
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); // Expected output: ✅ Assertion passed

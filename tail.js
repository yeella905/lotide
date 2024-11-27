// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴Assertion failed: ${actual} !== ${expected}`);
  }
};


const tail = (array1) => {
  const tail = array1.slice(1);
  return tail;
};



const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs",];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!v



// // (value, index) => value === list2[index]

// const test = ["hello", "lighthouse", "lab"]

// // Test Case 1: Check the returned array elements

// const result = tail(test);
// assertEqual(result.length, test.length - 1); // ensure we get back two elements


// // assertEqual(result[0], test[1]); // ensure first element is "Lighthouse"
// // assertEqual(result[1], test[2]); // ensure second element is "Labs"
  
// for (let i = 0; i < result.length; i++) {
//    assertEqual(result[i], tail[i+1]);
// };


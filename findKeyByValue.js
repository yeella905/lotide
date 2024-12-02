// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴Assertion failed: ${actual} !== ${expected}`);
  }
  
};
  
//   // TEST CODE
//   assertEqual("Lighthouse Labs", "Bootcamp");
//   assertEqual(1, 1);


const findKeyByValue = (object, targetValue) => {
  for (const key of Object.keys(object)) {
    if (object[key] === targetValue) {
      return key;
    }
  }
  return undefined;
};




const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
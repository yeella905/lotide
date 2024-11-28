const eqArrays = (array1, array2) => {
  
  if (array1.length !== array2.length) {
    return `this will be ${false}.`;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `this will be ${false}.`;
    }
  }
  return `this will be ${true}.`;
  
};
  
//   eqArrays([1, 2, 3], [1, 2, 3]), true; // => should PASS
  
  

console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => True
const middle = (array) => {
  const result = [];
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    let number1 = Math.floor(array.length / 2 - 1);
    let number2 = Math.floor(array.length / 2);
    result.push(array[number1], array[number2]);
  } else {
    result.push(array[Math.floor((array.length / 2))]);
  }

  return result;
};

module.exports = middle;
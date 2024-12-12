const assert = require('chai').assert;
const middle = require("../middle");

// assertArraysEqual(middle([1])); // => []
// assertArraysEqual(middle([1, 2])); // => []
// assertArraysEqual(middle([1, 2, 3])); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5])); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4])); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


describe("#middle", () => {
it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
});
});
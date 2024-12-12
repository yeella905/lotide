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
it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    middle(words);
    assert.strictEqual(words.length, 3);
});
it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it ("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
});
});
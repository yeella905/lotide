// const tail = require("../tail");
// const assertEqual = require("../assertEqual");

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs",];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!v


const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
    it('returns "lighthouse", "Labs" from ["Hello", "Lighthouse", "Labs"]', () => {
        const result = tail(["Hello", "Lighthouse", "Labs"]);
        assert.deepEqual(result, ["Lighthouse", "Labs"]);
    });
    it("make sure the original array was not altered by the tail function", () => {
        const words = ["Hello", "Lighthouse", "Labs"];
        tail(words);
        assert.strictEqual(words.length, 3);
    });
});
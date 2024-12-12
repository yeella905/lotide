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
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1,2,3], [1,2,3]); // should pass
assertArraysEqual([1,2,3], [1,2]); // should fail
// sum.test.js
const sum = require("../assets/scripts/sum.js");

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("imported sum adds 1 + 2 to equal 3", () => {
  expect(sum.sum(1, 2)).toBe(3);
});

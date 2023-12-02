import { expect, test } from "./test-lib";
import { average, sum } from "./stats";

test("calculates the sum of all numbers", () => {
  const result = sum([1, 2, 3]);
  const expected = 6;

  expect(expected).toBe(result);
});

test("calculates the average of all numbers", () => {
  const result = average([1, 2, 3]);
  const expected = 2;

  expect(expected).toBe(result);
});

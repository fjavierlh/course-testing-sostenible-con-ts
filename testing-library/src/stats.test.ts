import { average, sum } from "./stats";
import * as statsAsync from "./stats-async";

import { describe, expect, it } from "./test-lib";

describe("Stats should", () => {
  it("calculates the sum of all numbers", () => {
    const result = sum([1, 2, 3]);
    const expected = 6;

    expect(expected).toBe(result);
  });

  it("calculates the average of all numbers", () => {
    const result = average([1, 2, 3]);
    const expected = 2;

    expect(expected).toBe(result);
  });
});

describe("Stats async should", () => {
  it("calculates asynchronously the sum of all numbers", async () => {
    const result = await statsAsync.sum([1, 2, 3]);
    const expected = 6;

    expect(expected).toBe(result);
  });

  it("calculates asynchronously the average of all numbers", async () => {
    const result = await statsAsync.average([1, 2, 3]);
    const expected = 2;

    expect(expected).toBe(result);
  });
});

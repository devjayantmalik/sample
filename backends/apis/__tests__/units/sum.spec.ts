import { sum } from "../../src/sum";

describe("Mathematical Functions", () => {
  it("should sum a list of numbers", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});

import { add } from ".";

describe("test - base", () => {
  test("add", () => {
    const sum = add(1, 2);
    expect(sum).toBe(3);
  });
});

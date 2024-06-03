const fibs = require("./fibonacci");

describe("Fibonacci function tests", () => {
  test("fibs(0) should return an empty array", () => {
    expect(fibs(0)).toEqual([]);
  });

  test("fibs(1) should return [0]", () => {
    expect(fibs(1)).toEqual([0]);
  });

  test("fibs(2) should return [0, 1]", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test("fibs(3) should return [0, 1, 1]", () => {
    expect(fibs(3)).toEqual([0, 1, 1]);
  });

  test("fibs(8) should return [0, 1, 1, 2, 3, 5, 8, 13]", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("fibs(10) should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]", () => {
    expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});

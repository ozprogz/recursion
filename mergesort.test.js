const mergeSort = require("./mergesort");

describe("Merge Sort test cases", () => {
  test("mergeSort([5]) should return the same array", () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test("mergeSort([5, 1, 9, 2]) should return [1, 2, 5, 9]", () => {
    expect(mergeSort([5, 1, 9, 2])).toEqual([1, 2, 5, 9]);
  });

  test("mergeSort([7, 2, 5, 4, 1, 6, 0, 3]) should return [0, 1, 2, 3, 4, 5, 6, 7]", () => {
    expect(mergeSort([7, 2, 5, 4, 1, 6, 0, 3])).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test("mergeSort([5, 1, 2, 9, 3, 7]) should return [1, 2, 3, 5, 7, 9]", () => {
    expect(mergeSort([5, 1, 2, 9, 3, 7])).toEqual([1, 2, 3, 5, 7, 9]);
  });

  test("mergeSort([5, 1, 2, 9, 3, 7, 4]) should return [1, 2, 3, 4, 5, 7, 9]", () => {
    expect(mergeSort([5, 1, 2, 9, 3, 7, 4])).toEqual([1, 2, 3, 4, 5, 7, 9]);
  });

  test("mergesSort([3, 4, 9, 18, 1, 100, 8, 31, 34, 21, 10]) should return [1, 3, 4, 8, 9, 10, 18, 21, 31, 34, 100]", () => {
    expect(mergeSort([3, 4, 9, 18, 1, 100, 8, 31, 34, 21, 10])).toEqual([
      1, 3, 4, 8, 9, 10, 18, 21, 31, 34, 100,
    ]);
  });
});

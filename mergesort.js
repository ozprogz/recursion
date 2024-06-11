/**
 * Merge Sort is a sort algorithm which uses recursion to merge different
 * smaller array and combine those in a sorted order.
 *
 * Pseudocode:
 * Sort the left half of the array
 * Sort the right half of the array
 * Merge the two halves together
 *
 * O(n log n)
 * Omega(n log n)
 */

const mergeSort = (array) => {
  if (array.length == 1) return array;
  const mid = Math.ceil(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  let sorted = [];
  let rightptr = 0;
  let leftptr = 0;

  while (leftptr < left.length && rightptr < right.length) {
    if (left[leftptr] < right[rightptr]) {
      sorted.push(left[leftptr]);
      leftptr++;
    } else {
      sorted.push(right[rightptr]);
      rightptr++;
    }
  }
  leftptr <= rightptr
    ? sorted.push(...left.slice(leftptr))
    : sorted.push(...right.slice(rightptr));
  return sorted;
};

module.exports = mergeSort;

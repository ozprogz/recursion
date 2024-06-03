const fibs = (n) => {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let previous = fibs(n - 1); // Get the Fibonacci sequence for n-1
    let nextFib = previous[previous.length - 1] + previous[previous.length - 2]; // Calculate the next Fibonacci number
    previous.push(nextFib); // Add the new number to the sequence
    return previous; // Return the updated sequence
  }
};

console.log(fibs(2));
module.exports = fibs;

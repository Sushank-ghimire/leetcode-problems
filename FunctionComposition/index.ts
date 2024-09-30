// 'compose' is a higher-order function that takes an array of functions as an argument
// and returns a new function. When this new function is called with a value,
// it applies each function in the array from right to left (last to first).

let compose = function (functions: ((x: any) => any)[]) {

  // The returned function takes an argument 'x'

  return function (x: any) {
    // We use 'reduceRight' to apply the functions from the last one to the first one.
    // 'reduceRight' starts with the value 'x' and applies each function 'fn' to the
    // accumulated result 'acc'.
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

// Example usage:
// Here we compose two functions:
// (x => x + 1) adds 1 to the input, and
// (x => 2 * x) doubles the input.

// First, 4 is doubled (becomes 8), then 1 is added (resulting in 9).

const fn = compose([(x) => x + 1, (x) => 2 * x]);

// Output the result of applying the composed function to 4.
// Expected output: 9 (because (4 * 2) + 1 = 9)

console.log(fn(4)); // 9

/*
 * This would work similarly:
 * const fn = compose([x => x + 1, x => 2 * x]);
 * fn(4); // 9
 */

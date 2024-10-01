/** Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise. */

/**
 * Memoizes a given function to store previously computed results and avoid repeated calculations.
 * @param {Function} fn - The function to be memoized.
 * @return {Function} - The memoized version of the function.
 */
function memoize(fn: (...args: any[]) => any) {
  // Create a cache object to store results.
  let cache: { [key: string]: any } = {};

  return function (...args: any[]) {
    // Create a key using the stringified arguments for easy lookup.
    const key = JSON.stringify(args);

    // If the key exists in the cache, return the cached result.
    if (key in cache) {
      return cache[key];
    }

    // Otherwise, compute the result, store it in the cache, and return it.
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example usage with a sum function:
let callCount = 0;
const memoizedSum = memoize(function (a: number, b: number) {
  callCount += 1;
  return a + b;
});

console.log(memoizedSum(2, 3)); // 5
console.log(memoizedSum(2, 3)); // 5 (cached result)
console.log(callCount); // 1 (function was only called once)

// Example with a Fibonacci function:
const memoizedFib = memoize(function fib(n: number): number {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
});

console.log(memoizedFib(5)); // 8
console.log(memoizedFib(5)); // 8 (cached result)

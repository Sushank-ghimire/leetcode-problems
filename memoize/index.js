function memoize(fn) {
  // Create a cache object to store results.
  let cache = {};
  return function () {
    let args = [];
    for (let _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    // Create a key using the stringified arguments for easy lookup.
    let key = JSON.stringify(args);

    console.log(cache);

    // If the key exists in the cache, return the cached result.
    if (key in cache) {
      return cache[key];
    }
    // Otherwise, compute the result, store it in the cache, and return it.
    var result = fn.apply(void 0, args);
    cache[key] = result;
    return result;
  };
}
// Example usage with a sum function:
var callCount = 0;
var memoizedSum = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedSum(2, 3)); // 5
console.log(memoizedSum(2, 3)); // 5 (cached result)
console.log(callCount); // 1 (function was only called once)
// Example with a Fibonacci function:
var memoizedFib = memoize(function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
});
console.log(memoizedFib(5)); // 8
console.log(memoizedFib(5)); // 8 (cached result)

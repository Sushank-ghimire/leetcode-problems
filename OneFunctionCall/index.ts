/** Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined. */


var once = function (fn: (...args: any[]) => any) {
  let called = false; // A flag to track if the function has been called

  return function (...args: any[]) {
    if (!called) {
      called = true; // Set the flag to true after the first call
      return fn(...args); // Call the original function with arguments
    }
    return undefined; // Return undefined on subsequent calls
  };
};

const func = (a: number, b: number, c: number) => a + b + c;

// Wrap the 'func' with 'once', so it can only be called once
let onceFunc = once(func);

console.log(onceFunc(1, 3, 4)); // 8, first call, so the function executes
console.log(onceFunc(1, 3, 4)); // undefined, subsequent calls return undefined

/** Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined. */
var once = function (fn) {
    var called = false; // A flag to track if the function has been called
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!called) {
            called = true; // Set the flag to true after the first call
            return fn.apply(void 0, args); // Call the original function with arguments
        }
        return undefined; // Return undefined on subsequent calls
    };
};
var func = function (a, b, c) { return a + b + c; };
// Wrap the 'func' with 'once', so it can only be called once
var onceFunc = once(func);
console.log(onceFunc(1, 3, 4)); // 8, first call, so the function executes
console.log(onceFunc(1, 3, 4)); // undefined, subsequent calls return undefined

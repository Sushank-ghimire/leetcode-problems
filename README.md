Here’s a `README.md` file containing explanations and solutions for the listed LeetCode problems:

---

# LeetCode Problems with Solutions

This document contains a set of JavaScript/TypeScript problems with detailed explanations and solutions.

---

## 1. Debounce

### Problem:
Given a function `fn` and a time `t` in milliseconds, return a debounced version of that function. The execution of the function is delayed by `t` milliseconds, and any call made within the delay period cancels the previous call.

### Explanation:
- A debounced function ensures that it will only be executed after `t` milliseconds have passed since its last invocation.
- If a function is called multiple times within the debounce window, only the last call will be executed.

### Solution:

```javascript
var debounce = function(fn, t) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
};
```

---

## 2. Counter

### Problem:
Given an integer `n`, return a counter function that initially returns `n` and increments by 1 on every subsequent call.

### Explanation:
- The counter starts at `n` and increments on each call.

### Solution:

```javascript
var createCounter = function(n) {
  return function() {
    return n++;
  };
};
```

---

## 3. Counter-2

### Problem:
Write a function `createCounter` that accepts an initial integer `init` and returns an object with three methods: `increment`, `decrement`, and `reset`.

### Solution:

```javascript
var createCounter = function(init) {
  let current = init;
  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => (current = init),
  };
};
```

---

## 4. Arguments Length

### Problem:
Write a function `argumentsLength` that returns the count of arguments passed to it.

### Solution:

```javascript
var argumentsLength = function(...args) {
  return args.length;
};
```

---

## 5. Filtering (without `Array.filter`)

### Problem:
Given an integer array `arr` and a filtering function `fn`, return a filtered array containing only elements for which `fn(arr[i], i)` evaluates to a truthy value. Solve without the built-in `Array.filter`.

### Solution:

```javascript
var filter = function(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) result.push(arr[i]);
  }
  return result;
};
```

---

## 6. Func Composition

### Problem:
Write a higher-order function `compose` that takes an array of functions and returns a new function that applies each function from right to left.

### Solution:

```javascript
let compose = function(functions) {
  return function(x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};
```

---

## 7. Map (without `Array.map`)

### Problem:
Given an integer array `arr` and a mapping function `fn`, return a new array with the transformation applied to each element. Solve without the built-in `Array.map`.

### Solution:

```javascript
var map = function(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};
```

---

## 8. Filter (without `Array.filter`)

### Problem:
Given an integer array `arr` and a filtering function `fn`, return a filtered array containing only elements for which `fn(arr[i], i)` evaluates to a truthy value. Solve without the built-in `Array.filter`.

### Solution:

```javascript
var filter = function(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) result.push(arr[i]);
  }
  return result;
};
```

---

## 9. toBe/notToBe

### Problem:
Write a function `expect` that takes any value `val` and returns an object with two methods:
- `toBe(val)`: Returns `true` if the values are strictly equal (`===`). Throws an error "Not Equal" otherwise.
- `notToBe(val)`: Returns `true` if the values are not strictly equal. Throws an error "Equal" otherwise.

### Solution:

```javascript
const expect = (val) => {
  return {
    toBe: (expected) => {
      if (val !== expected) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: (expected) => {
      if (val === expected) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};
```

---

## 10. One Function Call

### Problem:
Given a function `fn`, return a new function that ensures `fn` is called at most once.

### Solution:

```javascript
var once = function(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
};

const func = (a, b, c) => a + b + c;
let onceFunc = once(func);
console.log(onceFunc(1, 3, 4)); // 8
console.log(onceFunc(1, 3, 4)); // undefined
```

---

These solutions solve the respective problems efficiently with clear explanations.
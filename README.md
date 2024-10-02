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


## 10. Memoization
**Problem**: Given a function `fn`, return a memoized version of that function. A memoized function caches results so that it will never be called twice with the same inputs.

**Solution**:
```typescript
function memoize(fn: (...args: any[]) => any) {
  let cache: { [key: string]: any } = {};
  
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example usage:
let callCount = 0;
const memoizedSum = memoize(function (a: number, b: number) {
  callCount += 1;
  return a + b;
});

console.log(memoizedSum(2, 3)); // 5
console.log(memoizedSum(2, 3)); // 5 (cached)
console.log(callCount); // 1
```
---

Here’s the `README.md` entry for the **12th problem** (Array Merge Based on `id`):

---


## 12. Array Merge Based on `id`

### Problem:
Given two arrays `arr1` and `arr2`, return a new array `joinedArray`. Both input arrays contain objects with an `id` field (an integer). The task is to merge the two arrays based on the `id` field with the following rules:

1. If an `id` exists in one array but not the other, include the object as is.
2. If an `id` exists in both arrays, merge the objects:
   - If a key exists in one object but not the other, include that key-value pair.
   - If a key exists in both objects, the value from `arr2` should override the value from `arr1`.
3. The resulting array should have no duplicate `id`s and should be sorted by `id` in ascending order.

### Solution:
```javascript
function joinArrays(arr1, arr2) {
  const map = new Map();

  // Add all elements of arr1 to the map based on their id
  for (const obj of arr1) {
    map.set(obj.id, { ...obj });
  }

  // Merge arr2 elements into the map based on their id
  for (const obj of arr2) {
    if (map.has(obj.id)) {
      // If the id exists, merge the properties, prioritizing arr2 values
      map.set(obj.id, { ...map.get(obj.id), ...obj });
    } else {
      // If the id doesn't exist, just add the object from arr2
      map.set(obj.id, { ...obj });
    }
  }

  // Convert map back to an array and sort it by id in ascending order
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

// Example usage:
const arr1 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 4, age: 25 }
];

const arr2 = [
  { id: 2, name: 'Robert' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Eve' }
];

const result = joinArrays(arr1, arr2);
console.log(result);
```

### Example Output:
```bash
[
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Robert' },
  { id: 3, name: 'Charlie' },
  { id: 4, age: 25, name: 'Eve' }
]
```

### Explanation:
1. A `Map` is used to store objects by their `id` field.
2. We first loop through `arr1` and add each object to the `Map`.
3. We then loop through `arr2` and merge its objects with those already in the `Map`, prioritizing values from `arr2` when there is a conflict.
4. The final result is an array of merged objects, sorted by `id`.


---

## 13. Add Two Promises

### Problem:
Given two promises, `promise1` and `promise2`, write a function `addTwoPromises` that resolves both promises and returns a new promise which contains the sum of the two resolved values.

### Solution:
```javascript
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const result1 = await promise1;
    const result2 = await promise2;
    return result1 + result2;
};

/**
 * Example usage:
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // Output: 4
 */
```

### Explanation:
- The `addTwoPromises` function is asynchronous and waits for both `promise1` and `promise2` to resolve.
- Once both promises are resolved, it sums their resolved values and returns the result in a new promise.
- The result can be accessed using `.then()`.

### Example Output:
```bash
addTwoPromises(Promise.resolve(2), Promise.resolve(2)) // Logs: 4
```

---

## 14. Sleep Function

### Problem:
Write an asynchronous `sleep` function that takes a number `millis` (milliseconds) and returns a promise that resolves after the specified delay.

### Solution:
```javascript
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // Resolve after the timeout
        }, millis);
    });
}

/** 
 * Example usage:
 * let t = Date.now();
 * sleep(100).then(() => console.log(Date.now() - t)); // Approximately 100ms
 */
```

### Explanation:
- The `sleep` function returns a promise that uses `setTimeout` to delay the execution by `millis` milliseconds.
- After the delay, the promise is resolved, and the `.then()` function will run.
- This effectively "pauses" execution for the given amount of time.

### Example Output:
```bash
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // Logs: Approximately 100ms
```

---

/** Write a function argumentsLength that returns the count of arguments passed to it. */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args: any) {
  const arr = [...args];
  return arr.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

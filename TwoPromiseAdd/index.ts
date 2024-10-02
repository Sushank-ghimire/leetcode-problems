/** Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers. */

var addTwoPromises = async function (promise1: any, promise2: any) {
  const result1 = await promise1;
  const result2 = await promise2;
  return result1 + result2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // Output: 4

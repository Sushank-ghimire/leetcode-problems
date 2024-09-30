/** Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method. */

const map = (fn: (num: number, index: number) => number[], arr: any[]) => {
  let arr1: any = [];
  arr.forEach((arr, index) => {
    arr1.push(fn(arr[index], index));
  });
  return arr1;
};

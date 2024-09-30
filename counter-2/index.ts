/* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it. */

let createCount = (num: number) => {
    const number = num;
    return {
      increment: () => ++num,
      decrement: () => --num,
      reset: () => number,
    };
  };
  
  let count = createCount(40);
  console.log(count.increment());
  console.log(count.increment());
  console.log(count.increment());
  console.log(count.increment());
  console.log(count.decrement());
  console.log(count.decrement());
  console.log(count.reset());
  
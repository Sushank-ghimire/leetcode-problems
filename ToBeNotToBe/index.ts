/** Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". */

const expect = <T>(val: T) => {
  return {
    toBe: (val1: T) => {
      if (val === val1) console.log("Both are equal.");
      else console.log("Both are not equal");
    },
    notToBe: (val1: T) => {
      if (val === val1) console.log("Must not to be equal.");
      else console.log(true);
    },
  };
};

expect("name").toBe("name");
expect(5).notToBe(8);

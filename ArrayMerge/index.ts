/** Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
  */

function joinArrays(arr1: any[], arr2: any[]): any[] {
  const map = new Map<number, any>();

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
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 4, age: 25 },
];

const arr2 = [
  { id: 2, name: "Robert" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Eve" },
];

const result = joinArrays(arr1, arr2);
console.log(result);

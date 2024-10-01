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

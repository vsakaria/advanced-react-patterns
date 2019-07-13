const add = x => y => x + y;

const addFive = add(5);
const result = addFive(5); // should output 12

console.log("Closure", result);

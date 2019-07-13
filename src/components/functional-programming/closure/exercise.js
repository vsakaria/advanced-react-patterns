function add(x) {
  return function(y) {
    return x + y;
  };
}

// or
// const add = x => y => x + y;
const addFive = add(5);
const result = addFive(5); // should output 12

console.log("Closure", result);

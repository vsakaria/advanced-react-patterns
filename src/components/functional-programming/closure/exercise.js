const add = x => y => x + y;

const addFive = add(5);
const result = addFive(5); // should output 12

console.log("Closure", result);

/*
1- Is the inner function pure?
Yes because once it is returned the inner state x is no longer important.
addFive for all intense and purposes is pure.

2- Want is executed first, the inner of the outer function?
Outer which returns the inner which is then exectuted.

*/

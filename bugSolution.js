function foo(x) {
  //Check for null or undefined
  if (x === null || x === undefined || !x.hasOwnProperty('length')) {
    return 0; // Handle null, undefined, and non-array cases
  } else {
    return x.length; 
  }
}
//Example usage
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo({})); // Output: 0
console.log(foo("hello")); // Output: 5
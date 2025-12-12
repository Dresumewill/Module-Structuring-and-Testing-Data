// Predict and explain first...
//  =============> I predict the code will result in a Syntax Error that halts execution before the function can even be called. 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
  // let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  // return str;
// }

// =============> The error occurs because the variable name str is used twice: first as a function parameter ( function capitalise()), and second, as a new variable declared inside the function(let str = ...).
// The let keyword prevents redeclaration in the same scope, leading to a SyntaxError.
// =============> write your new code here
function capitalise(str) {
  // Remove ¨let¨ keyword to reassign the existing ¨str¨
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str; 
}

console.log(capitalise("hello world"));
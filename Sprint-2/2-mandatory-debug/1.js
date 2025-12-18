// Predict and explain first...
//  =============> My prediction will be that the sum of 10 and 32 will be undefined. no error will be shown

// function sum(a, b) {
//  return;
//  a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The issue here is the semicolon after the return keyword and the line break before the addition. A return statement ends the execution of a function immediately, because theres is a semicolon after the return
// The line a + b comes after the return statement therefore, make it unreachable code. Even the semicolon was not present
// If you put return on one line and the value on another line, javascript will assumed you meant return; return nothing.

// Finally, correct the code to fix the problem
//  =============> write your new code here
// To fix this, the expression i want to return must start on the same line as the return keyword
function sum(a, b) {
  return a + b;
}

// Expected Output: The sum of 10 and 32 is 42
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

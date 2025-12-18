// Predict and explain first...

// =============> I predicted that the output will be two lines; 
// 1. 320, 2. The result of multiplying 10 and 32 is undefined.


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> The error logic occur because of the multiply function logs, the result to the console does not return it to the code that called it. 
// 1. The Side Effect - multiply(10, 32) is called inside the template literal, the first thing it does is execute console.log(a * b), which print 320. 
// 2. The missing return - in Javascript, if a function does not have a return statement, it automaticlly returns the value undefined by default. 
// 3. The result - The template literal recieves that undefined value. therefore the outer console.log prints out the string "Th result of multiplying 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here

// Predict and explain first...

// Why will an error occur when this program runs?
// =============> On this code, two distinct errors will occour; Inside the function (convertToPercentage): 
// A SyntaxError will occur because the function attempts to redeclare the variable decimalNumble inside the function body (const decimalNumber = 0.5;)
// when it is already define as a parameter (function convertToPercentage(decimalNumber)). 
// and; 
// 2. Outside the function (Final console.log): where a referenceError will occur when the program tries to execute console.log(decimalNumber). The variable decimalNumber only exists inside the function´s scope and it´s not defined in the console.log

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  // const percentage = `${decimalNumber * 100}%`;

  // return percentage;
// }

// console.log(decimalNumber);

// =============> The primary reason this program will  fail to produce meaningful output is in twofold: 
// 1. Scope Error (ReferenceError); and 
// 2. Redeclaration Error (SyntaxError)

// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumberToConvert = 0.5; // Define the number in the global scope so we can pass it to the function and log the result

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

const result = convertToPercentage(decimalNumberToConvert); // Call the function and pass the globally defined variable as an argument

console.log(result); // Log the result of the function call
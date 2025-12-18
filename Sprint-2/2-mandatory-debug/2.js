// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict the output will be "3" for all three line
// "The last digit of 42 is 3", "The last digit of 105 is 3", and "The last digit of 806 is 3"
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// After running the code, the output results are;
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> The function is not working properly because of scope and missing parameters
// The function definition function getLastDigit() { ... } empty parentheses. This means it is defined to accept zero arguments.
// When you call getLastDigit(42), the computer passes 42 but the function has no variable name to catch it, so the 42 is effectively ignored.
// Inside the function, the code refers to the variable num. Since there is no local variable or parameter named "num" inside the function, Javascript looks up the scope chain and finds the global variable const num = 103;
// Result- Every time the function runs, it ignores the input and calculates the last digit of the global number 103, which is always "3".

// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

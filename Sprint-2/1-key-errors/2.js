
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict the code will result in a SyntaxError when the Javascript engine attepts to parse the function definition. 
// Because the error is cause by placing a numeric literal (3) in the parameter list instead of a valid parameter name (an identifier).
//function square(3) {
    //return num * num;
//}

// =============> The error message is SyntaxError: Unexpected number

// =============> The error occurs because the parameter list within a function definition (function square(..)) 
// should contain a valid identifiers (i.e variable names) and not a literal value like numbers, strings, or booleans.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3));
console.log(square(6));
console.log(square(5));



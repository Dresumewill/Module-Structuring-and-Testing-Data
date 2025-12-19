// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// To solve this, there are two distinct string operations that i need to pipeline, the first is to Capitalize every letter in the string to uppercase, while the second is to replace every space character to underscore _
function toUpperSnakeCase(text) {
    // convert the string to uppercase
    const upperText = text.toUpperCase();

    // Replace all space with underscores using .replaceAll()
    const snakeCaseText = upperText.replaceAll(` `, `_`);
    
    return snakeCaseText;
}

function toUpperCase(text) {
    return text.toUpperCase().replaceAll(` `, `_`);
}

console.log(toUpperCase("hello there"));
console.log(toUpperCase("lord of the rings"))
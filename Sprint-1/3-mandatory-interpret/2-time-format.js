const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);
console.log(movieLength)
console.log(remainingSeconds)
console.log(totalMinutes)
console.log(remainingMinutes)
console.log(totalHours)

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/* In this program, there are six variable declaration, 
the list is as follows: 
i.  const movieLength, 
ii. const remainingSeconds
iii. const totalMinutes
iv.  const remainingMinutes
v.  const totalHours
vi. const result */

// b) How many function calls are there?
/* There is only 1 function call in the program and the call is console.log(result)*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/* This computes the remainder left over when one operand (movieLength) is divided by a second operand (60)
It is the number of seconds remaining after the total second (movieLength) have been converted into whole minute.
meanwhile they are 60 seconds in a minute, dividing by 60 and taking the remainder will give the seconds that don´t make up a full minute. */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* Line 4 is const totalMinutes = (movieLength - remainingSeconds) / 60;
The expression calculates the total number of whole minutes contained in the (movieLength)
i.e movieLength - remainingSeconds which subtraction removes the partial seconds, then leaving a value that is divisible perfectly by 60. 

(...) / 60; This division converts the total seconds into total minutes. */ 
// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

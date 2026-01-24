// const 12HourClockTime = "20:53"; // Error: variable name can not start with a number
// const 24hourClockTime = "08:53"; // Error: variable name can not start with a number


// This is a syntaxError: invalid or unexpected token
// To start, the Variable has to be renamed with a letter on both

const time24Hour = "20:53";
const time12Hour = "08:53";

// To structure the data for conversion (demonstrating the logic)
const thisIs24HourTime = "20:53";

// To convert 20:53 (8:53 PM), you'd need logic:
const thisIs12HourTime = "08:53 PM";

console.log(`24-Hour Time: ${thisIs24HourTime}`);
console.log(`12-Hour Time: ${thisIs12HourTime}`);
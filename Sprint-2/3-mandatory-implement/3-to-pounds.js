// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
/*const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`); */

// You will need to declare a function called toPounds with an appropriately named parameter.
function toPounds(penceString) {
    const penceStringWithoutTrailingP = penceString.substring(
        0, 
        penceString.length - 1
    );

// pad the sting with zeros if itś short (e.g, "5" becomes "005")
// This ensures we always have enough digits to split pounds and pence correct
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
    0, 
    paddedPenceNumberString.length - 2
);

// extract the pence (the last two digits)
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)
.padEnd(2, "0");

// Return the formatted string
return `£${pounds}.${pence}`;
}

// You should call this function a number of times to check it works for different inputs
// --- Verification: calling the function with different inputs ---
console.log(toPounds("399p"));
console.log(toPounds("50p"));
console.log(toPounds("1250p"));
console.log(toPounds("5p"));


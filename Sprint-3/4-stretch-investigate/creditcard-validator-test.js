const validateCreditCard = require("./credit-card-validator");

console.log("---Valid Cards (should be true) ---");
console.assert(validateCreditCard("9999777788880000") === true, "Test 1 Failed");
console.assert(validateCreditCard("6666666666661666") === true, "Test 2 Failed");

console.log("--- Invalid Cards (should be false) ---");
// Invalid characters
console.assert(validateCreditCard("a923671526d81112") === false, "Test 3 Failed");
// Only one type of number
console.assert(validateCreditCard("5555555555555555") === false, "Test 4 Failed");
// Sum less than 16
console.assert(validateCreditCard("1111111111111110") === false, "Test 5 Failed");
// Odd number final
console.assert(validateCreditCard("6666666666666661") === false, "Test 6 failed");

console.log("All tests completed!");
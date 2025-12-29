const validateCreditCard = require("./credit-card-validator");

console.log("---Valid Cards (should be true) ---");
console.assert(validateCreditCard("9999777788880000") === true, "Test 1 Failed");
console.assert(validateCreditCard("6666666666661666") === true, "Test 2 Failed");

console.log("--- Invalid Cards (should be false) ---");

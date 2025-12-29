// Rule 1: Number must be exactly 16 digits
function validateCreditCard(cardNumber) {
    if (cardNumber.length !== 16) {
        return false;
    }

    let sum = 0;
    let allDigitsAreSame = true;

    // loop through the card number once to check for invalid characters, calculate the sum, and check for diversity
    for (let i = 0; i < cardNumber.length; i++) {
        const currentDigit = cardNumber[i];
        // Check if the character is a valid number (0-9) 
        // if we find a letter or symbol, return false
        if (currentDigit < `0` || currentDigit > `9`) {
            return false;
        }
    }

    // Accumulate the sum
    sum += Number(currentDigit);
}
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

    // Accumulate the sum
    sum += Number(currentDigit);

    if (currentDigit !== cardNumber[0]) {
        allDigitsAreSame = false;
    }
  }

  // Check if the loop finished and allDigitalAreSame is still true
  if (allDigitsAreSame) {
    return false;
  }

  // When the final digit must be even
  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // This is where the sum of all digits must be greater than 16
  if (sum <= 16) {
    return false;
  }
  // if the card is valid
  return true;
}

module.exports = validateCreditCard;
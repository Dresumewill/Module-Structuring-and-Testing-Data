function passwordValidator(password) {
    if (password.length < 5) return false;

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;
    const symbols = "!#$%,*&";

    // Loop through each character to check rules
  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= "A" && char <= "Z") {
      hasUpper = true;
    } else if (char >= "a" && char <= "z") {
      hasLower = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if (symbols.includes(char)) {
      hasSymbol = true;
    }
  }

  // Only return true if EVERY single flag is true
  return hasUpper && hasLower && hasNumber && hasSymbol;
}


module.exports = passwordValidator;
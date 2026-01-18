/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");
test("password has at least 5 characters", () => {
    // Arrange
    const password = "12345";
    // Act
    const result = isValidPassword(password);

    // Assert
    expect(result).toEqual(false);
});

test("should return false if missing an uppercase letter", () => {
    // Has length, lower, number, and symbol, but no Uppercase
    expect(isValidPassword("abc1!")).toBe(false);
});

test("should return false if missing a symbol", () => {
    // Has length, upper, lower, and number, but no symbol
    expect(isValidPassword("Abcd1")).toBe(false);
});

test("should return false if password was previously used", () => {
    const history = ["Secret1", "Oldpass2*"];
    expect(isValidPassword("Secret1!", history)).toBe(true);
});

test("should return true when all conditions are met", () => {
    // 8 chars, Upper, lower, number, symbol, not in history
    expect(isValidPassword("Secure1!", ["Old124$"])).toBe(true);
});
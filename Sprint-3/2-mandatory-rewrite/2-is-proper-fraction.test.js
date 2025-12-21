const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for improper fractions", () => {
  expect(isProperFraction(3, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions
test("should return true for a negative proper fraction", () => {
  // -4/7 is proper because the magnitude 4 is less than 7
  expect(isProperFraction(-4, 7)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator
test("should return false when numerator and denominator are equal", () => {
  // 3/3 equals 1, so it is not a proper fraction
  expect(isProperFraction(3, 3)).toEqual(false);
});

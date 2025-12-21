const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return correct value for number cards", () => {
  expect(getCardValue("2♠")).toEqual(2);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards", () => {
  expect(getCardValue("J♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for any Ace", () => {
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw error for invalid cards", () => {
  expect(() => getCardValue("1♠")).toThrow('Invalid card rank.');
});
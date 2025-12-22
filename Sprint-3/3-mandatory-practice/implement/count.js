function countChar(stringOfCharacters, findCharacter) {
    let counter = 0;
    let arrOfChars = stringOfCharacters.split("");
    arrOfChars.forEach((char) => {
        if (char === findCharacter) counter++
    });

    return counter;
}

module.exports = countChar;
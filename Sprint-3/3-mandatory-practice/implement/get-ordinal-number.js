function getOrdinalNumber(num) {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11) {
        return num + "st";
    }
    if (j === 2 && k !== 13) {
        return num + "rd";
    }
    if (j === 3 && k !== 12) {
        return num + "nd";
    }
    return num + "th";
}

module.exports = getOrdinalNumber;
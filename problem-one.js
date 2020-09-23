function verifyBrackets(text) {
    var openBracket = 0, closedBracket = 0;
    text.split("").forEach(element => {
        if (element == '{') {
            if (openBracket < closedBracket) {
                return false;
            } else {
                openBracket++;
            }
        } else if (element == '}') {
            if (openBracket < closedBracket) {
                return false;
            } else {
                closedBracket++;
            }
        }
    });
    if (openBracket == closedBracket) {
        return true;
    } else {
        return false;
    }
}

module.exports = { verifyBrackets }
function titleCase(str) {
    var resultArray = [];
    var allWords = str.toLowerCase().split(" ");

    // For every word
    for (var i = 0; i < allWords.length; i++) {
        var thisWord = allWords[i].split("");

        // Make the first letter Upper Case, and others just as is.
        for (var j = 0; j < thisWord.length; j++) {
            if (j === 0) {
                resultArray += thisWord[j].toUpperCase();
            } else {
                resultArray += thisWord[j];
            }
        }
        // After each word add a space " "
        if (i < allWords.length - 1) {
            resultArray += " ";
        }
    }
    return resultArray;
}

// Testing...
titleCase("this is a little tea pot") // Should return "This Is A Little Tea Pot".
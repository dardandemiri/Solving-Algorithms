function findLongestWord(str) {
    var longestWord = 0;
    var array = str.split(" ");

    // Check all words, and if the current word
    // is biger than the last one replace it.
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > longestWord) {
            longestWord = array[i].length;
        }
    }
    return longestWord;
}

// Testing...
findLongestWord("The quick brown fox jumped over the lazy dog") // Should return a number.
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
titleCase("this is a little tea pot"); // Should return "This Is A Little Tea Pot".


function titleCaseLevel2(str) {

  var strToArr = str.toLowerCase().split(" ");

  var result = strToArr.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  return result.join(" ");

}

titleCase("molla kuqe");

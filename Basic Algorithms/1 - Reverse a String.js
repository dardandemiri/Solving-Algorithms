function reverseString(str) {
    var finalArr = [];
    var splitedArr = str.split(" ");
    var revArr = splitedArr.reverse(); //Reversing the whole string first.

    // Reverse every word
    for (var i = 0; i < revArr.length; i++) {
        finalArr[i] = revArr[i].split("").reverse().join("");
    }

    return finalArr.join(" ");
}

// Testing...
reverseString("Hello World");

// reverseString("Greetings from Earth") 
// should return "htraE morf sgniteerG".

function palindrome(str) {

	// Replace all non-word characters or '_' using /[\W_]+/g Regex
    var string1 = str.replace(/[\W_]+/g, "").toLowerCase();

    // Make a copy of string1 and reverse it.
    var string2 = string1.split('').reverse().join('');

    // Check if string1 is equal to string2  (The value and type of string)
    if (string1 === string2) {
        return true;
    } else return false;
}


// Testing...
palindrome("My age is 0, 0 si ega ym."); // Should return true.
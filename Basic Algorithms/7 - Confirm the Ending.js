function confirmEnding(str, target) {
    // Get the target.length of ending letters of str.  
    var endinLetters = str.substr(-target.length, target.length);
    
    // Return True or False if the endinLetters is equal with target.
    return endinLetters === target ? true : false;
}

confirmEnding("Dardan Demiri", "miri");
// Returns True, because str ends with target(miri)

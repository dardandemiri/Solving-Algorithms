function largestOfFour(arr) {
    var result = [];
    var subArray = [];

    // For each array given or iArray
    for (var i = 0; i < arr.length; i++) {
        var bigestNumber = 0;

        // Find the biggest number jElement of iArray
        for (var j = 0; j < arr[i].length; j++) {

            // The compare the jElement of iArray, with te biggestNumber
            if (arr[i][j] > bigestNumber) { 
                bigestNumber = arr[i][j];
                subArray = arr[i][j];
            }
        }
        result[i] = subArray;
    }
    return result;
}

largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]); // return's [27, 5, 39, 1001]

function factorialize(number) {
    var array = [];
    var result = 1;

    // Creatingan array with numbers from 1 to the number user gives
    for (var i = 0; i < number; i++) {
        array[i] = i + 1;
    }

    // Loop in array and multiply each element of that array with te result
    // and store it in result. 
    for (var j = 0; j < array.length; j++) {
        result = result * array[j];
    }
    return result;
}

// Testing...
factorialize(5); // should return 120. Because 5*4*3*2*1 = 120

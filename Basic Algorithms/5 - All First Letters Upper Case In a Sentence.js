function titleCase(str) {

    var stringToArray = str.toLowerCase().split(" ");

    var newArray = [];


    for (var i = 0; i < stringToArray.length; i++) {

        var thisWord = stringToArray[i].split("");


        for (var j = 0; j < thisWord.length; j++) {

            if (j === 0) {

                newArray += thisWord[j].toUpperCase();

            } else {

                newArray += thisWord[j];

            }

        }
        if (i < stringToArray.length - 1) {
            newArray += " ";
        }
    }


    return newArray;
}


titleCase("I'm a little tea pot");

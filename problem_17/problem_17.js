// If all the numbers from 1 to 1000 inclusive were written out in words, how many letters would be used?
function numberOfLetters() {
    "use strict";

    //start time counter
    var t0 = performance.now();
    var letters = 0;

    //arrays to store count of letters for numbers
    var singleDigits = [3, 3, 5, 4, 4, 3, 5, 5, 4]; //1-9
    var teenDigits = [3, 6, 6, 8, 8, 7, 7, 9, 8, 8]; //10-19
    var tenDigits = [6, 6, 5, 5, 5, 7, 6, 6]; // 20,30,40..90
    var hundred = 7; //hundred
    var thousand = 11; //one thousand
    var and = 3;
    var first99; //sum of letters from 1-99

    //count letters for numbers 1 to 9
    for (var i = 0; i < singleDigits.length; i++) {
        letters += singleDigits[i];
    }

    //count letters for numbers 10 to 19
    for (var i = 0; i < teenDigits.length; i++) {
        letters += teenDigits[i];
    }

    //count letters 20 to 99
    for (var i = 0; i < tenDigits.length; i++) {
        //count letters for 10,20,30.....90
        letters += tenDigits[i];
        for (var j = 0; j < singleDigits.length; j++) {
            //count letters for 21 to 29, 31 to 39...91 to 99
            letters += tenDigits[i] + singleDigits[j];
        }
    }

    //store letters for first 99 numbers
    var first99 = letters;

    //count letters 100 to 999
    for (var i = 0; i < singleDigits.length; i++) {
        letters += singleDigits[i] + 100 * hundred + 99 * hundred + first99;
    }

    //count letters for thousand
    letters += thousand;

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(letters);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);

}

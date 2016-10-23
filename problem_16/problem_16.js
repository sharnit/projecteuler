// Note: using https://github.com/peterolson/BigInteger.js
// What is the sum of the digits of the number 2^1000?
//arg number=2, power = 1000
function sumOfDigits(number, power) {
    "use strict";

    //start time counter
    var t0 = performance.now();

    //store product number^power as a big integer
    var product = bigInt("1");
    for (var i = 0; i < power; i++) {
        product = product.multiply(number);
    }

    //store digits of product in an array and sum them up
    var digits = new Array();
    digits = product.toString().split("").map(Number);
    var sum = 0;
    for (var j = 0; j < digits.length; j++) {
        sum += digits[j];
    }

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(sum);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

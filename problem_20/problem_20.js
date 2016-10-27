// Note: using https://github.com/peterolson/BigInteger.js
// Find the sum of the digits in the number 100!
// arg n = 100
function firstSunday(n) {
    "use strict";
    var t0 = performance.now();

    //calculate factorial of a number and store it as big integer
    var factorial = bigInt("1");
    for (var i = n; i > 0; i--) {
        factorial = factorial.multiply(i);
    }

    //store digits of product in an array and sum them up
    var digits = new Array();
    digits = factorial.toString().split("").map(Number);
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

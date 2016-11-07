//function to calculate the sum of proper divisors of the number
function properDivisorSum(n) {
    var sum = 1;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            var extraDivisor = n/i;
            if (extraDivisor !== i)
                {
                sum += extraDivisor;
                }
        }
    }
    return sum;
}

//Evaluate the sum of all the amicable numbers under 10000
function firstSunday() {
    "use strict";
    var t0 = performance.now();
    var sum = 0;
    var sumAmicable = 0;

    //check for amicamble pairs and calculate their sum
    for (var i = 0; i < 10000; i++) {
        sum = properDivisorSum(i);
        if (i === properDivisorSum(sum) && i !== sum) {
            sumAmicable +=i;
        }
    }

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(sumAmicable);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

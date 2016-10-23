function collatz(n) {
    var number = new Array();
    number.push(n);
    do {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        number.push(n)
    } while (n != 1)
    return number;
}


// Which starting number, under one million, produces the longest Collatz chain?
function longestCollatz(n) {
    "use strict";

    //start time counter
    var t0 = performance.now();

    var collatzNumber = 0;
    var longestCollatzChain = 0;
    var collatzArr = new Array();

    //calculate collatz number with longest chain
    for (var i = 1; i < 1000000; i++) {
        collatzArr = collatz(i);
        if (collatzArr.length > longestCollatzChain) {
            longestCollatzChain = collatzArr.length;

            collatzNumber = i;
        }
    }

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0) / 1000;

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(collatzNumber);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " sec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

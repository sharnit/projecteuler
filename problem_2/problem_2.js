function evenFibonacci() {
    "use strict";
    //first value
    var x = 1;
    //second term
    var y = 2;
    var temp;
    var evenSum = y;
    while (x+y < 4000000) {
        temp = x;
        x = y;
        y = temp + y;
        if (y % 2 === 0) {
            evenSum += y;
        }
    }
    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(evenSum);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);
}

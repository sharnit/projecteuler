//calculate permuation of a number
function permutation(n) {
    var permutation = 1;
    while (n != 1) {
        permutation *= n;
        n--;
    }
    return permutation;
}

//calculate nCr combination
function combination(n, r) {
    var combination;
    combination = permutation(n) / (permutation(n - r) * permutation(r));
    return combination;
}

// How many right/down routes are there through a 20×20 grid?
function latticePath() {
    "use strict";

    //start time counter
    var t0 = performance.now();

    //calculate number of right/down paths
    var paths = parseInt(combination(40, 20), 10);

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(paths);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

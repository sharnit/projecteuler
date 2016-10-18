//calculate triplet
//since a+b+c =1000 and a+b <c that means c <500
function calculateTriplet() {
    for (var i = 500; i > 0; i--) {
        for (var j = 500; j > 0; j--) {
            for (var k = 500; k > 0; k--) {
                if (i + j + k === 1000) {
                    if (Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) {
                        return i * j * k;
                    }
                }
            }
        }
    }
}

// calculate pythagorean triplet a,b,c such that a+b+c = 1000
function triplet() {
    "use strict";
    var t0 = performance.now();
    var product = calculateTriplet()

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);
    console.log("time taken: " + time.toFixed(1) + " millisec");

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(product);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);

}

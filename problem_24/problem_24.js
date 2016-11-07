//calculate permutation of a number
function permutation(n) {
    var permutation = 1;
    if (n === 0) {
        permutation = 1;
    } else {
        while (n != 1) {
            permutation *= n;
            n--;
        }
    }
    return permutation;
}

//calculate a digit of millionth permutation, push into array and iterate
//until all 10 digits are found
function calcDigit(tempDigits, digits, limit) {
    while (tempDigits.length !== 0) {
        var perm = 0;
        var prevPerm = 0;
        // find permutations of n-1 numbers in array[n] for each digit in ascending order
        // if total permutations exceed the limit then push into millionth array
        for (var number of tempDigits) {
            prevPerm = perm;
            perm += permutation(tempDigits.length - 1);
            if (perm >= limit) {
                digits.push(number);
                var index = tempDigits.indexOf(number);
                if (index > -1) {
                    tempDigits.splice(index, 1);
                    break;
                }
            }
        }
        //call the function recursively until all 10 digits of millionth array are found
        calcDigit(tempDigits, digits, limit - prevPerm);
    }
}

//What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
function lexiPermutation() {
    "use strict";
    var t0 = performance.now();
    var digits = new Array();
    var tempDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var limit = 1000000;
    calcDigit(tempDigits, digits, limit);
    var millionthPerm = digits.toString().replace(/,/g, "");

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);
    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(millionthPerm);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

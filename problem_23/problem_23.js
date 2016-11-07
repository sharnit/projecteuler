//function to calculate the sum of proper divisors of the number
function properDivisorSum(n) {
    var sum = 1;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            var extraDivisor = n / i;
            if (extraDivisor !== i) {
                sum += extraDivisor;
            }
        }
    }
    return sum;
}

//Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers
function nonAbudantSum() {
    "use strict";
    var t0 = performance.now();
    var sum = 0;

    // var abundantSumLimit = 28123;
    // actual limit above which every number can be
    // expressed as sum of two abundant numbers is 20161
    var abundantSumLimit = 20161;

    //Find all abundant numbers less than abundantSumLimit
    var arrAbundant = new Array();
    for (var i = 12; i <= abundantSumLimit; i++) {
        sum = properDivisorSum(i);
        if (sum > i) {
            arrAbundant.push(i);
        }
    }

    console.log(arrAbundant);

    //create array of natural numbers upto abundantSumLimit
    var arrNumber = new Array();
    for (var m = 1; m <= abundantSumLimit; m++) {
        arrNumber.push(m);
    }
    console.log(arrNumber);

    //calculate sums of two abundant numbers and delete from arrNumber
    for (var j = 0; j < arrAbundant.length; j++) {
        for (var k = j; k < arrAbundant.length; k++)

        {
            var abundantSum = arrAbundant[j] + arrAbundant[k];
            if (abundantSum <= abundantSumLimit) {
                var index = arrNumber.indexOf(abundantSum);
                if (index > -1) {
                    arrNumber.splice(index, 1);
                }
            }
        }
    }

    //sum of all the positive integers which cannot be written as the sum of two abundant numbers.
    var count = 0;
    for (var x = 0; x < arrNumber.length; x++) {
        count += arrNumber[x];
    }
    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0) / 1000;

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(count);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " sec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

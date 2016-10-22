//find the nth triangle number
function nthTriangleNumber(n) {
    return n * (n + 1) / 2;
}

//find factors of a number n
function numberOfFactors(n) {
    var factors = 0;
    var sqrt = Math.sqrt(n);
    for (var i = 0; i <= sqrt; i++) {
        if (n % i === 0) {
            factors++;
            if (n / i !== i) {
                factors++;
            }
        }
    }
    return factors;
}

//What is the value of the first triangle number to have over five hundred divisors?
function divisors() {
    "use strict";
    var t0 = performance.now();

    var factors = 0;
    var number;
    var count = 0;
    var i = 1;

    //calculate first number with over 500 divisors
    while (count < 500) {
        factors = numberOfFactors(nthTriangleNumber(i));
        if (factors > 500) {
            number = nthTriangleNumber(i);
            break;
        } else {
            count = factors;
            i++;
        }
    }

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0) / 1000;

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(number);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " sec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

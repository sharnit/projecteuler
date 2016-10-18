// calculate nth prime
// arg p = 10001
function nthPrime(p) {
    "use strict";
    //create array to hold prime numbers found
    var prime = new Array();

    //store first two prime number in prime array
    prime.push(2);
    prime.push(3);

    //start testing from number 5
    var number = 5;
    var isPrime;
    var squared;

    //start time counter
    var t0 = performance.now();

    // already have first two prime numbers so declare count accordingly
    var count = 2;
    while (count != p) {
        isPrime = true;
        squared = Math.sqrt(number);

        //check to see if number is prime by testing against found prime numbers
        for (var i = 0; i < prime.length; i++) {
            if (prime[i] <= squared) {
                if (number % prime[i] === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        //if number is prime add it to array and increase count
        if (isPrime) {
            count++;
            prime.push(number);
        }

        //test only odd numbers
        number += 2;
    }

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(prime[prime.length - 1]);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

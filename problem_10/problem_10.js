// calculate sum of primes below p
// arg p = 2000000
function sumPrime(p) {
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
    var sum =5;
    //start time counter
    var t0 = performance.now();

    // check primality of numbers below p
    while (number < p) {
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

        //if number is prime add it to array and sum
        if (isPrime) {
            sum +=number;
            prime.push(number);
        }

        //test only odd numbers
        number += 2;
    }

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0)/1000;

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(sum);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " sec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

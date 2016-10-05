//find largest primr factor of a number
function largestPrime(number) {
    "use strict";
    //staring prime number
    var divisor = 2;
    //run until left with largest prime factor
    while(number != divisor)
        {
            //find smallest factor
            if(number % divisor == 0)
                {
                    number /= divisor;
                }
            else
                {
                    divisor++;
                }
        }
    console.log(divisor);
    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(divisor);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);
}





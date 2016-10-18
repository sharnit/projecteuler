//Sum of squares for firts n natural numbers = n(n+1)(2n+1)/6
function sumOfSquares(n)
{
    return n*(n+1)*(2*n+1)/6;
}

//square of sum of first n natural numbers = [n(n+1)/2]^2
function squareOfSum(n)
{
    return Math.pow(n,2)*Math.pow((n+1),2)/4;
}

//Difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function difference(n) {
    "use strict";
    var difference = squareOfSum(n) - sumOfSquares(n);

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(difference);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);
}

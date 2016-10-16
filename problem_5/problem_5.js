//find greatest common divisor of two numbers
function gcd(a, b)
{
    return !b ? a : gcd (b, a%b);
}

//find lcm of two numbers
function lcm (a, b)
{
    return ((a*b)/ gcd(a,b));
}

//find smallest multiple of first 20 numbers
function smallestMultiple() {
    "use strict";
    //create array of first 20 numbers
    var myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    var multiple = 1;
    myArr.map(function(number){
        multiple = lcm(multiple, number)
    });
    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(multiple);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);
}





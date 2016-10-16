//function to reverse a string
function stringReverse(string){
    return string.split("").reverse().join("");
}

//find largest palindrome that is product of two 3 digit numbers
function largestPalindrome(number) {
    "use strict";
    //variables to store number as a string and its reverse
    var n, r;
    //variables to store product of two 3 digit numbers and current largest palindrome
    var product = 0;
    var palindrome = 0;
    for( var i=0; i <=1000; i++)
        {
            for (var j=0; j <=1000; j++)
            {
                product = i*j;
                n = product.toString();
                r = stringReverse(n);
                if((n === r) && (product > palindrome))
                    {
                        palindrome = product;
                    }
            }
        }
    console.log("largest palindrome is " + palindrome);

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(palindrome);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);
}

//Find the maximum total from top to bottom of the triangle below
function maxTotTriangle() {
    "use strict";

    //start time counter
    var t0 = performance.now();

    var triangleNumberStr = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";

    //convert string into array of numbers
    var triangleNumberArr = triangleNumberStr.split(" ").filter(function (t) {
        return !isNaN(t)
    }).map(Number);
    console.log(triangleNumberArr);

    //setup numbers in an array with triangle structure
    var triangle = new Array();
    var count = 1;
    var i =0 ,j =0;
    while(i < triangleNumberArr.length)
        {
            triangle[j] = triangleNumberArr.slice(i,i+count);
            i += count;
            count++;
            j++;
            }

    //take each item in second last array as root node of a sub-tree
    //and calculate sum of root node and max of child nodes
    //iterate until the max sum is in the root node of the triangle array at [0][0]
    for(var k=triangle.length -1; k >0; k--)
        {
            var length = triangle[k].length -1;
            for(var l=0; l < length; l++)
                {
                    triangle[k-1][l] += Math.max(triangle[k][l], triangle[k][l+1])
                }
        }
    var largest = triangle[0][0];

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(largest);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

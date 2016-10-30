//Find the maximum total from top to bottom of the triangle given in txt file
function maxTotTriangle() {
    "use strict";

    //start time counter
    var t0 = performance.now();

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "triangle.txt", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var triangleNumberStr = this.responseText;
            //convert string into array of numbers
            var triangleNumberArr = triangleNumberStr.split(" ").filter(function (t) {
                return !isNaN(t)
            }).map(Number);
            console.log(triangleNumberArr);

            //setup numbers in an array with triangle structure
            var triangle = new Array();
            var count = 1;
            var i = 0,
                j = 0;
            while (i < triangleNumberArr.length) {
                triangle[j] = triangleNumberArr.slice(i, i + count);
                i += count;
                count++;
                j++;
            }

            //take each item in second last array as root node of a sub-tree
            //and calculate sum of root node and max of child nodes
            //iterate until the max sum is in the root node of the triangle array at [0][0]
            for (var k = triangle.length - 1; k > 0; k--) {
                var length = triangle[k].length - 1;
                for (var l = 0; l < length; l++) {
                    triangle[k - 1][l] += Math.max(triangle[k][l], triangle[k][l + 1])
                }
            }
            var largest = triangle[0][0];

            //create a div and attach solution to the webpage
            var solution = document.createElement("DIV");
            var text = document.createTextNode(largest);
            solution.appendChild(text);
            document.getElementById("solution").appendChild(solution);
        }
    };

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);

}

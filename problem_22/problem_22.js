//What is the total of all the name scores in the file?
function nameScores() {
    "use strict";
    var t0 = performance.now();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "names.txt", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //get list of names and store it into sorted array of names
            var txtString = this.responseText;
            var arrString = new Array();
            arrString = txtString.replace(/\"/g, "").split(",");
            arrString = arrString.sort();
            var count = 0;

            //for each individual names calculate sum of letter positions * position in array
            for (var i = 0; i < arrString.length; i++) {
                var stringNew = arrString[i];
                var sum = 0;
                for (var j = 0; j < stringNew.length; j++) {
                    sum += (stringNew.charCodeAt(j) - 64);
                }
                count += sum * (i + 1);
            }

            //create a div and attach solution to the webpage
            var solution = document.createElement("DIV");
            var text = document.createTextNode(count);
            solution.appendChild(text);
            document.getElementById("solution").appendChild(solution);
        }
    };

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);
    console.log("Time taken: " + time.toFixed(1) + "ms");

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

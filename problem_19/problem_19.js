//How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)
function firstSunday() {
    "use strict";

    var t0 = performance.now();

    var sundayFirstMonth = 0;
    var date = new Date();

    for (var i = 1901; i < 2001; i++) {
        for (var j = 0; j < 12; j++) {

            //set date of the first day of each month
            date.setFullYear(i, j, 1);

            //check if the first day of the month is Sunday
            if (date.getDay() === 0) {
                sundayFirstMonth++;
            }
        }
    }

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0);

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(sundayFirstMonth);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " millisec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);

}

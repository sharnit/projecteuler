//What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
// argument n = no of digits in fibonacci number
function fibonacci(n) {
    var firstTerm = bigInt("0");
    var secondTerm = bigInt("1");
    var fibString = "";
    var count = 1;
    var t0 = performance.now();

    //calculate the next fibonnaci number until no of digits
    //are greater than 1000
    while (fibString.length < n) {
        var nextTerm = bigInt("0")
        nextTerm = nextTerm.add(firstTerm);
        nextTerm = nextTerm.add(secondTerm);
        firstTerm = secondTerm;
        secondTerm = nextTerm;
        fibString = nextTerm.toString();
        count++;
    }

    //calculate time taken
    var t1 = performance.now();
    var time = (t1 - t0) / 1000;

    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(count);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);

    //create a div and attach time taken to webpage
    var timeStamp = document.createElement("DIV");
    var timeText = document.createTextNode(time.toFixed(1) + " sec");
    timeStamp.appendChild(timeText);
    document.getElementById("time").appendChild(timeStamp);
}

function multipleSum() {
    var sum = 0;
    //calculate sum of multiples of 3 and 5 less than 1000
    for (var i = 1; i < 1000; i++) {
        if ((i % 3 === 0) || (i % 5 == 0)) {
            sum += i;
        }
    }
    //create a div and attach solution to the webpage
    var solution = document.createElement("DIV");
    var text = document.createTextNode(sum);
    solution.appendChild(text);
    document.getElementById("solution").appendChild(solution);
}

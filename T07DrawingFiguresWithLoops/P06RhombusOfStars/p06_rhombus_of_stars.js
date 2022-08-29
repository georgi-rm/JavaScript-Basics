function rhombusOfStars(input) {

    const n = Number(input[0]);

    for (let row = 1; row <= n; row++) {
        printLine(row, n - row);
    }

    for (let row = n - 1; row > 0; row--) {
        printLine(row, n - row);
    }

    function printLine(lineNumber, countOfLeadingSpaces) {
        let line = "";

        for (let j = 0; j < countOfLeadingSpaces; j++) {
            line += " ";
        }

        for (let j = 0; j < lineNumber; j++) {
            line += "* ";
        }
        line.trimEnd();
        console.log(line);
    }
}

rhombusOfStars(["1"]);
console.log("-------------------------");
rhombusOfStars(["2"]);
console.log("-------------------------");
rhombusOfStars(["3"]);
console.log("-------------------------");
rhombusOfStars(["4"]);
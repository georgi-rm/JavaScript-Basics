function numberPyramid(input) {
    let maxNumber = Number(input[0]);

    let numbersOnLine = 0;
    let maxNumbersOnLine = 1;

    let output = "";

    for (let i = 1; i <= maxNumber; i++) {

        output += `${i} `;

        numbersOnLine++;

        if (numbersOnLine >= maxNumbersOnLine) {
            numbersOnLine = 0;
            maxNumbersOnLine++;

            console.log(output);
            output = "";
        }

    }

    if (output !== "") {
        console.log(output);
    }
}

numberPyramid(["7"]);
console.log("-------------------------");
numberPyramid(["12"]);
console.log("-------------------------");
numberPyramid(["15"]);
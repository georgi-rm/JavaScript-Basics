function minNumber(input) {
    let index = 0;
    let operation = input[index++];
    let max = Number.MIN_SAFE_INTEGER;

    while (operation !== "Stop") {
        const currentNumber = Number(operation);

        if (currentNumber > max) {
            max = currentNumber;
        }
        operation = input[index++];
    }

    console.log(max);
}

minNumber(["100", "99", "80", "70", "Stop"]);
console.log("-------------------------");
minNumber(["-10", "20", "-30", "Stop"]);
console.log("-------------------------");
minNumber(["45", "-20", "7", "99", "Stop"]);
console.log("-------------------------");
minNumber(["999", "Stop"]);
console.log("-------------------------");
minNumber(["-1", "-2", "Stop"]);

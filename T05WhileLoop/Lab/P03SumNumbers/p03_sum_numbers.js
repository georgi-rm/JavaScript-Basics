function sumNumbers(input) {
    const firstNumber = Number(input[0]);

    let index = 1;
    let sum = Number(input[index++]);

    while (sum < firstNumber) {
        sum += Number(input[index++]);
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
console.log("-------------------------");
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
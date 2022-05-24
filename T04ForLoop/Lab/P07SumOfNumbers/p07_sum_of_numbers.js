function sumOfNumbers(input) {
    const numberAsString = input[0];

    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);
console.log("-------------------------");
sumOfNumbers(["564891"]);
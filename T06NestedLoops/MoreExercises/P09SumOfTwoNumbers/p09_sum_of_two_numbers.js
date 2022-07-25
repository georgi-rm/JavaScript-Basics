function sumOfTwoNumbers(input) {
    const beginOfInterval = Number(input[0]);
    const endOfInterval = Number(input[1]);
    const magicNumber = Number(input[2]);

    let countOfCombinations = 0;

    for (let firstNumber = beginOfInterval; firstNumber <= endOfInterval; firstNumber++) {
        
        for (let secondNumber = beginOfInterval; secondNumber <= endOfInterval; secondNumber++) {
            countOfCombinations++;

            if (firstNumber + secondNumber == magicNumber) {
                console.log(`Combination N:${countOfCombinations} (${firstNumber} + ${secondNumber} = ${magicNumber})`);
                return;
            }
        }
    }

    console.log(`${countOfCombinations} combinations - neither equals ${magicNumber}`);
}

sumOfTwoNumbers(["1", "10", "5"]);
console.log("-------------------------");
sumOfTwoNumbers(["23", "24", "20"]);
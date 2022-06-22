function sumOfTwoNumbers(input) {
    let beginOfInterval = Number(input[0]);
    let endOfInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;

    for (let x1 = beginOfInterval; x1 <= endOfInterval; x1++) {
        for (let x2 = beginOfInterval; x2 <= endOfInterval; x2++) {
            combinations++;

            if (x1 + x2 == magicNumber) {
                console.log(`Combination N:${combinations} (${x1} + ${x2} = ${magicNumber})`);
                return;
            }
        }
    }

    console.log(`${combinations} combinations - neither equals ${magicNumber}`);
}

sumOfTwoNumbers(["1", "10", "5"]);
console.log("-------------------------");
sumOfTwoNumbers(["23", "24", "20"]);
console.log("-------------------------");
sumOfTwoNumbers(["88", "888", "1000"]);
console.log("-------------------------");
sumOfTwoNumbers(["88", "888", "2000"])
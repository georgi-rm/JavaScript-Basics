function oddEvenPosition(input) {
    const countOfNumbers = Number(input[0]);

    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;


    for (i = 1; i <= countOfNumbers; i++) {
        const currentNumber = Number(input[i]);

        if (i % 2 == 0) {
            evenSum += currentNumber;

            if (currentNumber < evenMin) {
                evenMin = currentNumber;
            }

            if (currentNumber > evenMax) {
                evenMax = currentNumber;
            }
        } else {
            oddSum += currentNumber;

            if (currentNumber < oddMin) {
                oddMin = currentNumber;
            }

            if (currentNumber > oddMax) {
                oddMax = currentNumber;
            }
        }
    }

    let oddMinOutput = "No";
    let oddMaxOutput = "No";
    let evenMinOutput = "No";
    let evenMaxOutput = "No";

    if (oddMin != Number.POSITIVE_INFINITY) {
        oddMinOutput = oddMin.toFixed(2);
    }
    if (oddMax != Number.NEGATIVE_INFINITY) {
        oddMaxOutput = oddMax.toFixed(2);
    }
    if (evenMin != Number.POSITIVE_INFINITY) {
        evenMinOutput = evenMin.toFixed(2);
    }
    if (evenMax != Number.NEGATIVE_INFINITY) {
        evenMaxOutput = evenMax.toFixed(2);
    }

    console.log(`OddSum=${oddSum.toFixed(2)},` );
    console.log(`OddMin=${oddMinOutput},`);
    console.log(`OddMax=${oddMaxOutput},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMinOutput},`);
    console.log(`EvenMax=${evenMaxOutput}`);
}

oddEvenPosition(["6", "2", "3", "5", "4", "2", "1"]);
console.log("-------------------------");
oddEvenPosition(["2", "1.5", "-2.5"]);
console.log("-------------------------");
oddEvenPosition(["1", "1"]);
console.log("-------------------------");
oddEvenPosition(["0"]);
console.log("-------------------------");
oddEvenPosition(["5", "3", "-2", "8", "11", "-3"]);
console.log("-------------------------");
oddEvenPosition(["4", "1.5", "1.75", "1.5", "1.75"]);
console.log("-------------------------");
oddEvenPosition(["1", "-5"]);
console.log("-------------------------");
oddEvenPosition(["3", "-1", "-2", "-3"]);
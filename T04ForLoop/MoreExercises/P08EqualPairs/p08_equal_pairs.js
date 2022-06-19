function equalPairs(input) {
    const countOfPairs = Number(input[0]);

    let previousPairValue = Number(input[1]) + Number(input[2]);
    let maximumDifference = 0;

    for (i = 1; i < countOfPairs; i++) {
        const pairValue = Number(input[1 + i * 2]) + Number(input[2 + i * 2]);

        const currentDifference = Math.abs(previousPairValue - pairValue);

        if (currentDifference > maximumDifference) {
            maximumDifference = currentDifference;
        }

        previousPairValue = pairValue;
    }

    if (maximumDifference == 0) {
        console.log(`Yes, value=${previousPairValue}`);
    } else {
        console.log(`No, maxdiff=${maximumDifference}`);
    }
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
console.log("-------------------------");
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
console.log("-------------------------");
equalPairs(["2", "-1", "0", "0", "-1"]);
console.log("-------------------------");
equalPairs(["2", "1", "2", "2", "2"]);
console.log("-------------------------");
equalPairs(["1", "5", "5"]);
console.log("-------------------------");
equalPairs(["2", "-1", "2", "0", "-1"]);
console.log("-------------------------");
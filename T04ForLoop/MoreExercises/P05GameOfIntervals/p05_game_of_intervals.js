function gameOfIntervals(input) {
    const countOfRounds = Number(input[0]);

    let points = 0;
    let countInvalidNumbers = 0;
    let countNumbers0To9 = 0;
    let countNumbers10To19 = 0;
    let countNumbers20To29 = 0;
    let countNumbers30To39 = 0;
    let countNumbers40To50 = 0;

    for (i = 1; i <= countOfRounds; i++) {
        const number = Number(input[i]);

        if (number < 0 || number > 50) {
            points /= 2;
            countInvalidNumbers++;
        } else if (number < 10) {
            points += number * 0.2;
            countNumbers0To9++;
        } else if (number < 20) {
            points += number * 0.3;
            countNumbers10To19++;
        } else if (number < 30) {
            points += number * 0.4;
            countNumbers20To29++;
        } else if (number < 40) {
            points += 50;
            countNumbers30To39++;
        } else {
            points += 100;
            countNumbers40To50++;
        }
    }

    let percentageInvalidNumbers = countInvalidNumbers / countOfRounds * 100;
    let percentageNumbers0To9 = countNumbers0To9 / countOfRounds * 100;
    let percentageNumbers10To19 = countNumbers10To19 / countOfRounds * 100;
    let percentageNumbers20To29 = countNumbers20To29 / countOfRounds * 100;
    let percentageNumbers30To39 = countNumbers30To39 / countOfRounds * 100;
    let percentageNumbers40To50 = countNumbers40To50 / countOfRounds * 100;

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${percentageNumbers0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentageNumbers10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentageNumbers20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentageNumbers30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentageNumbers40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentageInvalidNumbers.toFixed(2)}%`);
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])